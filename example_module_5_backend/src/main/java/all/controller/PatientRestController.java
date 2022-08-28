package all.controller;

import all.dto.PatientDto;
import all.model.Patient;
import all.service.IPatientService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/patient")
public class PatientRestController {
    @Autowired
    IPatientService patientService;

    //Hiển thị,phân trang
    @GetMapping("/list")
    public ResponseEntity<Page<Patient>> getAll(@PageableDefault(4) Pageable pageable) {
        Page<Patient> patientList = patientService.getAll(pageable);
        if (patientList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }

    //Hiển thị,tìm kiếm,phân trang
    @GetMapping("/page")
    public ResponseEntity<Page<Patient>> getPatientPage(@PageableDefault(4) Pageable pageable,
                                                        Optional<String> codePeoplePatientSearch,
                                                        Optional<String> namePeoplePatientSearch) {
        String codePeoplePatient = codePeoplePatientSearch.orElse("");
        String namePeoplePatient = namePeoplePatientSearch.orElse("");
        if (codePeoplePatient.equals("null")) {
            codePeoplePatient = "";
        }
        if (namePeoplePatient.equals("null")) {
            namePeoplePatient = "";
        }
        Page<Patient> patientPage = patientService.findAll(pageable, codePeoplePatient, namePeoplePatient);
        if (patientPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patientPage, HttpStatus.OK);
    }

    //Tìm theo id
    @GetMapping("find/{id}")
    public ResponseEntity<Patient> findById(@PathVariable("id") int id) {
        Patient patient = patientService.findById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    //Thêm mới
    @PostMapping("/create")
    public ResponseEntity create(@Validated @RequestBody PatientDto patientDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_FOUND);
        }
        Patient patient = new Patient();
        BeanUtils.copyProperties(patientDto, patient);
        patientService.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //Chỉnh Sửa
    @PutMapping("update/{id}")
    public ResponseEntity<Patient> update(@Validated @PathVariable("id") int id, @RequestBody PatientDto patientDto, BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Patient patient = new Patient();
        BeanUtils.copyProperties(patientDto, patient);
        patientService.save(patient);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    //Xóa
    @DeleteMapping("delete/{idDelete}")
    public ResponseEntity<Patient> delete(@PathVariable("idDelete") int idDelete) {
        patientService.delete(idDelete);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Search nhiều trường,tên phải trùng với trường cần tìm bên front end
    @GetMapping("/search")
    public ResponseEntity<List<Patient>> search(@RequestParam String codePeoplePatient, String namePeoplePatient, String doctor) {
        List<Patient> patientList = patientService.searchByCodePeoplePatient(codePeoplePatient, namePeoplePatient, doctor);
        if (patientList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }
}
