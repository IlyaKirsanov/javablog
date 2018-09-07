import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from './topic';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private baseUrl = 'http://localhost:8080/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getTopics (): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/topics`)
  }

  getTopic(id: number): Observable<Topic> {
    const url = `${this.baseUrl}/topics/${id}`;
    return this.http.get<Topic>(url);
  }

  addTopic (topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}` + `/posttopic`, topic, httpOptions);
    console.log(topic);
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/topics/${id}`, { responseType: 'text' });
  }

  updateTopic(topic: Topic): Observable<any> {
    return this.http.put(`${this.baseUrl}/topics/`, topic, httpOptions);
  }





  getTopicByCategory(category:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/findbycategory/${category}`);
  }
}
