import { UserCreatableInterface }  from '../interfaces';

export class CreateUserDto implements UserCreatableInterface {
  telephone: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}