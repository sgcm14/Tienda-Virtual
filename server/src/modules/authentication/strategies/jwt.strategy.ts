import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants/jwt';
import { AccountsService } from 'src/modules/accounts/services/accounts.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private accountService: AccountsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtConstants.secret',
    });
  }

  async validate(payload: { username: string; sub: string }) {
    const accountId = payload.sub;
    const user = await this.accountService.findOne(accountId);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
