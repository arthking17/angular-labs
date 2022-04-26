package tn.itss.server;

import java.util.Arrays;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import tn.itss.server.enumeration.Status;
import tn.itss.server.model.Server;
import tn.itss.server.service.ServerService;

@SpringBootApplication
@EnableEncryptableProperties
public class ServerApplication extends SpringBootServletInitializer  {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ServerApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	/*@Bean
	CommandLineRunner run (@Autowired ServerService serverService) {
		return args -> {
			serverService.create(new Server(null, "192.168.1.169", "Ubuntu 22.04", "16 GB", "Server", 
			"http://localhost:8088/api/v1.0.0/servers/image/server1.png", Status.SERVER_UP));
			serverService.create(new Server(null, "192.168.1.170", "Master Node", "4 GB", "Server", 
			"http://localhost:8088/api/v1.0.0/server/image/server2.png", Status.SERVER_UP));
			serverService.create(new Server(null, "192.168.1.171", "Woker Node", "2 GB", "Server", 
			"http://localhost:8088/api/v1.0.0/server/image/server3.png", Status.SERVER_UP));
			serverService.create(new Server(null, "192.168.1.21", "Gitlab Runner", "16 GB", "Personal PC", 
			"http://localhost:8088/api/v1.0.0/server/image/server4.png", Status.SERVER_UP));
			serverService.create(new Server(null, "192.168.1.19", "Windows 11", "16 GB", "Personal PC", 
			"http://localhost:8088/api/v1.0.0/server/image/server1.png", Status.SERVER_UP));
		};
	}*/

	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
				"Accept", "Authorization", "Origin, Accept", "X-Requested-With",
				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
				"Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
		return new CorsFilter(urlBasedCorsConfigurationSource);
	}
}
