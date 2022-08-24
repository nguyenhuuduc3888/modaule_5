package all.service.facility_impl;

import all.model.facility.FacilityType;
import all.repository.facility.IFacilityTypeRepository;
import all.service.facility.IFacilityTypeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FacilityTypeService implements IFacilityTypeService {
    @Autowired
    IFacilityTypeRepository facilityTypeRepository;


    @Override
    public List<FacilityType> findAll() {
        return facilityTypeRepository.findAll();
    }
}
