package all.service.contract;

import all.model.contract.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IContractService {
    Page<Contract> findAll(Pageable pageable, String name);

    void save(Contract contract);

    Contract findById(Integer id);

}
