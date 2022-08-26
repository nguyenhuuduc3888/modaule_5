package all.service.customer_impl;

import all.model.customer.Customer;
import all.repository.customer.ICustomerRepository;
import all.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    ICustomerRepository customerRepository;

    @Override
    public Page<Customer> findAll(Pageable pageable, String name) {
        return customerRepository.findAll(pageable, "%" + name + "%");
    }

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void delete(int id) {
        customerRepository.delete(id);
    }

    @Override
    public Customer findById(Integer id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Customer customer) {
        customerRepository.update(customer.getName(), customer.getDateOfBirth(), customer.getGender(), customer.getIdCard(), customer.getPhone(),
                customer.getEmail(), customer.getAddress(), customer.getCustomerType(), customer.getId());
    }

    //tim kiem khong phan trang
    @Override
    public List<Customer> find() {
        return customerRepository.findAll();
    }
}
