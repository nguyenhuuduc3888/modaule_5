package all.service;

import all.model.Patient;

import java.util.List;

public interface IPatientService {
    List<Patient> getAll();

    List<Patient> findByName(String name);

    Patient findById(int id);

    void save(Patient patient);

    void update(Patient patient);

    void delete(int id);

}
