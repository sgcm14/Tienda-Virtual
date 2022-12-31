import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dtos/login.dto';
import { JwtAuthenticationGuard } from './guards/jwt-authentication.guard';
import { SignupDto } from './dtos/signup.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Public()
  @ApiTags('Authentication')
  @ApiOperation({ summary: 'Login enpoint' })
  @ApiResponse({ status: 200, description: 'Successful login' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('login')
  async login(@Body() login: LoginDto) {
    return this.authenticationService.login({
      password: login.password,
      username: login.username,
    });
  }

  @Public()
  @ApiTags('Authentication')
  @ApiOperation({ summary: 'Signup enpoint' })
  @ApiResponse({ status: 200, description: 'Successful signup' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('signup')
  async signup(@Body() signup: SignupDto) {
    return this.authenticationService.signup({ ...signup });
  }

  @UseGuards(JwtAuthenticationGuard)
  @ApiTags('Authentication')
  @ApiOperation({ summary: 'Profile endpoint' })
  @ApiResponse({ status: 200, description: 'Successful get profile data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get('profile')
  @ApiBearerAuth('access-token')
  getProfile(@Request() req): any {
    return req.user;
  }
}
