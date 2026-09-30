import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-list');
  studentNames: string[] = [
   'Tushar',
   'Dnyneshwari',
   'Komal',
   'Tanish',
   'Vedant',
   'Mauli',
   'Sanskar',
   'Abhayy',
   'Simran',
   'Sakshi'


 ];
}


