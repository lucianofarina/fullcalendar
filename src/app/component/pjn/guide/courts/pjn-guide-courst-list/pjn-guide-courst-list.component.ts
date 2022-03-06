import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/service/pjn/guide/guide.service';

@Component({
  selector: 'app-pjn-guide-courst-list',
  templateUrl: './pjn-guide-courst-list.component.html',
  styleUrls: ['./pjn-guide-courst-list.component.css']
})
export class PjnGuideCourstListComponent implements OnInit {

  data:any;

  constructor(
    private dataServices:GuideService
  ) { }

  ngOnInit(): void {
    this.dataServices.pjnGuideCourstList().subscribe(respuesta=>{
      //console.log(respuesta);
      this.data = respuesta;
    });
  }
  
}
