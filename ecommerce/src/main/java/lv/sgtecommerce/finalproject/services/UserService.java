package lv.sgtecommerce.finalproject.services;

import lv.sgtecommerce.finalproject.models.User;

public interface UserService {

    void save(User user);
    User findByUsername(String username);


}
