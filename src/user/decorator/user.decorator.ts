import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from '../dto';

export const User = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const dto: UserDto = {
        id: request.user.id,
        username: request.user.username,
        displayName: request.user.displayName,
        firstName: request.user.name.givenName,
        lastName: request.user.name.familyName,
        profileURL: request.user.profileUrl,
        email: request.user._json.email,
        imageURL: request.user._json.image_url,
    };
    if (data) return dto[data];
    return dto;
  },
);
