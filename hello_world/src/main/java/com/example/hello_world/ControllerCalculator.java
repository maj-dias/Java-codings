package com.example.hello_world;

import com.example.hello_world.Parameters;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller //In Spring’s approach to building web sites, HTTP requests are handled by a controller
public class ControllerCalculator {

    @GetMapping("/calculate") //this annotations is used to map HTTP GET request to a method
    public String calculateForm(Model model){
        model.addAttribute("parameters", new Parameters());
        return "index"; //return the name of a view
    }

    @PostMapping("/calculate") // "/calculate" is a endpoint
    public String calculateSubmit(@ModelAttribute Parameters parameters, Model model){
        //a variavel parameters com p minusculo será utilizada no html
        model.addAttribute("parameters", parameters);
        model.addAttribute("calculated", true);
        return "result";
    }
}
