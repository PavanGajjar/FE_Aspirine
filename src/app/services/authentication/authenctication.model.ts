export namespace AuthenticationVM{
    
    export interface authDetails{
        email: string;
        password: string;
        isAdmin:string;
    }

    export class tokenDetails{
        accessToken : string = "";
        tokenType: number = 0;
        tokenExpiry: Date = new Date();
        email: string = "";
    }

    export interface jwtAuthTokenRes{
        email: string;
        token : string;
        tokenExpiry: Date;
    }
    
    export class authToken{
        token : tokenDetails = new tokenDetails();
    }
}
