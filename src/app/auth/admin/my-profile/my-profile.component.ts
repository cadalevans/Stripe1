import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';
import { StorageServiceService } from 'src/app/core/service/storage-service.service';
import { UserService } from 'src/app/core/service/user.service';


interface MyProfile {
  firstName: string;
  lastName: string;
  email: string;
  numTel: string;
}
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent {
  readonly styles:string[] = [
    "/assets/client/css/bootstrap.min.css",
    "/assets/client/css/font-awesome.min.css",
    "/assets/client/css/elegant-icons.css",
    "/assets/client/css/nice-select.css",
    "/assets/client/css/magnific-popup.css",
    "/assets/client/css/jquery-ui.min.css",
    "/assets/client/css/owl.carousel.min.css",
    "/assets/client/css/slicknav.min.css",
    "/assets/client/css/style.css" ,
    "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap",
  ];
 
  readonly js: string[]=[
    "/assets/client/js/jquery-3.3.1.min.js",
    "/assets/client/js/bootstrap.min.js",
    "/assets/client/js/jquery.nice-select.min.js",
    "/assets/client/js/jquery-ui.min.js",
    "/assets/client/js/jquery.nicescroll.min.js",
    "/assets/client/js/jquery.magnific-popup.min.js",
    "/assets/client/js/jquery.slicknav.js",
    "/assets/client/js/owl.carousel.min.js",
    "/assets/client/js/main.js"
  ];
 
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private renderer: Renderer2,private userService: UserService,private storageService:StorageServiceService,private authService: AuthServiceService, private router: Router) { }


  user: MyProfile = {
    firstName: '',
    lastName: '',
    email: '',
    numTel: ''
  };
  isLoading = true;

  ngOnInit(): void {
    this.styles.forEach(element => {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'href', element);
      this.renderer.appendChild(document.head, linkElement);
    });
    this.js.forEach(element => {
      const linkElement = this.renderer.createElement('script');
      this.renderer.setAttribute(linkElement, 'src', element);
      this.renderer.setAttribute(linkElement, 'type', "text/javascript");
      this.renderer.appendChild(document.head, linkElement);
    });
    this.userService.getMyProfile().subscribe(
      user => {
        this.user = user;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );

  }

  supprimerCompte(): void {
    const currentPassword = window.prompt('Veuillez saisir votre mot de passe actuel pour confirmer la suppression de votre compte :');
    if (currentPassword) {
      this.userService.deleteUser(currentPassword).subscribe(() => {
        
        this.storageService.clean();

        // Redirigez vers la page de connexion ou la page d'accueil.
        this.router.navigate(['/login']);
        // La suppression de compte a réussi, redirigez l'utilisateur vers la page de connexion ou affichez un message de confirmation
      }, (error) => {
        console.log('La suppression de compte a échoué : ', error);
        // Affichez un message d'erreur à l'utilisateur pour lui indiquer que la suppression de compte a échoué
      });
    }
  }
}