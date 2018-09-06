import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { SearchTopicComponent } from './search-topic/search-topic.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { TopicListComponent } from './topic-list/topic-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicDetailsComponent,
    AddTopicComponent,
    SearchTopicComponent,
    TopicListComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
