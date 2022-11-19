import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  registerError: Boolean = false;
  get registerformControls() { return this.registerForm?.value; }

  constructor(
    private router :Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.setupContactusForm();
    this.formSubscription();
  }
  setupContactusForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required,Validators.max(10)]),
      modelId: new FormControl('', Validators.required),
      carId: new FormControl('', Validators.required),
      isAdmin: new FormControl('', Validators.required),
    });
  }

  formSubscription() {
    this.registerForm.valueChanges.subscribe(v => {
      this.registerError = false;
    })
  }

  isFieldInvalid(fieldType: string): boolean {
    return this.registerformControls[fieldType]?.invalid &&
      (this.registerformControls[fieldType]?.touched || this.registerformControls[fieldType]?.dirty);
  }

  isVisibleErrorText(fieldName: string) {
    return (this.registerformControls[fieldName].dirty || this.registerformControls[fieldName].invalid) && this.registerformControls[fieldName].touched;
  }

  showValidationErrors() {
    if (this.registerformControls['login_id'].invalid)
      this.registerformControls['login_id'].markAsTouched();
    if (this.registerformControls['password'].invalid)
      this.registerformControls['password'].markAsTouched();
  }
  onFormSubmit() {
    if (this.registerForm.invalid) {
      return;
  }
  console.log("this.registerformControls",this.registerformControls)
  this.apiService.POSTAPICallAsync("http://52.66.113.164:3000/api/auth/register",this.registerformControls).then(
    (response) => {
      if (response){
        this.router.navigate(['/auth/login']);
      }
    },
    error => {
      console.log(error);
    }
    )
}
}
