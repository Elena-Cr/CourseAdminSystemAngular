import { Component, Input } from '@angular/core';
import { Teacher } from '../model/teacher';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
})
export class TeacherComponent {
  @Input() student?: Teacher = {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    department: 'Math',
    dob: new Date(2000, 1, 1),
    email: 'jane.doe@mailinator.com',
    phone: '+4511111111',
  };
}
