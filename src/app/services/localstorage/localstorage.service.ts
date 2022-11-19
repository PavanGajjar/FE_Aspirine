import { Injectable } from '@angular/core';
import { isDefined, isNotEmptyString } from 'src/app/shared/common';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  constructor() { }

  setItem(key:string,value:string){
    if (isNotEmptyString(key)&& isDefined(value)){
      window.localStorage.setItem(key, value)
    }
  }

  getIem(key:string){
    var value = window.localStorage.getItem(key) 
    return value
  }
  
  setLocalStorageData(dataObj:any){
    Object.keys(dataObj).forEach(key => {
      this.setItem(key,(typeof dataObj[ key ] === "string" || dataObj[ key ] instanceof String) ? dataObj[ key ] : JSON.stringify(dataObj[key]))
    })    
  }
}
