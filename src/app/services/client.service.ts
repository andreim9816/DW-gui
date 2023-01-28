import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from "../util/URL";
import {ClientDto} from "../model/ClientDto";

const httpOptions = {
  // headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<[ClientDto]> {
    return this.http.get<[ClientDto]>(URL.CLIENT_URL_OLTP, httpOptions);
  }

  add(body: any): Observable<ClientDto> {
    return this.http.post<ClientDto>(URL.CLIENT_URL_OLTP, body, httpOptions);
  }
}
