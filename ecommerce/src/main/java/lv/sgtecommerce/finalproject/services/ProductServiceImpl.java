package lv.sgtecommerce.finalproject.services;

import lv.sgtecommerce.finalproject.models.Product;
import lv.sgtecommerce.finalproject.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void update(Long Id, Product product) {
        productRepository.save(product);
    }

    @Override
    public void delete(Long Id) {
        productRepository.deleteById(Id);
    }

    @Override
    public Product getProduct(long id) throws Exception {
        return productRepository
                .findById(id)
                .orElseThrow(() -> new Exception("Product not found"));
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    public ProductRepository getProductRepository() {
        return productRepository;
    }

    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
}

