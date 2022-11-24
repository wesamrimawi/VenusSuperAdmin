import { AuthDto } from './auth.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response';

const API_URL: string = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiName: string = 'auth';

  constructor(private _http: HttpClient) { }

  authUser = (authDto: AuthDto): Observable<ApiResponse> => this._http.post<ApiResponse>(`${API_URL}${this._apiName}`, authDto);
}
