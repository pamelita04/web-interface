import {Injectable} from '@angular/core';
import {Item} from '../shared/item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:8080/articulos';
  baseUrlCost = 'http://localhost:8080/gastos';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return <Observable<Item[]>>this.http.get(this.baseUrl );
  }

  getItem(id: number): Observable<Item> {
    return <Observable<Item>>this.http.get(this.baseUrl + '/' + id);
  }

  getFeaturedItem(): Observable<Item> {
    return <Observable<Item>>this.http.get(this.baseUrl + '?featured=true');
  }

  createItem(item: Item) {
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrlCost, { "total_costo": item.gasto_total }, httpOpciones).pipe(map( res => {
      return res;
    })).subscribe(data => {
      const response: any = data;
      const costo_id = response.id;
      const body = {
        "categoria_id": 1,
        "marca": item.marca,
        "modelo": item.modelo,
        "capacidad": item.capacidad,
        "gasto_total": item.gasto_total,
        "gasto_id": costo_id,
        "cantidad": item.cantidad,
        "estado": item.estado
      };
      
      this.http.post(this.baseUrl, JSON.stringify(body), httpOpciones).pipe(map( res => {
        return res;
      })).subscribe(data => {
        console.log('----------------')
        console.log(data)
      });
    });
  }

  updateItem(item: Item, llave: string) {
    const body = JSON.stringify(item);
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.baseUrl}/${llave}.json`;
    console.log('la url es');
    console.log(url);

    return this.http.put(this.baseUrl, body, httpOpciones).pipe(map( res => {
      console.log('resultadoo');
      console.log(res);
      return res;
    }));

  }

  postFile(id, image: any): Observable<boolean> {
    const endpoint = 'http://localhost:8080/items/id/image';
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };
    /* const formData: FormData = new FormData();
     formData.append('fileKey', fileToUpload, fileToUpload.name);
     console.log('esto es formData');
     console.log(formData);*/
    console.log('esto es imagen');
    console.log(image);
    return this.http
      .post(endpoint, image, httpOpciones)
      .pipe(map(() => true));
  }

  deleteItem(llave: string) {
    const url = `${this.baseUrl}/${llave}`;
    return this.http.delete(url).pipe(map(
      res => res
    ));
  }

}
