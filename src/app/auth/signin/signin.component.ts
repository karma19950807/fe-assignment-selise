import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  dataUsers: any;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res) => {
      this.dataUsers = res;
    });
    this.signinForm = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  onSubmit() {
    debugger;
    let name = this.signinForm.value.username;
    let pass = this.signinForm.value.password;
    if (
      this.dataUsers.filter(function (e) {
        return e.username === name && e.password === pass;
      }).length > 0
    ) {
      // show snackbar
      console.log('success');
      this.router.navigate(['/products/list']);
      debugger;
    } else {
      // show snackbar
    }
  }

  props(key: string) {
    return this.signinForm.get(key) as FormControl;
  }
}
