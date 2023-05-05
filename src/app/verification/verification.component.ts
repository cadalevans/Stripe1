import { Component } from '@angular/core';
import { AuthServiceService } from '../core/service/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent  {
  form!: FormGroup;
  isSuccessful : Boolean = false;
  isSignUpFailed : Boolean = false;
  loader: Boolean =false;
  errorMessage ='';
  constructor(private authService: AuthServiceService,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  
    this.form = this.fb.group({
      code: ['', [Validators.required]],
    });

  }


  verify(){
   let code = this.form.value;
   console.log('dddddddddddddddddd',code.code);
   this.loader = true;
   this.authService.verify(code).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.router.navigate(['/signin']);

    },
    error: err => {
      this.loader = false;
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }

   })
  }

}
