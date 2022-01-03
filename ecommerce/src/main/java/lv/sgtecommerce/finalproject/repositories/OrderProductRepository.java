package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.OrderProduct;
import lv.sgtecommerce.finalproject.models.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}