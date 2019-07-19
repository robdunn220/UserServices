import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users/users.component';
import { NewUsersComponent } from './new-users/new-users/new-users.component';
import { UserServicesService } from './user-services.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
