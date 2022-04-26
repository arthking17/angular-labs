package tn.itss.server;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import tn.itss.server.enumeration.Status;
import tn.itss.server.model.Server;
import tn.itss.server.service.ServerService;

@SpringBootTest(classes = {tn.itss.server.ServerApplication.class})
class ServerApplicationTests {

	@Autowired
	ServerService serverService;

	@Test
	void contextLoads() {
	}

	@Test
	void testAddServer(){
		serverService.create(new Server(null, "192.168.1.169", "Ubuntu 22.04", "16 GB", "Server", 
			"https://localhost:8080/sever/images/server1.png", Status.SERVER_UP));
	}

}
