import { Component } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { StorageServiceService } from '../core/service/storage-service.service';
import { AuthServiceService } from '../core/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profile-user',
  templateUrl: './modifier-profile-user.component.html',
  styleUrls: ['./modifier-profile-user.component.css']
})
export class ModifierProfileUserComponent {

  updatedUser = {
    lastName: '',
    firstName: '',
    email: '',
    numTel: '',
  };password= '';
  
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private userService: UserService,private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.updateUser(this.updatedUser, this.password)
      .subscribe(
        res=> (this.router.navigate(['/client/home'])    )  );
  }

  }
