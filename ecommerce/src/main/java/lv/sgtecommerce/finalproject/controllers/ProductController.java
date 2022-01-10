package lv.sgtecommerce.finalproject.controllers;

import lv.sgtecommerce.finalproject.models.Product;
import lv.sgtecommerce.finalproject.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = { "", "/" })
    public Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PostMapping(value = { "", "/" })
    public  void add(@RequestBody Product product) {
        productService.save(product);
    }

}