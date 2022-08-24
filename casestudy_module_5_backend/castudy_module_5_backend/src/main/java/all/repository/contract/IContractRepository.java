package all.repository.contract;

import all.model.contract.Contract;
import all.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IContractRepository extends JpaRepository<Contract,Integer> {
    @Query(value = " select * from contract where day_start like :name ", nativeQuery = true)
    Page<Contract> findAll(Pageable pageable, @Param("name") String name);
}
