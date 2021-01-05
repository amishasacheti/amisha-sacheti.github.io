import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) {}
  
  title = 'prototype-website';
  userData: any;
  pageNumber: Number = 0;

  ngOnInit() {
    this.getAllData();
  }

  showPage(page: string) {
    if(page == "About") { this.pageNumber = 1 }
    else if(page == "Projects") { this.pageNumber = 2 }
    else if(page == "Contacts") { this.pageNumber = 3 }
  }

  getAllData() {
    this.appService.getAllData().subscribe(
      user => {
        this.userData = user;
    });
  }

}
