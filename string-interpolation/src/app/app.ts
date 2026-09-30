import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('string-interpolation');
  Title = 'Angular 20 Interpolation';
 username = 'DevUser';
 today = new Date();
 getGreeting(): string {
   return `Welcome back, ${this.username}!`;
}

}
