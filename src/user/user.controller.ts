import { USERModal } from './../modal/user.modal';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }
    @Post('login')
    public async login(@Req() req, @Body() data: USERModal): Promise<USERModal> {
        return await this.userService.login(data);
    }
    @Post('signup')
    public async signUp(@Req() req, @Body() data: USERModal): Promise<any> {
        return await this.userService.signUp(data);
    }
}
