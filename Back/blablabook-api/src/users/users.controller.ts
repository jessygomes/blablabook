import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { NewUserDTO } from './dto/new-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SelfOrAdminGuard } from 'src/auth/guards/selfOrAdmin.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // It would be a good idea to protect some of the routes to be used only by authenticated (admin) users.

  @Post()
  create(@Body() data: NewUserDTO) {
    return this.usersService.create(data);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const user = await this.usersService.findById(id);
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(SelfOrAdminGuard)
  @ApiUnauthorizedResponse({
    description:
      "Jeton d'autorisation manquant (ou invalide) dans l'entête de la requête",
  })
  update(@Param('id') id: number, @Body() data: UpdateUserDTO) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(SelfOrAdminGuard)
  @ApiUnauthorizedResponse({
    description:
      "Jeton d'autorisation manquant (ou invalide) dans l'entête de la requête",
  })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
