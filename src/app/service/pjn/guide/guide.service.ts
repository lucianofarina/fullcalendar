import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GuideService {
  url: string = 'http://localhost/juridico/guia/index.php?action=';
  action: string = '';
  API: string = '';
  
  constructor(private clienteHttp:HttpClient) { }

  pjnGuideCourstList(){
    this.action = 'pjnguidecourstlist';
    this.API = this.url + this.action;
    return this.clienteHttp.get(this.API);
  }
  
  calendarEvent(){
    this.action = 'calendarevent';
    this.API = this.url + this.action;
    return this.clienteHttp.get(this.API);
  }

}
