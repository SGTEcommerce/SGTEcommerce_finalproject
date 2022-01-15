package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}