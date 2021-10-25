import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlBase: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postUserInfo(data: any) {
    return this.http.post<AuthModule>(this.urlBase, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
