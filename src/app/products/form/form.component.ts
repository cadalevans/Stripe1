import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';
import { FormsModule } from '@angular/forms';
import { categoryProduct } from 'src/app/type-category';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  listProducts : any; 
  form : boolean = false;
  product!: Product;
  closeResult! : string;
  showForm: boolean = false;
  formTitle: string = 'Add Product';
  formBtn: string = 'Save';
  editing: boolean = false;
  categoryProduct = categoryProduct.FARMER;

  constructor(private service:ProductService){}
  
  ngOnInit():void{
    this.getAllProducts();
    this.product = {
      idProduct:0,
      categoryProduct: this.categoryProduct,
      img:'',
      productName: '',
      price: 0,
      likes:0,
      dislikes:0
    }
  }

  getAllProducts(){
    this.service.getAllProducts().subscribe(res => this.listProducts = res)
  }

  addProduct(product: Product){
    console.log(product);
    
    this.service.addProduct(product).subscribe((response: Product) => {
      console.log('Product added:', response);
      this.getAllProducts();
      this.form = false;
    });
  }

  deleteProduct(idProduct : any){
    this.service.deletProductsById(idProduct).subscribe(() => this.getAllProducts())
  }
}
