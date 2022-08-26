import {Component, OnInit} from '@angular/core';
import {PatientPeople} from '../../model/patientPeople';
import {ToastrService} from 'ngx-toastr';
import {Patient} from '../../model/patient';
import {PeoplePatientService} from '../../service/peoplePatientService';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patientService';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.css']
})
export class ListComponent implements OnInit {
  patientForm: FormGroup = new FormGroup(
    {
      namePeoplePatient: new FormControl(''),
    }
  );

  patientList: Patient[] = [];
  patientPeopleList: PatientPeople[] = [];
  page = 1;
  nameDelete: string;
  idDelete: number;
  nameSearch: string;

  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService, private toastrService: ToastrService, private peoplePatientService: PeoplePatientService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.patientService.getAll().subscribe(patientList => {
      this.patientList = patientList;
    });
    this.peoplePatientService.getAllPeoplePatient().subscribe(peoplePatient => {
      this.patientPeopleList = peoplePatient;
    });
  }

  openDelete(patient: Patient) {
    this.nameDelete = patient.namePeoplePatient;
    this.idDelete = patient.id;
  }

  delete(idDelete: number) {
    this.patientService.delete(idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
    });
  }

  searchForm() {
    console.log(this.patientForm.value.namePeoplePatient);
    return this.patientService.search(this.nameSearch).subscribe(listSearch => {
      console.log(listSearch);
      this.patientList = listSearch;
    });
  }
}
