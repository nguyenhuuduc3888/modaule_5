package all.service;

import all.model.Patient;
import all.repository.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements IPatientService {
    @Autowired
    IPatientRepository patientRepository;

    //hiển thị phân trang
    @Override
    public Page<Patient> getAll(Pageable pageable) {
        return patientRepository.getAll(pageable);
    }

    //tìm kiếm nhiều trường ,hiển thị,phân trang
    @Override
    public Page<Patient> findAll(Pageable pageable, String codePeoplePatientSearch, String namePeoplePatientSearch) {
        return this.patientRepository.findAll(pageable, "%" + codePeoplePatientSearch + "%", "%" + namePeoplePatientSearch + "%");
    }

    //tìm kiếm 1 trường
    @Override
    public List<Patient> searchByCodePeoplePatient(String codePeoplePatientSearch, String namePeoplePatientSearch, String doctorSearch) {
        return patientRepository.searchByCodePeoplePatient("%" + codePeoplePatientSearch + "%", "%" + namePeoplePatientSearch + "%", "%" + doctorSearch + "%");
    }

    //tìm theo id
    @Override
    public Patient findById(int id) {
        return patientRepository.findById(id);
    }

    //thêm mới,cập nhật
    @Override
    public void save(Patient patient) {
        patientRepository.save(patient);
    }

    //xóa
    @Override
    public void delete(int id) {
        patientRepository.delete(id);
    }
}
