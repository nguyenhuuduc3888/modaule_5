package all.controller;

import all.model.Patient;
import all.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/patient")
public class PatientRestController {
    @Autowired
    IPatientService patientService;

    //Hiển thị
    @GetMapping("/list")
    public ResponseEntity<List<Patient>> getList() {
        List<Patient> patientList = patientService.getAll();
        if (patientList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }

    //Tìm theo id
    @GetMapping("find/{id}")
    public ResponseEntity<Patient> findById(@PathVariable("id") int id) {
        Patient patient = patientService.findById(id);
        if (patient == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    //Thêm mới
    @PostMapping("/create")
    public ResponseEntity<Patient> create(@RequestBody Patient patient) {
        patientService.save(patient);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Chỉnh Sửa
    @PutMapping("update/{id}")
    public ResponseEntity<Patient> update(@PathVariable("id") int id, @RequestBody Patient patient) {
        if (patient == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        patientService.save(patient);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    //Xóa
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Patient> delete(@PathVariable("id") int id) {
        Patient patient = patientService.findById(id);
        if (patient == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        patientService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Tìm Kiếm
    @GetMapping("search/{name}")
    public ResponseEntity<List<Patient>> search(@PathVariable("name") String name) {
        List<Patient> patientList = patientService.findByName(name);
        List<Patient> patientLists = patientService.getAll();
        if (patientList == null) {
            return new ResponseEntity<>(patientLists, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }
}
