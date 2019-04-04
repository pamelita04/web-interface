import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) {
  }

  

  getCategories(): Observable<Category[]> {
    return <Observable<Category[]>>this.http.get(this.baseUrl);
  }
}
