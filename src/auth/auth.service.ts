import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto';

@Injectable()
export class AuthService {

    constructor(private config: ConfigService, private jwt: JwtService) {}

    async redirect(user: UserDto) {
        const payload = {
            sub: user.id,
            username: user.username,
            email: user.email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(
            payload,
            {
                secret,
                // expiresIn: '30s',
            }
        );

        return {access_token: token,}
    }
}
