package com.turisteo.turisteoApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TuristeoApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TuristeoApiApplication.class, args);
		System.out.println("Api turisteo Corriendo");
	}

}
