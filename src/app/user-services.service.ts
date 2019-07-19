import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  users = [
    {name: 'Rob', active: true},
    {name: 'Riss', active: false},
    {name: 'Smichael', active: true},
    {name: 'Nick', active: false}
  ];

  constructor() { }

  updateActive(name: string) {
    for (const user of this.users) {
      if (user.name === name) {
        user.active = !user.active;
      }
    }
  }
}
