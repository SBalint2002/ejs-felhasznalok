import { Get, Controller, Render } from '@nestjs/common';
import { User } from './user';

let felhlista: Array<User> = [];

//true = férfi
felhlista.push(
  new User('Bö', true, new Date('2003-01-09'), 60000, true),
  new User('Gipsz János', false, new Date('1983-10-12'), 30000, false),
  new User('Fertő Miklós', true, new Date('1953-12-01'), 55000, false),
  new User('Géza', true, new Date('1999-09-19'), 53500, true),
  new User('Női Név', false, new Date('2002-12-29'), 0, true),
  new User('Mégegy Nő', false, new Date('1976-03-12'), -20000, true),
);

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { users: felhlista.filter(x => x.isActive)};
  }
}
