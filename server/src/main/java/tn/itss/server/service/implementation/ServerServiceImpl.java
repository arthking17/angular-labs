package tn.itss.server.service.implementation;

import java.io.IOException;
import java.net.InetAddress;
import java.util.Collection;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.itss.server.enumeration.Status;
import tn.itss.server.exception.IpAddressNotFoundException;
import tn.itss.server.exception.ServerNotFoundException;
import tn.itss.server.model.Server;
import tn.itss.server.repository.ServerRepository;
import tn.itss.server.service.SequenceGeneratorService;
import tn.itss.server.service.ServerService;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ServerServiceImpl implements ServerService{

    @Autowired
    ServerRepository serverRepo;

	@Autowired
	SequenceGeneratorService sequenceGenerator;

    @Override
    public Server create(Server server) {
        log.info("Saving new server: {}", server.getName());
		server.setId(sequenceGenerator.generateSequence(Server.SEQUENCE_NAME));
        server.setImageUrl(setServerImageUrl());
        return serverRepo.save(server);
    }

    @Override
    public Collection<Server> list(int limit) {
        log.info("Fetching all servers");
        return serverRepo.findAll(PageRequest.of(0, limit)).toList();
    }

    @Override
    public Server get(Long id) {
        log.info("Fetching server by id: {}", id);
        return serverRepo.findServerById(id)
            .orElseThrow(() -> new ServerNotFoundException("Server by id " + id + " was not found"));
    }

    @Override
    public Server update(Server server) {
        log.info("Updating server: {}", server.getName());
        return serverRepo.save(server);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting server by id: {}", id);
        serverRepo.deleteById(id);
        return true;
    }

    @Override
    public Server ping(String ipAddress) throws IOException {
        log.info("Pinging server IP: {}", ipAddress);
        
        Server server =  serverRepo.findByIpAddress(ipAddress)
        .orElseThrow(() -> new IpAddressNotFoundException("Ip address " + ipAddress + " was not assigned to any server"));

        InetAddress address = InetAddress.getByName(ipAddress);
        server.setStatus(address.isReachable(10000) ? Status.SERVER_UP : Status.SERVER_DOWN);
        serverRepo.save(server);
        return server;
    }

    private String setServerImageUrl() {
        String[] imageNames = { "server1.png", "server2.png", "server3.png", "server4.png" };
        return ServletUriComponentsBuilder.fromCurrentContextPath().path("/servers/image/" + imageNames[new Random().nextInt(4)]).toUriString();
    }
    
}
