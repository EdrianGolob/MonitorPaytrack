import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
  })
export class BaseService {
    options: any = {};

    constructor(private http: HttpClient, private cookie: CookieService) {

        if (environment.type === "jboss") {
            this.cookie.set("JOSSO_SESSIONID", environment.token);
        }
        //descomentado DMF
        this.options = new HttpHeaders({
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Expose-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        });

        if (environment.type === "tomcat") {
            //descomentado DMF
            this.options = this.options.append(
                "Authorization",
                "Basic " + btoa(environment.auth)
            );
        }
    }
    
    getReg(url:any, filter:any = null, lock = true): Observable<any> {
        this.options = this.options.delete("X-Totvs-Screen-Lock");
        this.options = this.options.append(
            "X-Totvs-Screen-Lock",
            lock.toString()
        ); 

        return this.http.get(url, {
            headers: this.options,
            withCredentials: true,
            params:filter
        });
    }
   

   
}
