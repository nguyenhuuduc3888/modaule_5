package all.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class PeoplePatient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codePeoplePatient;
    @JsonBackReference
    @OneToMany(mappedBy = "codePeoplePatient")
    List<Patient> patientList;

    public PeoplePatient() {
    }

    public PeoplePatient(int id, String codePeoplePatient, List<Patient> patientList) {
        this.id = id;
        this.codePeoplePatient = codePeoplePatient;
        this.patientList = patientList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodePeoplePatient() {
        return codePeoplePatient;
    }

    public void setCodePeoplePatient(String codePeoplePatient) {
        this.codePeoplePatient = codePeoplePatient;
    }

    public List<Patient> getPatientList() {
        return patientList;
    }

    public void setPatientList(List<Patient> patientList) {
        this.patientList = patientList;
    }
}
