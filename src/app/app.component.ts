import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fruits= ['Mengo', 'Orange', 'Banana'];
  title="sanlkar me"
  posts = [];
  data: {}[];
  name: string="fun day";

addFruit(item){
  this.fruits.push(item);

console.log(item)
}

  constructor(private http: HttpClient) { }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(){

this.data=[{
one:'fun day'
},
{
  two:'happy pongal'
}

]

   }
   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: this.name, date: '2020-10-01' },
      { title: this.name, date: '2020-10-02' }
    ]
  };

}
