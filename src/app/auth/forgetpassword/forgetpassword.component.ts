import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/core/service/forgot-password.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  email!: string;
  message!: string;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private router1: Router,private authService: ForgotPasswordService) {}

  ngOnInit(): void {
    
  }
  submit() {
    this.authService.forgotPassword(this.email).subscribe(
      (data) => {
        this.message = data.message;
        this.router1.navigate(['/resetPassword']);
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }
}