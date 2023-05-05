import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  readonly styles:string[] = [
    "/assets/admin/css/theme-default.css"
    
  ];
 
  readonly js: string[]=[
    "/assets/admin/js/plugins/jquery/jquery.min.js",
    "/assets/admin/js/plugins/jquery/jquery-ui.min.js",
    "/assets/admin/js/plugins/bootstrap/bootstrap.min.js",
    '/assets/admin/js/plugins/icheck/icheck.min.js',
    "/assets/admin/js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js",
    "/assets/admin/js/plugins/scrolltotop/scrolltopcontrol.js",
    "/assets/admin/js/plugins/morris/raphael-min.js",
    "/assets/admin/js/plugins/morris/morris.min.js",
    "/assets/admin/js/plugins/rickshaw/d3.v3.js",
    "/assets/admin/js/plugins/rickshaw/rickshaw.min.js",
    '/assets/admin/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    '/assets/admin/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    '/assets/admin/js/plugins/bootstrap/bootstrap-datepicker.js',
    "/assets/admin/js/plugins/owl/owl.carousel.min.js",
    "/assets/admin/js/plugins/moment.min.js",
    "/assets/admin/js/plugins/daterangepicker/daterangepicker.js",
    "/assets/admin/js/settings.js",
    "/assets/admin/js/plugins.js",
    "/assets/admin/js/actions.js",
    "/assets/admin/js/demo_dashboard.js"
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
  }

}
