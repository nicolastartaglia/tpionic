import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://dry-bastion-69323.herokuapp.com/api/users/';

  users: Array<User> = new Array<User>();
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{

    return this.httpClient.get(this.url, { headers: this.headers })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(this.errorMgmt)
      );
   }

   deleteUser(userId): Observable<any>{
      return this.httpClient.delete(this.url+userId, { headers: this.headers })
              .pipe(
                map((res: any) => {
                  console.log(res);
                  return res;
                }),
                catchError(this.errorMgmt)
              );
   }

   updateUser(id: number, data: User): Observable<any>{
    let API_URL = `${this.url}${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  addUser(data): Observable<any>{
    let API_URL = `${this.url}add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
   }

   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
