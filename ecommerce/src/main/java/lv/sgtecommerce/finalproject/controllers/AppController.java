package lv.sgtecommerce.finalproject.controllers;

import lv.sgtecommerce.finalproject.models.User;
import lv.sgtecommerce.finalproject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@CrossOrigin(origins = "http://localhost:4200") //annotation to specify that calls will be made to this controller from different domains. In our case we have specified that a call can be made from localhost:4200.
@RequestMapping(path = "users")
@Controller
public class AppController {

    @Autowired
    private UserRepository repo;

    @GetMapping("")
    public String viewHomePage() {
        return "/menu.component";
    }

    @GetMapping("/signup")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());

        return "/signup.component";
    }


    /* Using BCryptPasswordEncoder to encode the user’s password so the password itself is not stored in database
    (for better security), only the hash value of the password is stored.*/

    @PostMapping("/process_register")
    public String processRegister(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        repo.save(user);
        return "success.component";
    }

}