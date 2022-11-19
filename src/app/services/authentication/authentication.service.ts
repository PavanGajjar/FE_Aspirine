import { Injectable } from '@angular/core';
import { isDefined } from 'src/app/shared/common';
import { ApiService } from '../api/api.service';
import { LocalstorageService } from '../localstorage/localstorage.service';
import { AuthenticationVM as vm } from './authenctication.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalstorageService
  ) { }

  async setLoginToken(userDetails: vm.authDetails): Promise<boolean> {
    return await this.getLoginToken(userDetails).then(tokenDetails => {
      if (isDefined(tokenDetails?.token)) {
        this.localStorageService.setLocalStorageData(tokenDetails.token);
        this.localStorageService.setLocalStorageData(userDetails);
        return true;
      }
      return false;
    })
  }

  async getLoginToken(userDetails: vm.authDetails): Promise<vm.authToken> {
    return this.apiService.POSTAPICallAsync<vm.jwtAuthTokenRes>("", userDetails).then((response: any) => {
      let authToken: vm.authToken = new vm.authToken();
      if (isDefined(response.ResponseData)) {
        authToken = {
          token: {
            accessToken: response.ResponseData?.Token?.Token,
            tokenExpiry: response.ResponseData?.Token?.TokenExpiry,
            tokenType: 1,
            email: response.ResponseData?.Token?.Email
          }
        }
      }
      return authToken;
    }).catch(error => {
      throw error
    })
  }
}
