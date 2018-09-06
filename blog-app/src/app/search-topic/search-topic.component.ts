import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../topic.service';


@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.css']
})
export class SearchTopicComponent implements OnInit {

  category: string;
  topics: Topic[];

  constructor(private dataService: TopicService) { }

  ngOnInit() {
    this.category = "";
  }

  private searchTopics() {
    if (this.category!="") {
      this.dataService.getTopicByCategory(this.category)
        .subscribe(topics => this.topics = topics);
    }else {
      this.dataService.getTopics().subscribe(topics => this.topics = topics);
    }

  }

  onSubmit() {
    this.searchTopics();
  }

}
