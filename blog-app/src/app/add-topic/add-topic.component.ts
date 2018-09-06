import {Component} from '@angular/core';
import {Topic} from '../topic';
import {TopicService} from '../topic.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent {

  topic = new Topic();
  submitted = false;


  constructor(
    private topicService: TopicService,
    private location: Location
  ) { }

  newTopic(): void {
    this.submitted = false;
    this.topic = new Topic();
  }

  addTopic() {
    this.submitted = true;
    this.save();
    console.log(this);
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.topicService.addTopic(this.topic)
      .subscribe();
    console.log(this.topic);
  }

}
