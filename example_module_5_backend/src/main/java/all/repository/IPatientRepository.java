package all.repository;

import all.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IPatientRepository extends JpaRepository<Patient, Integer> {
    //hien thi tat ca
    @Query(value = "select * from patient", nativeQuery = true)
    List<Patient> getAll();

    //them moi
    @Transactional
    @Modifying
    @Query(value = "insert into patient (code_patient,code_people_id,name_people_patient,day_start,day_end,reason,method,doctor) " +
            "values (:codePatient,:codePeoplePatient,:namePeoplePatient,:dayStart,:dayEnd,:reason,:method,:doctor", nativeQuery = true)
    void save(@Param("codePatient") String codePatient, @Param("codePeoplePatient") String codePeoplePatient,
              @Param("namePeoplePatient") String namePeoplePatient, @Param("dayStart") String dayStart, @Param("dayEnd") String dayEnd,
              @Param("reason") String reason, @Param("method") String method, @Param("doctor") String doctor);

    //cap nhat
    @Transactional
    @Modifying
    @Query(value = "update patient set code_patient=:codePatient,code_people_id=:codePeoplePatient,name_people_patient=:namePeoplePatient," +
            "day_start=:dayStart,day_end=:dayEnd,reason=:reason,method=:method,doctor=:doctor where id=:id", nativeQuery = true)
    void update(@Param("codePatient") String codePatient, @Param("codePeoplePatient") String codePeoplePatient,
                @Param("namePeoplePatient") String namePeoplePatient, @Param("dayStart") String dayStart, @Param("dayEnd") String dayEnd,
                @Param("reason") String reason, @Param("method") String method, @Param("doctor") String doctor, @Param("id") int id);

    //tim theo id
    @Query(value = "select * from patient  where id=:id", nativeQuery = true)
    Patient findById(@Param("id") int id);

    //tim kiem theo ten
    @Query(value = "select * from patient where name_people_patient like :name", nativeQuery = true)
    List<Patient> findByName(@Param("name") String name);

    //xoa
    @Transactional
    @Modifying
    @Query(value = "delete from patient where id=:id", nativeQuery = true)
    void delete(@Param("id") int id);
}
