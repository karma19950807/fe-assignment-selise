import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { AuthModel } from '../auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authModelObj: AuthModel = new AuthModel();

  userInfoForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userInfoForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required]],
      location: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  postUserInfo() {
    this.authModelObj.fullname = this.userInfoForm.value.fullname;
    this.authModelObj.email = this.userInfoForm.value.email;
    this.authModelObj.phone_no = this.userInfoForm.value.phone_no;
    this.authModelObj.location = this.userInfoForm.value.location;
    this.authModelObj.username = this.userInfoForm.value.username;
    this.authModelObj.password = this.userInfoForm.value.password;

    this.authService.postUserInfo(this.authModelObj).subscribe(
      (res) => {
        console.log(res);
        this._snackbar.open('Sign up is successful');
      },
      (err) => {
        this._snackbar.open('Soemthing went wrong');
      }
    );
  }
}
