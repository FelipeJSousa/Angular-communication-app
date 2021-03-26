import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule }  from "@angular/material/card";
import { MatIconModule }  from "@angular/material/icon";
import { MatButtonModule }  from "@angular/material/button";
import { MatFormFieldModule }  from "@angular/material/form-field";
import { MatListModule }  from "@angular/material/list";
import { MatInputModule }  from "@angular/material/input";

import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ChildItemComponent } from './event-emitter/child-item/child-item.component'
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemClientComponent } from './clients/item-client/item-client.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventEmitterComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
