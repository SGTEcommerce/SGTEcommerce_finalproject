package lv.sgtecommerce.finalproject.controllers;

import lv.sgtecommerce.finalproject.models.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.HashMap;

@RestController //get request to return a list of users
@CrossOrigin
public class UserController {

    @RequestMapping("/login")
    public HashMap<String, String> login(@RequestBody User user) {

        HashMap<String, String> token = new HashMap<>();
        token.put("token", user.getUsername());
        return token;
                
                //user.getUsername().equals("username") && user.getPassword().equals("password");
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }
}

