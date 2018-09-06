import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../topic.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']

})
export class TopicComponent implements OnInit {

  topic = new Topic() ;
  submitted = false;
  message: string;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id)
      .subscribe(topic => this.topic = topic);
  }


  update(): void {
    this.submitted = true;
    this.topicService.updateTopic(this.topic)
      .subscribe(() => this.message = "Topic Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.topicService.deleteTopic(this.topic.id)
      .subscribe(()=> this.message = "Topic Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }


}
