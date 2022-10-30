import {
  Controller,
  Get,
  Post,
  Body,
  Param
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): UserDto[] {
    return this.usersService.findAll();
  }
  
  @Get(':email')
  getUser(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

}
