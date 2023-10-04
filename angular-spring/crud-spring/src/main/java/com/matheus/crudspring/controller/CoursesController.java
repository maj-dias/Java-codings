package com.matheus.crudspring.controller;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matheus.crudspring.model.Course;
import com.matheus.crudspring.repository.CourseRepository;


@RestController //essa classe contém um endpoint
@RequestMapping("/api/courses")
@Component

public class CoursesController {


    private CourseRepository courseRepository;

    public CoursesController(CourseRepository courseRepository){ //construtor para injecao de dependencia
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> list(){
        return courseRepository.findAll();
    }
    
}
