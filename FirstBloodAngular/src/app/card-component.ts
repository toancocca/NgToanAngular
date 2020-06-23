import { Component } from '@angular/core';
@Component({
  selector: 'app-card',
  template: `
    <h3>Hello There !</h3>
    <p>Your name: {{user.name}}</p>
    <p>Your age: {{user.age}}</p>
    <p>Status: {{user.status}}</p>
  `,
})
export class CardComponent {
  user = {
    name: 'NgToan',
    age: 28,
    status: 'Newbie',
  };
}
