package com.ikirsanov.javablog.repository;

import com.ikirsanov.javablog.entity.Topic;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TopicRepository  extends CrudRepository<Topic, Integer> {

   List<Topic> findByCategory(String category);


}
