import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
idCart!:number;
product!: Product; 
listcartProducts:any;
total=0;
constructor(private service:CartService){}
ngOnInit(){
  this.getCartTotal();
  this.idCart =1;
  this.service.getCartProducts(this.idCart).subscribe(res =>this.listcartProducts = res)
}
createCartNow() {
  this.service.createCart().subscribe(cart => console.log(cart));
}
deleteProductFromCart(product: Product){
  this.idCart = 1;
  this.service.removeProductFromCart(this.idCart, product.idProduct).subscribe(
    () => { 
      this.service.getCartProducts(this.idCart).subscribe(products => {
        this.listcartProducts = products;
        this.getCartTotal();
      });
    }
  );
}
getCartTotal() {
  this.idCart=1
  this.service.getCartTotal(this.idCart).subscribe(total => {
    this.total = total;
  });
}
}
