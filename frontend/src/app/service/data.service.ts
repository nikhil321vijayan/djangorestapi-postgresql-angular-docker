import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ResponseBean {
    constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient

  ) {

  }



  //return this.http.get(this.heroesUrl, requestOptions)


  executeDataEntryService(inputText) {
    const headerDict = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      //"referrer-policy": "same-origin",
      //"Access-Control-Allow-Origin": "http://localhost:4200",
      //"Access-Control-Allow-Credentials": "true",
      //"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      //'Access-Control-Allow-Header': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),

    };


    //return this.http.get<ResponseBean>('http://192.168.99.100:9999/record');
    return this.http.post<ResponseBean>("http://192.168.99.100:9999/record",{"text": inputText}, requestOptions);
    //{headers:{"Access-Control-Allow-Origin":true}}
    console.log("Execute the service...");
  }
}
