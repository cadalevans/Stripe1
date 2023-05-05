import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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
 
  constructor(private renderer: Renderer2) { }

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



      //----------- chatbot's code --------------//
      (function (d, m) {
        var kommunicateSettings = {
          appId: "2ce8316d9f439d5a7b89f2a8afc55e5af",
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        (window as any).kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, (window as any).kommunicate || {});
      //----------- chatbot's code end --------------//
  

  }

}
