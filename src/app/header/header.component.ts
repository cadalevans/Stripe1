import { Component } from '@angular/core';
import { CartService } from '../core/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  idCart!:number;
listcartProducts:any;
  constructor(private service:CartService){}
  createCartNow() {
    this.service.createCart().subscribe(cart => console.log(cart));
  }
  ngOnInit(){
    this.idCart =1;
    this.service.getCartProducts(this.idCart).subscribe(res =>this.listcartProducts = res)
  }
  getcartProductsNow(){
    this.idCart =1;
    this.service.getCartProducts(this.idCart).subscribe(res =>this.listcartProducts = res)
  }
}
