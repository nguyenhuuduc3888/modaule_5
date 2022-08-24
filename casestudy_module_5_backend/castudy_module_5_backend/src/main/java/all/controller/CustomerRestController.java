package all.controller;

import all.model.customer.Customer;
import all.model.customer.CustomerType;
import all.service.customer_impl.CustomerService;
import all.service.customer_impl.CustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
@RequestMapping("/api/customer")
public class CustomerRestController {
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerTypeService customerTypeService;

    @GetMapping("/getAll")
    public ResponseEntity<List<CustomerType>> getListCustomerType() {
        List<CustomerType> customerTypeList = customerTypeService.findAll();
        if (customerTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypeList, HttpStatus.OK);
    }

    //Hiển thị tất cả
    @GetMapping("")
    public ResponseEntity<List<Customer>> getList() {
        List<Customer> customerList = customerService.find();
        if (customerList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    //Tìm kiếm theo id
    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id) {
        Customer customer = customerService.findById(id);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    //Thêm mới
    @PostMapping("")
    public ResponseEntity<Customer> create(@RequestBody Customer customer) {
        customerService.save(customer);
        return new ResponseEntity(HttpStatus.OK);
    }

    //Cập Nhật
    @PutMapping("/{id}")
    public ResponseEntity<Customer> update(@PathVariable Integer id, @RequestBody Customer customer) {
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        customerService.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    //Xóa
    @DeleteMapping("/{id}")
    public ResponseEntity<Customer> delete(@PathVariable Integer id) {
        Customer customer = customerService.findById(id);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        customerService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}


