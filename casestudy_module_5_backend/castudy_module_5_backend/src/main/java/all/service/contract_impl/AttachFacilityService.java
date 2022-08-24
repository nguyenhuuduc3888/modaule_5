package all.service.contract_impl;

import all.model.contract.AttachFacility;
import all.repository.contract.IAttachFacilityRepository;
import all.service.contract.IAttachFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AttachFacilityService implements IAttachFacilityService {
    @Autowired
    IAttachFacilityRepository attachFacilityRepository;
    @Override
    public List<AttachFacility> findALL() {
        return attachFacilityRepository.findAll();
    }
}
