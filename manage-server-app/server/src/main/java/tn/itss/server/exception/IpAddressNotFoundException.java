package tn.itss.server.exception;

public class IpAddressNotFoundException extends RuntimeException {
    public IpAddressNotFoundException(String message) {
        super(message);
    }
}
