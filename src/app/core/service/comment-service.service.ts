import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private baseUrl = 'http://localhost:8081/comment';

  constructor(private http: HttpClient) { }
  addComment(post: any, files: File[], idUser: number, idPost:number): Observable<any> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    if (files) {
      for (let file of files) {
        formData.append('files', file);
      }
    }
    formData.append('idUser', idUser.toString());
    formData.append('idPost', idPost.toString());

    return this.http.post(`${this.baseUrl}/add`, formData);
  }


}
