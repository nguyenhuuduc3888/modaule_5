package all.service.contract_impl;

import all.model.contract.Contract;
import all.repository.contract.IContractRepository;
import all.service.contract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContractService implements IContractService {
    @Autowired
    IContractRepository contractRepository;

    @Override
    public Page<Contract> findAll(Pageable pageable, String name) {
        return contractRepository.findAll(pageable, "%" + name + "%");
    }

    @Override
    public void save(Contract contract) {
        contractRepository.save(contract);
    }

    @Override
    public Contract findById(Integer id) {
        return contractRepository.findById(id).orElse(null);
    }
}
