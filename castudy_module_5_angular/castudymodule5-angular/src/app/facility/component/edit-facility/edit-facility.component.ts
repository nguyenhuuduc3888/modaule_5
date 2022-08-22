import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService, private router: Router) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  type = '';
  facilityTypeList: FacilityType [];

  getType(type) {
    this.type = type;
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern(new RegExp(/^(([^\u0000-\u007F]+)|[a-z]|\s)+$/gi))]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required, Validators.min(1)]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.min(1)]),
        facilityFree: new FormControl(facility.facilityFree, [Validators.required]),
        img: new FormControl(facility.img, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityTypeService.getAll().subscribe(type => {
      this.facilityTypeList = type;
    });
  }

  update(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.update(id, facility).subscribe(next => {
      this.router.navigate(['/facility/list']);
    });
  }

}
