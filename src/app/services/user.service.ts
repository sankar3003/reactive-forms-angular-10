import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {
api="http://localhost:3000/employees"

constructor(public http:HttpClient){

}
getData():Observable<any>{
  return this.http.get(this.api)
}

getById(id):Observable<any>{

  return this.http.get(`${this.api}/${id}`)
}
}
