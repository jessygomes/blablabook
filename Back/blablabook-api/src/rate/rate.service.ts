import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Injectable()
export class RateService {
  constructor(private readonly prisma: PrismaService) {}

  //! Récupérer la note moyenne d'un livre
  async getBookAverageRating(bookId: number): Promise<number> {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
      select: { averageRating: true },
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    return book.averageRating || 0;
  }

  //! Récupérer la note d'un user pour un livre spécifique
  async getUserRateForBook(
    userId: number,
    bookId: number,
  ): Promise<{ rating: number } | null> {
    const rate = await this.prisma.rate.findUnique({
      where: {
        userId_bookId: {
          userId,
          bookId,
        },
      },
      select: { rating: true },
    });

    return rate;
  }

  //! Créer une note pour un livre
  async createRate(userId: number, createRateDto: CreateRateDto) {
    const { bookId, rating } = createRateDto;

    // Vérifier que le livre existe
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    // Vérifier si l'utilisateur a déjà noté ce livre
    const existingRate = await this.prisma.rate.findUnique({
      where: {
        userId_bookId: {
          userId,
          bookId,
        },
      },
    });

    if (existingRate) {
      throw new ConflictException(
        'You have already rated this book. Use update instead.',
      );
    }

    // Créer la note
    const newRate = await this.prisma.rate.create({
      data: {
        rating,
        userId,
        bookId,
      },
    });

    // Recalculer la moyenne du livre
    await this.updateBookAverageRating(bookId);

    return newRate;
  }

  //! Modifier la note d'un user pour un livre
  async updateRate(
    userId: number,
    bookId: number,
    updateRateDto: UpdateRateDto,
  ) {
    const { rating } = updateRateDto;

    // Vérifier que la note existe
    const existingRate = await this.prisma.rate.findUnique({
      where: {
        userId_bookId: {
          userId,
          bookId,
        },
      },
    });

    if (!existingRate) {
      throw new NotFoundException(
        'You have not rated this book yet. Create a rating first.',
      );
    }

    // Mettre à jour la note
    const updatedRate = await this.prisma.rate.update({
      where: {
        userId_bookId: {
          userId,
          bookId,
        },
      },
      data: { rating },
    });

    // Recalculer la moyenne du livre
    await this.updateBookAverageRating(bookId);

    return updatedRate;
  }

  /**
   * Recalculer et mettre à jour la note moyenne d'un livre
   */
  private async updateBookAverageRating(bookId: number): Promise<void> {
    const result = await this.prisma.rate.aggregate({
      where: { bookId },
      _avg: { rating: true },
    });

    const averageRating = result._avg.rating || 0;

    await this.prisma.book.update({
      where: { id: bookId },
      data: { averageRating },
    });
  }
}
