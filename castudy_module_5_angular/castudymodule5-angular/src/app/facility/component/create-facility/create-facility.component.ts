import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl(),
    facilityType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('Phòng Đơn', [Validators.required]),
    descriptionOtherConvenience: new FormControl('Phòng Đẹp ', [Validators.required]),
    numberOfFloors: new FormControl('1', [Validators.required, Validators.min(1)]),
    poolArea: new FormControl('1', [Validators.required, Validators.min(1)]),
    facilityFree: new FormControl('Dọn Phòng', [Validators.required]),
    img: new FormControl('https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg', [Validators.required]),
  });

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService, private router: Router) {
  }

  type = '';
  facilityTypeList: FacilityType[];

  getType(type) {
    this.type = type;
  }

  ngOnInit(): void {
    this.facilityTypeList = this.facilityTypeService.getAll();
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility);
    this.facilityForm.reset();
    this.router.navigate(['/list-facility']);
  }

}
