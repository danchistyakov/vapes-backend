import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkAvailability(): any {
    return { status: true };
  }

  checkVersion(version: number): any {
    return { version };
  }
}
