package lv.sgtecommerce.finalproject.controllers;

import lv.sgtecommerce.finalproject.models.User;
import lv.sgtecommerce.finalproject.repositories.UserRepository;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;



@RequestMapping("/api/signup")

@Controller
public class AppController {

    @Autowired
    private UserRepository repo;

    @GetMapping("")
    public String viewHomePage() {
        return "/menu.component";
    }



    /* Using BCryptPasswordEncoder to encode the user’s password so the password itself is not stored in database
    (for better security), only the hash value of the password is stored.*/

    @PostMapping("/signup")
    public String processRegister(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        repo.save(user);

        return "/signup.component";
    }

    @GetMapping("/users")
    public String listUsers(Model model) {
        List<User> listUsers= repo.findAll();
        model.addAttribute("listUsers", listUsers);

        return "users";
    }

    @GetMapping("/users")
    public String viewUserList() {
        return  "users";
    }

}