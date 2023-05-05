import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListClientComponent implements OnInit{
 
  listProducts : any; 
  form : boolean = false;
   product!: Product;
   closeResult! : string;

   formTitle: string = 'Add Product';
   formBtn: string = 'Save';
   editing: boolean = false;
   showForm: boolean = false;
constructor(private service:ProductService , private router:Router){
  

}
ngOnInit():void{
  this.service.getAllProducts().subscribe(res => this.listProducts = res);
}
deletProductsByIdNow(product :Product){
  this.service.deletProductsById(product.idProduct).subscribe(res=>{
    let index= this.listProducts.indexOf(product);
    this.listProducts.splice(index,1);
  });
}
/*updateProduct(idProduct:any){

  console.log(idProduct);
  this.router.navigate(['/form',{idProduct:idProduct}])

  
}*/
updateProduct(product: Product) {
  this.product = product;
  this.formBtn = "Update";
  this.showForm = true;
}
ajouteProduct() {
  this.formTitle = "Add Pack";
  this.formBtn = "Save";
  this.showForm = true;
}

submitForm() {
  if (this.formBtn === "Save") {
    this.service.addProduct(this.product)
  } else {
    this.service.editProduct(this.product).subscribe(
      data => {
        this.service.getAllProducts();
        this.showForm = false;
      },
      error => {
        console.log(error);
      }
      );}
}

}
