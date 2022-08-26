package all.repository;

import all.model.PeoplePatient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPeoplePatientRepository extends JpaRepository<PeoplePatient, Integer> {
    @Query(value = "select * from people_patient  ", nativeQuery = true)
    List<PeoplePatient> getAll();
}
