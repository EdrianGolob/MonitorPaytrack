import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

const endpoint = `${environment.url}/v1/paytapi003`; 

@Injectable({
  providedIn: 'root',
})
export class adtoService extends BaseService {
  
  public getAll(filter:any): Observable<any> {
    return this.getReg(`${endpoint}`, filter);
  }
        
    /*
    return this.getReg(`${endpoint}/${rowid}`);
    */


}
