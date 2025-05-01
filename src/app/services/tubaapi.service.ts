import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TubaapiService {
  // injetar a biblioteca HttpClient
  constructor(private http: HttpClient) { }

  getAllAtaques() {
    return this.http.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?select=date%2C%20year%2C%20country%2C%20area%2C%20location%2C%20name%2C%20sex%2C%20age&where=area%20%3D%20%27Pernambuco%27&limit=30&refine=country%3A%22BRAZIL%22`);
  }
}
