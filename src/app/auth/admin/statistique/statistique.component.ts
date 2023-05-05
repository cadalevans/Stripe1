import { Component } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
  userRoleStats: any;

  constructor(private statistiqueService: UserService) { }

  ngOnInit(): void {
    this.statistiqueService.getUserRoleStats().subscribe(data => {
      this.userRoleStats = data;
      console.log('Stats des rôles d\'utilisateurs:', this.userRoleStats);
    });
  }

}
