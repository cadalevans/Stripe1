import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/products.service';
@Component({
  selector: 'app-CREATIVE',
  templateUrl: './CREATIVE.component.html',
  styleUrls: ['./CREATIVE.component.css']
})
export class CREATIVEComponent {
  listProducts : any;
  product!: Product; 
  minPrice = 0;
  maxPrice = 30000;
  idCart!: number;
  constructor(private service:ProductService,private activatedRoute:ActivatedRoute , private serviceCart:CartService){}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}
onLike(idProduct:any) {
  this.service.likeProduct(idProduct)
    .subscribe(res => this.product = res);
    console.log(this.product);
    
}
ondisLike(idProduct:any) {
  this.service.dislikeProduct(idProduct)
    .subscribe(res => this.product = res);
    console.log(this.product);
    
}

getProductsByPriceRange(minPrice:any , maxPrice:any): void {
  this.service.getProductsByPriceRange(minPrice, maxPrice).subscribe(res => this.listProducts = res);
}
mostLikedProduct!: Product;
  mostDislikedProduct!: Product;

  getMostLikedAndDislikedProducts(): void {
    let maxLikes = 0;
    let maxDislikes = 0;

    for (let product of this.listProducts) {
      if (product.likes > maxLikes) {
        this.mostLikedProduct = product;
        maxLikes = product.likes;
      }
      if (product.dislikes > maxDislikes) {
        this.mostDislikedProduct = product;
        maxDislikes = product.dislikes;
      }
    }
  

    console.log(`Most liked product: ${this.mostLikedProduct.productName} (Likes: ${maxLikes})`);
    console.log(`Most disliked product: ${this.mostDislikedProduct.productName} (Dislikes: ${maxDislikes})`);
  }

  
addProductToCart(product:Product){
  this.idCart=1;
  console.log(product);
  
  this.serviceCart.assignProductToCart( this.idCart ,product.idProduct).subscribe(
    () => { this.serviceCart.getCartProducts(this.idCart);
  
    //console.log('Pack ajouté au panier :', pack);
    this.serviceCart.getCartProducts(this.idCart);
   });
  }
}
