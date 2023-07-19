package com.example.hello_world;

import com.example.hello_world.Parameters;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller //In Spring’s approach to building web sites, HTTP requests are handled by a controller
public class ControllerCalculator {

    @GetMapping("/calculate") //this annotations is used to map HTTP GET request to a method
    public String calculateForm(Model model){
        model.addAttribute("parameters", new Parameters());
        return "index"; //return the name of a view
    }

    @PostMapping("/calculate") // "/calculate" is a endpoint
    public String calculateSubmit(Parameters parameters, Model model){
        model.addAttribute("parameters", parameters);
        model.addAttribute("calculated", true);
        return "index";
    }
}
