package com.webb.Backend_Boilerplate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HelloServerController {

    @GetMapping("/")
    public String login() {
        return "authenticated succesfully.";
    }

    @GetMapping("/hello")
   // @CrossOrigin(origins = "http://localhost:4200")
    public String sayHello() {
        return "[{\"message\": \"Hello, World From OUR SPRING SERVER!\"}]";
    }
  
    
    @GetMapping("/getUsers")
    public List<User> getUsers(){
		return Stream.of(new User(1,"eric","eric@gmail.com","9087654321"),
				new User(2,"adam","adam@gmail.com","8867101121")).
				collect(Collectors.toList());
	}

} 
	 



