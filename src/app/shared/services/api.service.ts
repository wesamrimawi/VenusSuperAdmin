import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { environment } from 'src/environments/environment';

const API_URL: string = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _apiName: string = ' ';

  constructor(private readonly _http: HttpClient) {
  }

  getAll = (): Observable<ApiResponse> => this._http.get<ApiResponse>(`${API_URL}${this._apiName}`);

  getById = (id: number): Observable<ApiResponse> => this._http.get<ApiResponse>(`${API_URL}${this._apiName}/${id}`);

  add = (data: any): Observable<ApiResponse> => this._http.post<ApiResponse>(`${API_URL}${this._apiName}`, data);

  update = (data: any, id: number): Observable<ApiResponse> => this._http.patch<ApiResponse>(`${API_URL}${this._apiName}/${id}`, data);

  delete = (id: number): Observable<ApiResponse> => this._http.delete<ApiResponse>(`${API_URL}${this._apiName}/${id}`);

  set apiName(name: string) { this._apiName = name };
}
