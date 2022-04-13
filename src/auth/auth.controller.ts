import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/user/decorator';
import { UserDto } from 'src/user/dto';
import { AuthService } from './auth.service';
import { OAUth42Guard } from './guard';

@UseGuards(OAUth42Guard)
@Controller('auth')
export class AuthController {

    constructor (private authService: AuthService) {}

    @Get('login')
    login() {
        return ;
    }

    @Get('redirect')
    redirect(@User() user: UserDto) {
     return this.authService.redirect(user);
    }
}
