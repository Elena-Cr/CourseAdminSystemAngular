import { Component, Input } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @Input() student?: Student = {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    studyProgram: 1,
    dob: new Date(2000, 1, 1),
    email: 'jane.doe@mailinator.com',
    phone: '+4511111111',
  };
  @Input() mode: number = 1;
}
