/* Angular Stuff */
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  fieldRequired: string = "This field is required"

  constructor(
    private _mdr: MatDialogRef<RegisterComponent>
    , @Inject(MAT_DIALOG_DATA) data: any
    , private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  CloseDialog() {
    this._mdr.close(false)
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.pattern(emailregex)]),
        'password': new FormControl(null, [Validators.required, this.checkPassword]),
      }
    )


  }

  emaiErrors() {
    return this.registerForm.get('email')?.hasError('required') ? 'This field is required' :
      this.registerForm.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' : ''
  }

  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorPassword() {
    return this.registerForm.get('password')?.hasError('required') ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)' :
      this.registerForm.get('password')?.hasError('requirements') ? 'Password at least six characters, one uppercase letter and one number' : '';
  }

  checkValidation(input: string) {
    const validation = this.registerForm.get(input)?.invalid && (this.registerForm.get(input)?.dirty || this.registerForm.get(input)?.touched)
    return validation;
  }

  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {

    const email = formData.value.email;
    const password = formData.value.password;
    const username = formData.value.username;
    this.auth.registerUSer(email, password, username);
    formDirective.resetForm();
    this.registerForm.reset();
  }

}
