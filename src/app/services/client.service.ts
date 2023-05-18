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

  getAllGlobal(): Observable<[ClientDto]> {
    return this.http.get<[ClientDto]>(URL.CLIENT_URL_GLOBAL, httpOptions);
  }

  getAllLow(): Observable<[ClientDto]> {
    return this.http.get<[ClientDto]>(URL.CLIENT_URL_LOW, httpOptions);
  }

  getAllNonLow(): Observable<[ClientDto]> {
    return this.http.get<[ClientDto]>(URL.CLIENT_URL_NON_LOW, httpOptions);
  }

  addGlobal(body: any): Observable<ClientDto> {
    return this.http.post<ClientDto>(URL.CLIENT_URL_GLOBAL, body, httpOptions);
  }

  addLow(body: any): Observable<ClientDto> {
    return this.http.post<ClientDto>(URL.CLIENT_URL_LOW, body, httpOptions);
  }

  addNonLow(body: any): Observable<ClientDto> {
    return this.http.post<ClientDto>(URL.CLIENT_URL_NON_LOW, body, httpOptions);
  }
}
