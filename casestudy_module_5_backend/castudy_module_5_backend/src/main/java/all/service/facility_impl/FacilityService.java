package all.service.facility_impl;

import all.model.facility.Facility;
import all.repository.facility.IFacilityRepository;
import all.service.facility.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class FacilityService implements IFacilityService {
    @Autowired
    IFacilityRepository facilityRepository;

    //hien thi + tim kiem phan trang
    @Override
    public Page<Facility> findAll(Pageable pageable, String name) {
        return facilityRepository.findAll(pageable, "%" + name + "%");
    }

    //luu
    @Override
    public void save(Facility facility) {
        facilityRepository.save(facility);
    }

    //xoa
    @Override
    public void delete(int id) {
        facilityRepository.deleteById(id);
    }

    //tim theo id
    @Override
    public Facility findById(Integer id) {
        return facilityRepository.findById(id).orElse(null);
    }

    //tim kiem khong phan trang
    @Override
    public List<Facility> find() {
        return facilityRepository.findAll();
    }
}
