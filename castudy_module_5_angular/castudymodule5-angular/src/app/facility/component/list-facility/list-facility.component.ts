import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [
    {
      id: 1,
      facilityType: {id: 1, name: 'Villa'},
      name: 'Nguyễn Hữu Đức',
      area: 100,
      cost: 15000000,
      maxPeople: 8,
      standardRoom: 'Phòng Đơn,',
      descriptionOtherConvenience: 'Phòng rộng rãi,có điều hòa',
      numberOfFloors: 3,
      poolArea: 30,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 2,
      facilityType: {id: 2, name: 'House'},
      name: 'Nguyễn Hữu Phước',
      area: 45,
      cost: 8000000,
      maxPeople: 5,
      standardRoom: 'Phòng Đơn,',
      descriptionOtherConvenience: 'Phòng ngủ đôi',
      numberOfFloors: 3,
      poolArea: 30,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 3,
      facilityType: {id: 3, name: 'Room'},
      name: 'Nguyễn Đoàn Hậu',
      area: 35,
      cost: 5000000,
      maxPeople: 5,
      standardRoom: 'Phòng Đơn,',
      descriptionOtherConvenience: 'Phòng ngủ đơn,có view biển',
      numberOfFloors: 3,
      poolArea: 30,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 4,
      facilityType: {id: 1, name: 'Villa'},
      name: 'Nguyễn Trung Biên',
      area: 30,
      cost: 3500000,
      maxPeople: 5,
      standardRoom: 'Phòng Đôi,',
      descriptionOtherConvenience: 'Phòng rộng rãi,có điều hòa',
      numberOfFloors: 3,
      poolArea: 30,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 5,
      facilityType: {id: 1, name: 'Villa'},
      name: 'Nguyễn Hữu Đức',
      area: 30,
      cost: 6000000,
      maxPeople: 5,
      standardRoom: 'Phòng Đơn,',
      descriptionOtherConvenience: 'Phòng rộng rãi,có điều hòa',
      numberOfFloors: 3,
      poolArea: 30,
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
