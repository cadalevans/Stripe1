import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8081/api/Cart';
  adminhttpOptions:any;
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+ "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjY3Nzg1NywiZXhwIjoxNjgyNzY0MjU3fQ.QMcQhVSxT-wRgscZsBdqN4Vo0UVFNrZJC5Aw6-0JTyQNXQLtLDtRpkszV-URVGTmh5-_ftH2PMan5MyHNDlavQ"})
     
      };
  }

  createCart():Observable<Cart>{
    return this.httpClient.post<Cart>('http://localhost:8081/api/Cart/', {});
  }

  getCartProducts(idCart: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8081/api/Cart/getCartProducts/${idCart}`);
    
  }
  
  /*addProductToCart(cart :any){
    return this.httpClient.put(`http://localhost:8081/api/Cart/addProductToCart/${cart.idCart}/${Product}`,cart );
  }*/
  addToCart(pack: any) {
    
    this.httpClient.put(`${this.baseUrl}/assignPackToCart`, pack);
  }
  assignProductToCart(idCart: number, idProduct: any): Observable<Cart> {
    const url = `http://localhost:8081/api/Cart/addProductToCart/${idCart}/${idProduct}`;
    return this.httpClient.put<Cart>(url, null);
  }

  removeProductFromCart(idCart:number , idProduct:any):Observable<any>{
   return this.httpClient.delete(`http://localhost:8081/api/Cart/removeProductFromCart/${idCart}/${idProduct}`);
    
  }
 /* getCartTotal(idCart:number){
     this.httpClient.get(`${this.baseUrl}/total/${idCart}`)
  }*/
  getCartTotal(idCart: number): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8081/api/Cart/total/${idCart}`);
  }
}
