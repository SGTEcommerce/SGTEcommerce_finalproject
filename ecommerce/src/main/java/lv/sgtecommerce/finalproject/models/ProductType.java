package lv.sgtecommerce.finalproject.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

//Product type is name for product category: new entry, best sellers
@Entity(name= "product_type") //Table named "product_type" in the DB pe_unique_items
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Rules type for Id generating
    private Long id;

    @NotNull(message = "Product type is required.")
    @Basic(optional = false)
    private String name;

    public ProductType() {
    }

    //Standard getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}