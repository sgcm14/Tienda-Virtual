import { SetMetadata } from '@nestjs/common';

export const GUARD_PUBLIC_KEY = process.env.GUARD_PUBLIC_KEY;
export const Public = () => SetMetadata(GUARD_PUBLIC_KEY, true);
