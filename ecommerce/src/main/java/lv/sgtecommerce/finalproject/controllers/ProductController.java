package lv.sgtecommerce.finalproject.controllers;

import lombok.RequiredArgsConstructor;
import lv.sgtecommerce.finalproject.models.Product;
import lv.sgtecommerce.finalproject.repositories.ProductRepository;
import lv.sgtecommerce.finalproject.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping(value = { "", "/" })
    public Iterable<Product> getProducts() {
        return productService.getAllProducts();

    }
}

