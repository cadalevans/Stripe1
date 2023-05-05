import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService,User } from 'src/app/core/service/user.service';

interface MyProfile {
  firstName: string;
  lastName: string;
  email: string;
  numTel: string;
}

@Component({
  selector: 'app-gel-all-profile',
  templateUrl: './gel-all-profile.component.html',
  styleUrls: ['./gel-all-profile.component.css']
})
export class GelAllProfileComponent {
  users: User[] = [];

  constructor(private adminService: UserService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}