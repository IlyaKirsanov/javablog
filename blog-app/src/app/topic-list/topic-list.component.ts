import { Component, OnInit } from '@angular/core';
import {Topic} from "../topic";
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    return this.topicService.getTopics()
      .subscribe(
        topics => {
          console.log(topics);
          this.topics = topics
        }
      );
  }
}
