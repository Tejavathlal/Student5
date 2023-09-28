import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) {}
    
  getstudent():Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }
  
 createstudent(data:any):Observable<any>{
  return this.httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students", data);
 }

 updateStudent(id:number,data:any):Observable<any>{
   return this.httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/", +id,data);
 }

 deleteStudent(id:any):Observable<any>{
  return this.httpClient.delete("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id)
 }

 getstudentview(id:any):Observable<any>{
  return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);

 }
}
