import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-form-input',
  templateUrl: './validate-form-input.component.html',
  styleUrls: ['./validate-form-input.component.css']
})
export class ValidateFormInputComponent {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
}
