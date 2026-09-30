import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oneWay-databinding');
  subjects = ['ML', 'FSD', 'SF', 'ASD'];


 days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
 periods = ['9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM'];


 timetable: string[][] = [
   ['ML', 'FSD', 'SF', 'ASD'],
   ['FSD', 'ASD', 'ML', 'SF'],
   ['SF', 'ML', 'FSD', 'ASD'],
   ['ASD', 'SF', 'FSD', 'ML'],
   ['ML', 'SF', 'ASD', 'FSD'],
 ];
}

