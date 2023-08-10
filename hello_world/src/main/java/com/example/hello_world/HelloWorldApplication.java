package com.example.hello_world;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//The @RestController annotation is a specific annotation provided by the Spring framework in Java. It is used to mark
// a class as a RESTful controller, indicating that it will handle HTTP requests and produce responses in the context
// of a RESTful web service. When you annotate a class with @RestController, it combines the functionality of the
// @Controller annotation (which marks a class as a controller component in Spring MVC) with the
// @ResponseBody annotation (which indicates that the return value of a method should be serialized
// directly into the response body).
@SpringBootApplication
@RestController
public class HelloWorldApplication {

	private final ResourceLoader resourceLoader;

	//constructor
	//In Java, a constructor is a special method within a class that is used to initialize objects of that class.
	// It is called automatically when an object is created using the new keyword or through object instantiation.
	//A constructor has the same name as the class it belongs to and does not have a return type, not even void.
	// It is responsible for setting up the initial state of an object by assigning values to its member variables or
	// performing any other necessary initialization tasks.
	//Constructors can also have parameters, allowing you to pass values to initialize the object with different
	// initial states. These are called parameterized constructors.
	public HelloWorldApplication(ResourceLoader resourceLoader){
		this.resourceLoader = resourceLoader;
	}

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}
	//The parameter inside the @GetMapping is an endpoint
	//In the context of the Java Spring framework, an endpoint refers to a specific URL or URI
	// (Uniform Resource Identifier) exposed by a web application. Endpoints are associated with specific operations
	// or actions that can be performed on or with the web application.
	@GetMapping("/")
	public Resource index(){
		return resourceLoader.getResource("classpath:templates/index.html");
	}

}
