import { Get, Controller, Render } from '@nestjs/common';
import { User } from './user';

let felhlista: Array<User> = [];

felhlista.push(
  new User('Bö', 'férfi', new Date('2003-01-09'), 60000, true),
  new User('Gipsz János', 'nő', new Date('1983-10-12'), 30000, false),
  new User('Fertő Miklós', 'férfi', new Date('1953-12-01'), 55000, false),
  new User('Géza', 'férfi', new Date('1999-09-19'), 53500, true),
  new User('Női Név', 'férfi', new Date('2002-12-29'), 75000, false),
  new User('Mégegy Nő', 'férfi', new Date('1976-03-12'), 98000, true),
);

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { users: felhlista };
  }
}
