import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';
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

    return user;
  }

  //! Find user by ID
  async getProfileById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        isPrivate: true,
        description: true,
        profilePicture: true,
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
      return { error: 'NOT_FOUND' };
    }

    // If the profile is private and the requesting user is not the profile owner
    if (user.isPrivate) {
      return { error: 'PRIVATE' };
    }

    return { user };
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

  //! UPDATE USER BY ID
  async update(id: number, data: UpdateUserDTO): Promise<User> {
    const updateData = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 12);
    }
    // quand on remplace la photo de profil, il faut supprimer l'ancienne
    if (data.profilePicture) {
      const currentUser = await this.prisma.user.findUnique({
        where: { id },
        select: { profilePicture: true },
      });

      if (
        currentUser?.profilePicture &&
        currentUser.profilePicture.startsWith('/uploads') &&
        currentUser.profilePicture !== data.profilePicture
      ) {
        const filePath = join(
          __dirname,
          '..',
          '..',
          currentUser.profilePicture,
        );
        try {
          await fs.unlink(filePath);
        } catch (error) {
          console.error('Error deleting old profile picture:', error);
        }
      }
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
