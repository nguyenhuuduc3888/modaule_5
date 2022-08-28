package all.service;

import all.model.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPatientService {
    Page<Patient> getAll(Pageable pageable);

    Page<Patient> findAll(Pageable pageable, String codePeoplePatientSearch, String namePeoplePatientSearch);

    List<Patient> searchByCodePeoplePatient(String codePeoplePatientSearch, String namePeoplePatientSearch, String doctorSearch);

    Patient findById(int id);

    void save(Patient patient);

    void delete(int id);

}
