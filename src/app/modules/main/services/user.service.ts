import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest } from '../models/request/user.request';

@Injectable()
export class UserService {

  private readonly URL_API = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.URL_API}users`)
  }

  getUser(id: string){
    return this.http.get(`${this.URL_API}users/${id}`)
  }

  searchUser(name: string) {
    return this.http.get(`${this.URL_API}users?nombre_like=${name}`)
  }

  createUser(user: UserRequest){
    return this.http.post(`${this.URL_API}users`, user)
  }

  updateUser(user: UserRequest, id: string){
    return this.http.put(`${this.URL_API}users/${id}`, user)
  }

  deleteUser(id: string){
    return this.http.delete(`${this.URL_API}users/${id}`)
  }
}
