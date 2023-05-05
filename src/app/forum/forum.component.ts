import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../core/model/post';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  idUser=1
  showCommentInput:boolean=false;

  private baseUrl = 'http://localhost:8081/post';
  post!:Post ;
  ListPost:any
  filteredListPost: any;
  searchQuery: string = '';
  MyPost!: any;
  constructor(private http: HttpClient) { 
    this.post = {
      body:'',
      postTitle: '',
    
  
    }
  }
  ngOnInit(): void {
    this.getAllpost()
    this.getMyPost()
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
  }
  onSubmit(idUser: number) {
    this.http.post(`${this.baseUrl}/add`, this.post, { params: { idUser } }).subscribe(
      (response) => {
        console.log(response);
        // Refresh the data to display the new post
        this.getAllpost();
      },
      (error) => {
        console.log(error);
        // Handle error response
      }
    );
  }

  getAllpost(){
    this.http.get<Post[]>(`${this.baseUrl}/findAll`) .subscribe((post: Post[]) => {
      this.ListPost= post;
     
   });
  }
  getMyPost()
  {
    this.http.get<any[]>(`${this.baseUrl}/findByUser?idUser=${this.idUser}`).subscribe((post: Post[]) => {
      this.MyPost= post;
     
   });
  }

  deletePosts(id: any) {
    console.log('delete', id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const params = new HttpParams()
      .set('idPost', id)
      .set('idUser', '1');
    this.http.delete(`${this.baseUrl}/delete`, { headers: options.headers, params: params }).subscribe(
      (response) => {
        this.getAllpost()
      },
      (error) => {
        console.log(error);
        this.getAllpost()
        // Handle error response
      }
      
    );
    this.getAllpost()
  }
}
