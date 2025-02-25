import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "John";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "button";
  selectedCities: string = '';

  showWelcomeAlert() { 
    alert ("welcome")
  }

  showMessage(message: string) { 
    alert(message)
  }
}

