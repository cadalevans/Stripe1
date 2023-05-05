import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8081/post';

  constructor(private http: HttpClient) { }

  // Add post
  addPost(post: any, files: File[], idUser: number): Observable<any> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    if (files) {
      for (let file of files) {
        formData.append('files', file);
      }
    }
    formData.append('idUser', idUser.toString());
    return this.http.post(`${this.baseUrl}/add`, formData);
  }

  // Update post
  updatePost(post: any, files: File[], idPost: number, idUser: number): Observable<any> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    if (files) {
      for (let file of files) {
        formData.append('files', file);
      }
    }
    formData.append('idPost', idPost.toString());
    formData.append('idUser', idUser.toString());
    return this.http.post(`${this.baseUrl}/update`, formData);
  }

  // Delete post
  deletePost(idPost: number, idUser: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        idPost: idPost,
        idUser: idUser
      }
    };
    return this.http.delete(`${this.baseUrl}/delete`, options);
  }

  // Get all posts
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }

  // Get posts by user
  getPostsByUser(idUser: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findByUser?idUser=${idUser}`);
  }

  // Get post details
  getPostDetails(idPost: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findById?idPost=${idPost}`);
  }

  // Search posts
  searchPosts(query: string, idUser: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/searchPost?ch=${query}&idUser=${idUser}`);
  }}

