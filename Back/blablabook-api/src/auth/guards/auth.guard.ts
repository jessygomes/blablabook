import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(UsersService)
    private usersService: UsersService,
    @Inject(JwtService)
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        "Jeton d'autorisation manquant (ou invalide) dans l'entête de la requête",
      );
    }
    try {
      // We verify the token and....
      const payload = await this.jwtService.verifyAsync(token);
      // ...we fetch the user from the database and attach it to the request object.
      request.user = await this.usersService.findOne(payload.id);
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException(
        "Jeton d'autorisation manquant (ou invalide) dans l'entête de la requête",
      );
    }
    return true; // Indicates that the request is authorized.
  }
}
