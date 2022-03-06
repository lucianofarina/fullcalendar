import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/service/pjn/guide/guide.service';

import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import allLocales from '@fullcalendar/core/locales-all';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  data:any;
  //arg = [];
  //Events: any[] = [];

  constructor(
    private dataServices:GuideService
  ) { }

  ngOnInit(): void {
    this.dataServices.calendarEvent().subscribe(respuesta=>{
      this.data = respuesta;
      this.calendarOptions.events = this.data;
      //console.log(this.data);
    });
  }
  
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
      //right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    themeSystem: 'bootstrap5', 
    initialView: 'dayGridMonth',
    locales: allLocales,
    locale: 'es',
    events: [],
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    height: "auto",
    eventBorderColor: '#000',
    eventBackgroundColor: '#FFF',
    eventTextColor: '#000',
    eventColor: '#000',
    eventInteractive: true,
    dateClick: this.onDateClick.bind(this),
    eventClick: this.onEventClick.bind(this),
  };

  onDateClick(res: any) {
    alert(res.dateStr);
  }

  onEventClick(res: any) {
    alert(res.event.end);
    //console.log(res);
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends
  }

  dataEvents() {
    this.calendarOptions.events = this.data;
  }



}
