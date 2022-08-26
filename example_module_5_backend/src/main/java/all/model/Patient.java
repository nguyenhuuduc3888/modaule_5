package all.model;

import javax.persistence.*;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codePatient;
    @ManyToOne
    @JoinColumn(name = "codePeople_id", referencedColumnName = "id")
    private PeoplePatient codePeoplePatient;
    private String namePeoplePatient;
    private String dayStart;
    private String dayEnd;
    private String reason;
    private String method;
    private String doctor;


    public Patient() {
    }

    public Patient(int id, String codePatient, String namePeoplePatient, String dayStart, String dayEnd, String reason, String method, String doctor, PeoplePatient codePeoplePatient) {
        this.id = id;
        this.codePatient = codePatient;
        this.namePeoplePatient = namePeoplePatient;
        this.dayStart = dayStart;
        this.dayEnd = dayEnd;
        this.reason = reason;
        this.method = method;
        this.doctor = doctor;
        this.codePeoplePatient = codePeoplePatient;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodePatient() {
        return codePatient;
    }

    public void setCodePatient(String codePatient) {
        this.codePatient = codePatient;
    }

    public String getNamePeoplePatient() {
        return namePeoplePatient;
    }

    public void setNamePeoplePatient(String namePeoplePatient) {
        this.namePeoplePatient = namePeoplePatient;
    }

    public String getDayStart() {
        return dayStart;
    }

    public void setDayStart(String dayStart) {
        this.dayStart = dayStart;
    }

    public String getDayEnd() {
        return dayEnd;
    }

    public void setDayEnd(String dayEnd) {
        this.dayEnd = dayEnd;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public PeoplePatient getCodePeoplePatient() {
        return codePeoplePatient;
    }

    public void setCodePeoplePatient(PeoplePatient codePeoplePatient) {
        this.codePeoplePatient = codePeoplePatient;
    }
}
