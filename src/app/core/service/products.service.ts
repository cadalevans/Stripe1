import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'http://localhost:8081/api/Product';
  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+ "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4Mjk4MDkwMCwiZXhwIjoxNjgzMDY3MzAwfQ.IzPQoXbtuKq9dGHxussX-iSeuaj57M2F6IOrMY-mJ32cJxvtazaSoJmLK_lYzttdvKrNyGYRg8cchZ50f39Mcw"})

      };
  }
 
  getProductById(idProduct : any) {
    return this.httpClient.get(`${this.API_URL}/get/${idProduct}`)
  }
  getAllProducts() {
    return this.httpClient.get<[Product]>(`${this.API_URL}/all`,this.adminhttpOptions);
  }
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.API_URL}/add`, product);
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/update`, product)
  }
  deletProductsById(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/delete/${idProduct}`)
  }
  
  likeProduct(idProduct :any):Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:8081/Product/like/"+idProduct, this.adminhttpOptions)
  }
  dislikeProduct(idProduct:any):Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:8081/Product/dislike/"+idProduct, this.adminhttpOptions)
  }
  getProductsByPriceRange(minPrice: any, maxPrice: any) {
    return this.httpClient.get(`${this.API_URL}/Products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }
}