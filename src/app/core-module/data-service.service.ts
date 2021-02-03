import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
  constructor(private http : HttpClient) { }


  //api to fetch categoryList item
  getData(filter : string){
    let url = `${this.baseUrl}list.php?${filter}=list`
    return this.http.get<any>(url);
  }

  //api to fetch productList item
  getProductList(filter : string, product : string){
    let url = `${this.baseUrl}filter.php?${filter}=${product}`
    return this.http.get<any>(url);
  }

  //api to search item
  getSearchList(filter : string, product : string){
    let url = `${this.baseUrl}search.php?${filter}=${product}`
    return this.http.get<any>(url);
  }

}
