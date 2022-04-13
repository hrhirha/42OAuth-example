import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {

    @Get('me')
    me(@Req() req: any) {
        console.log({user: req.user});
    }
}
