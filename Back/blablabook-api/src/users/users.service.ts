import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma/client';
import { NewUserDTO } from './dto/new-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { UserWithRole } from './types/user.types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: NewUserDTO): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
        roleId: data.roleId || 1,
        isPrivate: data.isPrivate || false,
      },
      include: {
        role: true,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        role: true,
      },
    });
  }

  //! Find user by ID
  async findById(id: number) {
    console.log('Looking for user with ID:', id);
    // const user = await this.prisma.user.findUnique({
    //   where: { id },
    //   select: {
    //     id: true,
    //     username: true,
    //     email: true,
    //     isPrivate: true,
    //     // description: true,
    //     createdAt: true,
    //     updatedAt: true,
    //     userBooks: {
    //       include: {
    //         book: true,
    //       },
    //     },
    //     comments: true,
    //   },
    // });

    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }
    console.log('Found user:', user);

    return user;
  }

  //! Find user by ID
  async getProfileById(id: number) {
    console.log('Looking for user with ID:', id);
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        isPrivate: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        userBooks: {
          include: {
            book: true,
          },
        },
        comments: true,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async findByIdWithRole(id: number): Promise<UserWithRole | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findByEmailWithRole(email: string): Promise<UserWithRole | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
      },
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async update(id: number, data: UpdateUserDTO): Promise<User> {
    const updateData = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 12);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        role: true,
      },
    });
  }

  async updateByEmail(email: string, data: UpdateUserDTO): Promise<User> {
    const updateData = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 12);
    }

    return this.prisma.user.update({
      where: { email },
      data: updateData,
      include: {
        role: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
