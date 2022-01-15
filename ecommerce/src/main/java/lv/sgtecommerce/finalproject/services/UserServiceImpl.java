package lv.sgtecommerce.finalproject.services;

import lv.sgtecommerce.finalproject.models.User;
import lv.sgtecommerce.finalproject.repositories.RoleRepository;
import lv.sgtecommerce.finalproject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        /*
        1 - ADMIN
        2 - USER
        By default we set USER role. To add Admin's right just update user in DB.
         */
        user.setRole(roleRepository.getOne(2L));
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
