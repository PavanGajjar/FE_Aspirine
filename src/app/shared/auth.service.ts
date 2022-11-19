import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  secret: string = "0123456789123456";
  constructor() { }
}