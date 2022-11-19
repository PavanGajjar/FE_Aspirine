import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginError: Boolean = false;
  get loginFormControls() { return this.loginForm?.controls };
  constructor() { }

  ngOnInit(): void {
    this.setupContactusForm();
    this.formSubscription();
  }
  setupContactusForm() {
    this.loginForm = new FormGroup({
      login_id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  formSubscription() {
    this.loginForm.valueChanges.subscribe(v => {
      this.loginError = false;
    })
  }

  isFieldInvalid(fieldType: string): boolean {
    return this.loginFormControls[fieldType]?.invalid &&
      (this.loginFormControls[fieldType]?.touched || this.loginFormControls[fieldType]?.dirty);
  }

  isVisibleErrorText(fieldName: string) {
    return (this.loginFormControls[fieldName].dirty || this.loginFormControls[fieldName].invalid) && this.loginFormControls[fieldName].touched;
  }

  showValidationErrors() {
    if (this.loginFormControls['login_id'].invalid)
      this.loginFormControls['login_id'].markAsTouched();
    if (this.loginFormControls['password'].invalid)
      this.loginFormControls['password'].markAsTouched();
  }

  onFormSubmit() {
    
  }
}
