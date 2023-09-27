package com.matheus.crudspring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //essa classe contém um endpoint
@RequestMapping("/api/courses")
public class CoursesController {

    @GetMapping
    public List<Object> list(){
        return null;
    }
    
}
