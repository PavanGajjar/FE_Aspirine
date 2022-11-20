import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthenticationVM } from 'src/app/services/authentication/authenctication.model';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginError: Boolean = false;
  get loginFormControls() { return this.loginForm?.controls };
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setupContactusForm();
    this.formSubscription();
  }
  setupContactusForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      isAdmin: new FormControl(''),
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
    if (this.loginForm.invalid) {
      return;
    }
    let userDetails: AuthenticationVM.authDetails = {
      email: this.loginFormControls["email"].value,
      password: this.loginFormControls["password"].value,
      isAdmin: "1"
    }
    this.apiService.POSTAPICallAsync("http://52.66.113.164:3000/api/auth/login",userDetails).then((res:any) =>{
      if (res?.data != undefined && res?.data != null){
        this.localStorageService.setLocalStorageData(res?.data);
        this.router.navigate(['home']);
      }
    },
    error => {
      console.log(error);
    }
    )
  }
  }
