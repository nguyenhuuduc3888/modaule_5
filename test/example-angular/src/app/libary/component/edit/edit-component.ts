import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Patient} from '../../service/patient';
import {PeoplePatient} from '../../service/peoplePatient';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PatientPeople} from '../../model/patientPeople';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-component.html',
  styleUrls: ['./edit-component.css']
})
export class EditComponent implements OnInit {

    patientForm: FormGroup;
  id: number;
  patientPeopleList: PatientPeople[];

  constructor(private activatedRoute: ActivatedRoute, private benhAnService: Patient,
              private peoplePatientService: PeoplePatient, private router: Router, private toastrService: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBenhAn(this.id);
    });
  }

  private getBenhAn(id: number) {
    return this.benhAnService.findById(id).subscribe(benhAn => {
      this.patientForm = new FormGroup({
        id: new FormControl(benhAn.id),
        codePatient: new FormControl(benhAn.codePatient),
        codePeoplePatient: new FormControl(benhAn.codePeoplePatient),
        // tslint:disable-next-line:max-line-length
        namePeoplePatient: new FormControl(benhAn.namePeoplePatient, [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
          '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
        dayStart: new FormControl(benhAn.dayStart, [Validators.required]),
        dayEnd: new FormControl(benhAn.dayEnd, [Validators.required]),
        reason: new FormControl(benhAn.reason, [Validators.required]),
        method: new FormControl(benhAn.method, Validators.required),
        doctor: new FormControl(benhAn.doctor, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.getAllBenhNhan();
  }

  getAllBenhNhan() {
    return this.peoplePatientService.getAllPeoplePatient().subscribe(benhNhan => {
      this.patientPeopleList = benhNhan;
    });
  }

  compare(value, option): boolean {
    return value.idBenhNhan === option.idBenhNhan;
  }

  update(id: number) {
    const patient = this.patientForm.value;
    this.benhAnService.update(id, patient).subscribe(next => {
      console.log(patient);
      this.toastrService.success('Cập nhật  thành công', ' ', {
        timeOut: 1500, progressBar: false
      });
      this.router.navigate(['/patient/list']);
    });
  }
}
