package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}