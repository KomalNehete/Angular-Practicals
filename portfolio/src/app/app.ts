import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
 selector: 'app-root',
 imports: [FormsModule, CommonModule],
 templateUrl: './app.html',
 styleUrl: './app.css',
})
export class App {
 protected readonly title = signal('student-portfolio');


 student = {
   name: 'Dnyaneshwari Nanekar',
   title: 'Full Stack Developer',
   bio: 'Passionate developer with experience in Angular, Node.js, and modern web technologies.',
   skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'CSS'],


   projects: [
     {
       name: 'Portfolio Website',
       description: 'A personal website to showcase my work and skills.',
       link: 'https://dnyaneshwari',
     },
     {
       name: 'Task Manager App',
       description: 'A task management app built with Angular and Firebase.',
       link: 'https://github.com/johndoe/task-manager',
     },
   ],


   contact: {
     email: 'nanekardnyaneshwari561@gmail.com',
     phone: '+1-234-567-890',
     linkedin: 'https://linkedin.com/in/dnyaneshwarinanekar',
     github: 'https://github.com/dnyaneshwari',
   },
 };
}
