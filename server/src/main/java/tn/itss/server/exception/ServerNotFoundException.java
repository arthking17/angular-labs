package tn.itss.server.exception;

public class ServerNotFoundException extends RuntimeException {
    public ServerNotFoundException(String message) {
        super(message);
    }
}
