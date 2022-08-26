import {Component, OnInit} from '@angular/core';
import {Patient} from '../../service/patient';
import {PatientPeople} from '../../model/patientPeople';
import {ToastrService} from 'ngx-toastr';
import {Patient} from '../../model/patient';
import {PeoplePatient} from '../../service/peoplePatient';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.css']
})
export class ListComponent implements OnInit {
  // // Tạo form để chuyền dữ liệu qua funtion search
  // libraryForm: FormGroup = new FormGroup(
  //   {
  //     name: new FormControl(''),
  //     author: new FormControl(''),
  //     category: new FormGroup({
  //       id: new FormControl(''),
  //     })
  //   }
  // );

  patientList: Patient[] = [];
  patientPeopleList: PatientPeople[] = [];
  page = 1;
  idDelete: number;
  nameDelete: string;


  constructor(private benhAnService: Patient, private toastrService: ToastrService, private benhNhanService: PeoplePatient) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhAnService.getAll().subscribe(patientList => {
      this.patientList = patientList;
    });
    this.benhNhanService.getAllBenhNhan().subscribe(peoplePatient => {
      this.patientPeopleList = peoplePatient;
    });
  }

  openDelete(patient: Patient) {
    this.idDelete = patient.id;
    this.nameDelete = patient.namePeoplePatient;
  }

  delete(idDelete: number) {
    this.benhAnService.delete(idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
    });
  }

  // searchForm() {
  //   console.log(this.libraryForm.value.category.id);
  //   console.log(this.libraryForm.value.name);
  //   console.log(this.libraryForm.value.author);
  //   // tslint:disable-next-line:max-line-length
  //   return this.libraryService.search(this.libraryForm.value.name, this.libraryForm.value.category.id,
  //     this.libraryForm.value.author).subscribe(listSeach => {
  //     console.log(listSeach);
  //     this.listLibrary = listSeach;
  //   });
  // }
}
