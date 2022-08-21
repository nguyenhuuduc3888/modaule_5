import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  facilityType?: FacilityType;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  numberOfFloors?: number;
  poolArea?: number;
  facilityFree?: string;
  img?: string;
}
