import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from 'src/modules/accounts/services/accounts.service';
import { SignupDto } from '../dtos/signup.dto';
import encriptor from '../encrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async login({ username, password }: { username: string; password: string }) {
    const user = await this.accountsService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isMatched = await encriptor.compare(password, user.password);

    if (!isMatched) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(signupDto: SignupDto) {
    const { password, ...account } = signupDto;
    const hashedPassword = await encriptor.encrypt(password);
    this.accountsService.create({
      ...account,
      password: hashedPassword,
    });
  }
}
