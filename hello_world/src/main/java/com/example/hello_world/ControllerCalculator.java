package com.example.hello_world;

import com.example.hello_world.Parameters;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

// If you want to make some calculation, you should put it in the controller file (here). The controller file is
// responsible for handling HTTP requests and sending responses. It is a good place to put logic that needs to be
// executed when a user interacts with your application.
@Controller //In Spring’s approach to building web sites, HTTP requests are handled by a controller
public class ControllerCalculator {

    @GetMapping("/calculate") //this annotations is used to map HTTP GET request to a method
    public String calculateForm(Model model){
        model.addAttribute("parameters", new Parameters());
        return "index"; //return the name of a view
    }


    @GetMapping("/")
    public String main_view(){
        return "main";
    }

    //The @ModelAttribute annotation tells Spring MVC to bind the values of the parameters object
    //to the parameters model attribute
    @PostMapping("/calculate") // "/calculate" is a endpoint
    public String calculateSubmit(@ModelAttribute Parameters parameters, Model model){
        //a variavel parameters com p minusculo será utilizada no html
        System.out.println("-----------POST-------------");

        double finalAmount = 0;
        for (int i = 0; i < parameters.getYearsInvesting()*12; i++){
            finalAmount = finalAmount* Math.pow(1 + parameters.getInterestRate(), 1.0/12) + parameters.getMonthlyContribution();
        }

        String finalAmountstr = String.format("%.2f", finalAmount);
        model.addAttribute("parameters", parameters);
        model.addAttribute("finalAmount", finalAmountstr);
        model.addAttribute("calculated", true);
        return "result";
    }
}
