package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}