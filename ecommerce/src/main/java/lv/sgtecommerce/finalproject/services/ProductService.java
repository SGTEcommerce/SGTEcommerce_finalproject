package lv.sgtecommerce.finalproject.services;


import lv.sgtecommerce.finalproject.models.Product;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Product create (Product product);

    void update (Long Id, Product product);

    void delete (Long Id);

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id) throws Exception;

    Product save(Product product);
}