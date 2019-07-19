import { Component, OnInit, Input } from '@angular/core';
import { UserServicesService } from 'src/app/user-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: { name: string, active: boolean }[] = [];

  constructor(private userService: UserServicesService) {}

  // sortUsers() {
  //   this.active = [];
  //   this.inactive = [];
  //   this.users.forEach(user => {
  //     if (user.active) {
  //       this.active.push(user);
  //     } else if (!user.active) {
  //       this.inactive.push(user);
  //     }
  //   });
  // }

  changeActive(name: string) {
    this.userService.updateActive(name);
  }

  ngOnInit() {
  }
}
