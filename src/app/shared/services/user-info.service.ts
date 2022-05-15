import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  $userData$: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.$userData$ = new BehaviorSubject({});
  }

  getUserDetails(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }
}
