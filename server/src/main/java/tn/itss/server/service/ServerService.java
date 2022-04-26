package tn.itss.server.service;

import java.io.IOException;
import java.util.Collection;

import tn.itss.server.model.Server;

public interface ServerService {
    Server create(Server server);
    Collection<Server> list(int limit);
    Server get(Long id);
    Server update(Server server);
    Boolean delete(Long id);
    Server ping(String ipAddress) throws IOException;
}
