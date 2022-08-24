package all.service.facility;

import all.model.facility.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface IFacilityService {

    Page<Facility> findAll(Pageable pageable, String name);

    void save(Facility facility);

    void delete(int id);

    Facility findById(Integer id);

    List<Facility> find();

}
