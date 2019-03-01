import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any; // stores the values returned from the http request

  constructor(private http: HttpClient) { } // set up to use httpClient * note import *

  ngOnInit() {
    this.getValues(); // gets the values upon the page loading
  }

  // method to perform the http get request to return all values
  getValues () {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
