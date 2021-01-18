import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Register } from '../../app/models/register'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

constructor(private http: HttpClient) { }

private url = "http://localhost:3000/user";

// private userLength(){
//   return this.http.get(this.url)
// }

createUser(register: Register) {
//  const id = this.userLength() 
 return this.http.post(this.url, register)
}

getUser(): Observable<Register[]> {
  return this.http.get<Register[]>(this.url); 
}

}
