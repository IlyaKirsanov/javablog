import {NgModule} from '@angular/core';
import {TopicComponent} from "../topic/topic.component";
import {RouterModule, Routes} from "@angular/router";
import {AddTopicComponent} from "../add-topic/add-topic.component";
import {TopicDetailsComponent} from "../topic-details/topic-details.component";
import {SearchTopicComponent} from "../search-topic/search-topic.component";
import {TopicListComponent} from "../topic-list/topic-list.component";


const routes: Routes = [
  {
    path: 'topics/:id',
    component: TopicComponent
  },
  {
    path: 'topic/add',
    component: AddTopicComponent
  },
  {
    path: 'topics',
    component: TopicListComponent
  },
  {
    path: 'details/:id',
    component: TopicDetailsComponent
  },
  {
    path: 'findbycategory', component: SearchTopicComponent
  },
  {
    path: '',
    redirectTo: 'topics',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
