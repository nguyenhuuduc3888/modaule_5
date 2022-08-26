package all.controller;

import all.model.PeoplePatient;
import all.service.IPeoplePatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/peoplePatient")
public class PeoplePatientRestController {
    @Autowired
    IPeoplePatientService peoplePatientService;

    @GetMapping("")
    public ResponseEntity<List<PeoplePatient>> getAll() {
        List<PeoplePatient> peoplePatientList = peoplePatientService.getALL();
        if (peoplePatientList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(peoplePatientList, HttpStatus.OK);
    }
}
