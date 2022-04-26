package tn.itss.server.model;

import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.itss.server.enumeration.Status;

@Document(collection = "servers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Server {

    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";
    
    @Id
    private Long id;

    @Field(name = "ipAddress")
    @Indexed(unique = true)
    @NotEmpty(message = "IP Address cannot be empty or null")
    private String ipAddress;
    private String name;
    private String memory;
    private String type;
    private String imageUrl;
    private Status status;

}
