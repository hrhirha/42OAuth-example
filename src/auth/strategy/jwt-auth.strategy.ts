import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { userInfo } from "os";
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt'
import { UserDto } from "src/user/dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
        });
    }

    async validate(payload: any, cb: VerifiedCallback) {

        // retrieve user with (id == sub) from database and return it
        const { sub, iat, ...rest} = payload;

        return cb(null, rest);
    }
}