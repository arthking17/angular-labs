package tn.itss.server.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import tn.itss.server.model.Server;

public interface ServerRepository extends MongoRepository<Server, Long>{
    Optional<Server> findByIpAddress(String ipAddress);
    Optional<Server> findServerById(Long id);
}
