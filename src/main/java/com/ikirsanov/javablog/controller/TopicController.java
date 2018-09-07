package com.ikirsanov.javablog.controller;

import com.ikirsanov.javablog.entity.Topic;
import com.ikirsanov.javablog.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class TopicController {

    @Autowired
    private TopicRepository topicRepository;


    @GetMapping("/topics")
    public List<Topic> getAllTopics() {
        System.out.println("Get all topics...");

        List<Topic> topics = new ArrayList<>();
        for (Topic topic : topicRepository.findAll()) {
            topics.add(topic);
        }

        return topics;
    }

    @GetMapping("/topics/{id}")
    public Optional<Topic> getOneTopic(@PathVariable("id") int id) {
        return topicRepository.findById(id);
    }

    @PostMapping(value = "/posttopic")
    public Topic postTopic(@RequestBody Topic topic) {

        topicRepository.save(new Topic(topic.getCategory(), topic.getDescription(), topic.getText(), topic.getFileLink()));
        System.out.println(topic.toString());
        return topic;
    }

    @DeleteMapping("/topics/{id}")
    public ResponseEntity<String> deleteTopic(@PathVariable("id") int id) {
        System.out.println("Delete topic with ID = " + id + "...");

        topicRepository.deleteById(id);

        return new ResponseEntity<>("Topic has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/topics/delete")
    public ResponseEntity<String> deleteAllTopics() {
        System.out.println("Delete All topic...");

        topicRepository.deleteAll();

        return new ResponseEntity<>("All topic have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "/findbycategory/{category}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Topic> findByCategory(@PathVariable String category) {

        List<Topic> topics = topicRepository.findByCategory(category);
        return topics;
    }

    @PutMapping("/topics")
    public void putTopic(@RequestBody Topic topic) {
        topicRepository.save(topic);
    }
}

