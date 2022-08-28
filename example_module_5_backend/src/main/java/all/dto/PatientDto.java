package all.dto;

import all.model.PeoplePatient;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class PatientDto implements Validator {
    private int id;
    @NotBlank(message = "Không được để trống")
    private String codePatient;
    @NotNull(message = "Không được để trống")
    private PeoplePatient codePeoplePatient;
    @NotBlank(message = "Không được để trống")
    private String namePeoplePatient;
    @NotBlank(message = "Không được để trống")
    private String dayStart;
    @NotBlank(message = "Không được để trống")
    private String dayEnd;
    @NotBlank(message = "Không được để trống")
    private String reason;
    @NotBlank(message = "Không được để trống")
    private String method;
    @NotBlank(message = "Không được để trống")
    private String doctor;

    public PatientDto() {
    }

    public PatientDto(int id, String codePatient, PeoplePatient codePeoplePatient, String namePeoplePatient, String dayStart, String dayEnd, String reason, String method, String doctor) {
        this.id = id;
        this.codePatient = codePatient;
        this.codePeoplePatient = codePeoplePatient;
        this.namePeoplePatient = namePeoplePatient;
        this.dayStart = dayStart;
        this.dayEnd = dayEnd;
        this.reason = reason;
        this.method = method;
        this.doctor = doctor;
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

    public PeoplePatient getCodePeoplePatient() {
        return codePeoplePatient;
    }

    public void setCodePeoplePatient(PeoplePatient codePeoplePatient) {
        this.codePeoplePatient = codePeoplePatient;
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
