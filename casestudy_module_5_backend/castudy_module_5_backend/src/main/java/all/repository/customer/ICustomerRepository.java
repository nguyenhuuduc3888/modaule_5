package all.repository.customer;

import all.model.customer.Customer;
import all.model.customer.CustomerType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Transactional
    @Modifying
    @Query(value = "delete from customer where id =:id", nativeQuery = true)
    void delete(@Param("id") int id);

    //update
    @Transactional
    @Modifying
    @Query(value = "update customer set name=:name,date_of_birth=:date_of_birth,gender=:gender," +
            "id_card=:id_card,phone=:phone,email=:email,address=:address,type_id=:type_id where id=:id",
            nativeQuery = true)
    void update(@Param("name") String name, @Param("date_of_birth") String date_of_birth, @Param("gender") int gender,
                @Param("id_card") String id_card, @Param("phone") String phone, @Param("email") String email,
                @Param("address") String address, @Param("type_id") CustomerType type_id,
                @Param("id") int id);

    //find phan trang
    @Query(value = " select * from customer where name like :name ", nativeQuery = true)
    Page<Customer> findAll(Pageable pageable, @Param("name") String name);
}
