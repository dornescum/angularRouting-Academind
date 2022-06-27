import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


const AppRoutes: Routes= [
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id/:name", component:UserComponent},
  {path:"servers", component:ServersComponent},
  {path:"servers/:id/edit", component:EditServerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
