package all.service;

import all.model.Patient;
import all.repository.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements IPatientService {
    @Autowired
    IPatientRepository patientRepository;

    @Override
    public List<Patient> getAll() {
        return patientRepository.getAll();
    }

    @Override
    public List<Patient> findByName(String name) {
        return patientRepository.findByName("%" + name + "%");
    }

    @Override
    public Patient findById(int id) {
        return patientRepository.findById(id);
    }

    @Override
    public void save(Patient patient) {
        patientRepository.save(patient);
    }

    @Override
    public void update(Patient patient) {
        patientRepository.update(patient.getCodePatient(), patient.getNamePeoplePatient(), patient.getNamePeoplePatient(), patient.getDayStart(),
                patient.getDayEnd(), patient.getReason(), patient.getMethod(), patient.getDoctor(), patient.getId());
    }

    @Override
    public void delete(int id) {
        patientRepository.delete(id);
    }
}
