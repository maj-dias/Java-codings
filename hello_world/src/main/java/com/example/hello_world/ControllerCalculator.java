package com.example.hello_world;

import com.example.hello_world.Parameters;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ControllerCalculator {

    @GetMapping("/") //this annotations is used to nao HTTP GET request to a method
    public String index(Model model){
        model.addAttribute("parameters", new Parameters());
        return "index";
    }

    @PostMapping("/Calculate")
    public String calculate(Parameters parameters, Model model){
        model.addAttribute("parameters", parameters);
        model.addAttribute("calculated", true);
        return "index";
    }
}
