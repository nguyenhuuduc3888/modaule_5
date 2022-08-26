package all.service;

import all.model.PeoplePatient;
import all.repository.IPeoplePatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeoplePatientService implements IPeoplePatientService {
    @Autowired
    IPeoplePatientRepository peoplePatientRepository;

    @Override
    public List<PeoplePatient> getALL() {
        return peoplePatientRepository.getAll();
    }
}
