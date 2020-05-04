package com.webb.Backend_Boilerplate;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
 
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests().antMatchers("/**").
		fullyAuthenticated().and().httpBasic();
	}
	
	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("admin").password("{noop}password").roles("USER");

     
}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) 
//	  throws Exception {
//	    auth.inMemoryAuthentication()
//	      .withUser("user").password("{noop}password").roles("USER")
//	      .and()
//	      .withUser("admin").password("{noop}password").roles("USER", "ADMIN");
//	}
//	 
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//          .antMatchers("/", "/home", "/hello").access("hasRole('USER')")
//          .antMatchers("/admin/**").hasRole("ADMIN")
//          .and()
//          // some more method calls
//          .formLogin();
//    }
//    protected void configureLogOut(HttpSecurity http) throws Exception {
//        http.logout();
//    }
//    
//}
