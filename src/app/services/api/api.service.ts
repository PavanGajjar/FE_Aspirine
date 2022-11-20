import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _accessToken: string = "";
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalstorageService
  ) { }

  public getHttpHeaders(isAuth:boolean = true): HttpHeaders{
    var header = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (isAuth) header = header.append("Authorization", this.localStorageService.getIem("token") || "");
    return header; 
  }
  private handleError(error:HttpErrorResponse){
    if (error.status == 401){
      this.redirectToLogin();
    }
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  public POSTAPICall<T>(url: string,reqBody:Object,isAuth: Boolean = true){
    return this.http.post<T>(url,reqBody,{
      headers:this.getHttpHeaders(isAuth != undefined && isAuth != null && isAuth ? true : false)
    }).pipe(map(response => {
      return response ;
    }),catchError(error => {
      this.handleError(error);
      return throwError(()=> error);
    }));
  }

  public POSTAPICallAsync<T>(url: string,reqBody:Object,isAuth: Boolean = true){
    return firstValueFrom(this.POSTAPICall<T>(url,reqBody,isAuth))
  }

  public GETAPICall<T>(url: string,queryParams?: any,isAuth: Boolean = true){
    return this.http.get<T>(url,{
      headers:this.getHttpHeaders(isAuth != undefined && isAuth != null && isAuth ? true : false),
      params:queryParams
    }).pipe(map(response => {
      return response ;
    }),catchError(error => {
      this.handleError(error);
      return throwError(()=> error);
    }));
  }

  public GETAPICallAsync<T>(url: string,queryParams?:any,isAuth: Boolean = true){  
    return firstValueFrom(this.GETAPICall<T>(url,queryParams,isAuth))
  }
}
