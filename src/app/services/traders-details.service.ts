import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradersDetailsService {
  private base_url = "http://localhost:5555/v1/products/"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.base_url)
  }

  getOne(id: any) {
    return this.http.get(this.base_url + id)
  }
}
