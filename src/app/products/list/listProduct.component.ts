import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //request!: request ;
message:any;
  
listProducts : any; 
form : boolean = false;
 product!: Product;
 closeResult! : string;


constructor(private service:ProductService){}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}


}

