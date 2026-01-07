import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
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
  //! CREATE NEW USER
  @Post()
  create(@Body() data: NewUserDTO) {
    return this.usersService.create(data);
  }

  //! GET ALL USERS
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  //! GET PROFILE USER
  @Get('/profil/:id')
  async getprofileById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getProfileById(id);
    console.log('User profile fetched:', user);
    return user;
  }

  //! GET USER BY ID
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  //! UPDATE USER BY ID
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

  //! DELETE USER BY ID
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
