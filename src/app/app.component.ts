import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: {name: string, active: boolean}[] = [];

  constructor(private userService: UserServicesService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }
}
