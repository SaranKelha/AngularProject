import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
