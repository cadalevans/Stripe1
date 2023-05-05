import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  updatedUser = {
    lastName: '',
    firstName: '',
    email: '',
    numTel: ''
  };password= '';
  
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private userService: UserService,private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userService.updateUser(this.updatedUser, this.password)
      .subscribe(
        res=> (this.router.navigate(['/admin'])    )  );
  }

  }
