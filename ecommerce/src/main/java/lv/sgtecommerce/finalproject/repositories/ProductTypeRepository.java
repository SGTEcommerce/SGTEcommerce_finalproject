package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.ProductType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTypeRepository extends CrudRepository<ProductType, Long> {
}