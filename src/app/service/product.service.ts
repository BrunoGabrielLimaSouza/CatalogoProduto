import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


export interface Product{
  id: number;
  title: String;
  body: String;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private  http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get.<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

 private handleError(error: any){
  console.error('An error has occurred', error);
  return throwError(() => new Error('Something went wrong; please try again later.'));
 }
}
