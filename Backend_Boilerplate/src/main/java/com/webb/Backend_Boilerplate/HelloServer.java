package com.webb.Backend_Boilerplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloServer {

	

    @GetMapping("/hello")
    @CrossOrigin(origins = "http://localhost:4200")
    public String sayHello() {
        return "[{\"message\": \"Hello, World From OUR SPRING SERVER!\"}]";
    }

}
	



