import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  form!: FormGroup;
  loader : Boolean = false;
  roles: string[] = []; // Ajouter cette ligne
  isFormValid : Boolean = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router,  private fb: FormBuilder
    ) {
  

   }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthDate: ['', [Validators.required]],
      numTel: ['', [Validators.required ,this.numericLengthValidator(8)]],
      address: ['', [Validators.required]],
      cin: ['', [Validators.required,this.numericLengthValidator(8)]],
      roles: ['',[Validators.required]],
    });

  }

  onSubmit(): void {
  this.loader = true;
    const { firstName, lastName, username, email, password, birthDate, roles,numTel, address,cin} = this.form.value;
    this.authService.register( firstName , lastName , username , email ,password ,birthDate,roles,numTel,address,cin).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/verification']);

      },
      error: err => {
        this.loader = false;
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
   
  get f() { return this.form.controls; };

  numericLengthValidator(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value === null || value === undefined || isNaN(value)) {
        return { numericLength: { requiredLength: length, actualLength: 0 } };
      }
      const strValue = value.toString();
      return strValue.length === length ? null : { numericLength: { requiredLength: length, actualLength: strValue.length } };
    };
  }
  
}
