import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './services/authentication.service';
import { jwtConstants } from './constants/jwt';
import { JwtAuthenticationGuard } from './guards/jwt-authentication.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AccountModule } from '../accounts/accounts.module';
import { AuthenticationController } from './authentication.controller';
console.log('⚡ ~ jwtConstants', jwtConstants);

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '1200s' },
    }),
    AccountModule,
  ],
  providers: [
    AuthenticationService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthenticationGuard,
    },
  ],
  exports: [AuthenticationService, JwtStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
