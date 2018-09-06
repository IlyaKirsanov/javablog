package com.ikirsanov.javablog.entity;

import javax.persistence.*;

@Entity
@Table(name = "topic")
public class Topic {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "category", length = 100)
    private String category;

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "text", length = 5000)
    private String text;

    @Column(name = "filelink", length = 1000)
    private String fileLink;


    public Topic() {
    }

    public Topic(String category, String description, String text, String fileLink) {
        this.category = category;
        this.description = description;
        this.text = text;
        this.fileLink = fileLink;
    }

    public String getFileLink() {
        return fileLink;
    }

    public void setFileLink(String fileLink) {
        this.fileLink = fileLink;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", description='" + description + '\'' +
                ", text='" + text + '\'' +
                ", fileLink='" + fileLink + '\'' +
                '}';
    }
}


