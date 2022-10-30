import { UserInterface }  from '../interfaces';

export class UserDto implements UserInterface {
  telephone: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}


