package lv.sgtecommerce.finalproject.repositories;

import lv.sgtecommerce.finalproject.models.Product;
import lv.sgtecommerce.finalproject.models.ProductType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductTypeRepository extends CrudRepository<ProductType, Long> {

}