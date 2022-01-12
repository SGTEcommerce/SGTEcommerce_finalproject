package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
