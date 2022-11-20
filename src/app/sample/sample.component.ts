import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { LocalstorageService } from '../services/localstorage/localstorage.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  carCompanies: Array<commonDropdownVM> = new Array<commonDropdownVM>();
  selectedCarCompany: number;
  carModels: Array<commonDropdownWithParentIdVM> = carModels;
  filteredCarModel: Array<commonDropdownWithParentIdVM> = new Array<commonDropdownWithParentIdVM>();
  selectedCarModel: number;
  categories: Array<commonDropdownVM> = categories;
  selectedCategory: number;
  spearPartsDetails: Array<ISpearPartsVM> = [];
  tabSetItems: Array<tabSetVM> = new Array<tabSetVM>();
  tabSetEnum = TabSetEnum;
  activeTab: tabSetVM = new tabSetVM();

  appoinmentForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    contactNumber: new FormControl(null, Validators.required),
    carCompany: new FormControl(null, Validators.required),
    carModel: new FormControl(null, Validators.required),
    appoinmentDate: new FormControl(null, Validators.required),
    appoinmentTime: new FormControl(new Date, Validators.required),
  });
  get appoinmentFormControls() { return this.appoinmentForm?.controls };

  appoinmentData: bookingVM;

  constructor(private router: Router, private apiService: ApiService, private toastService: ToastService, private localStorageService: LocalstorageService) {
    this.appoinmentForm.valueChanges.subscribe(_change => {
      this.appoinmentData = {
        firstName: _change.firstName,
        lastName: _change.lastName,
        email: _change.email,
        contactNumber: _change.contactNumber,
        carCompany: _change.carCompany,
        carModel: _change.carModel,
        appoinmentDate: _change.appoinmentDate,
        appoinmentTime: _change.appoinmentTime
      };
    });
  }

  ngOnInit(): void {
    this.getCarAndModelList();
    this.setTabData();
    // this.getUserDetails();
  }

  getCarAndModelList() {
    this.apiService.GETAPICallAsync<Array<carCompanyResVM>>("http://52.66.113.164:3000/api/car/car_list").then(res => {
      if (res.length > 0) {
        this.carCompanies = res.map((p) => ({
          label: p.name,
          value: p.car_id
        }))
      } else {
        this.carCompanies = carCompanies;
      }
    })
  }
  onChangeCar() {
    this.filteredCarModel = new Array<commonDropdownWithParentIdVM>();
    let reqObj = {
      car_id: this.activeTab.seqNum == this.tabSetEnum.Booking ? this.appoinmentForm?.controls['carCompany']?.value:  this.selectedCarCompany
    }
    this.apiService.POSTAPICallAsync<Array<carModelsResVM>>("http://52.66.113.164:3000/api/car/model_list", reqObj).then(res => {
      if (res.length > 0) {
        this.filteredCarModel = res.map((p) => ({
          label: p.name,
          value: p.model_id,
          parentId: p.car_id
        }))
        this.appoinmentForm.controls["carModel"].reset();
      } else {
        this.filteredCarModel = this.carModels.filter(x => x.parentId === (this.activeTab.seqNum == this.tabSetEnum.Booking ? this.selectedCarCompany : this.appoinmentForm?.controls['carCompany']?.value))
      }
    })
  }
  findParts() {
    this.router.navigate(['products'], {
      queryParams: {
        params: JSON.stringify({
          carCompany: this.carCompanies.find(x => x.value === this.selectedCarCompany),
          carModel: this.filteredCarModel.find(x => x.value === this.selectedCarModel),
          category: this.categories.find(x => x.value === this.selectedCategory)
        })
      }
    });
  }
  setTabData() {
    this.tabSetItems = [
      {
        label: 'BOOKING',
        seqNum: this.tabSetEnum.Booking,
        command: (event: any) => {
          this.setActiveTabItem(event);
        }
      },
      {
        label: 'FIND ACCESSORIES',
        seqNum: this.tabSetEnum.Accesories,
        command: (event: any) => {
          this.setActiveTabItem(event);
        }
      }
    ];
    let activeObj = {
      item: this.tabSetItems[0]
    }
    this.setActiveTabItem(activeObj);
  }
  setActiveTabItem(event: any) {
    this.activeTab = event.item;
  }
  isFieldInvalid(fieldType: string): boolean {
    return this.appoinmentFormControls[fieldType]?.invalid &&
      (this.appoinmentFormControls[fieldType]?.touched || this.appoinmentFormControls[fieldType]?.dirty);
  }
  isVisibleErrorText(fieldName: string) {
    return (this.appoinmentFormControls[fieldName].dirty || this.appoinmentFormControls[fieldName].invalid) && this.appoinmentFormControls[fieldName].touched;
  }
  showValidationErrors() {
    if (this.appoinmentFormControls['firstName'].invalid)
      this.appoinmentFormControls['firstName'].markAsTouched();
    if (this.appoinmentFormControls['lastName'].invalid)
      this.appoinmentFormControls['lastName'].markAsTouched();
    if (this.appoinmentFormControls['email'].invalid)
      this.appoinmentFormControls['email'].markAsTouched();
    if (this.appoinmentFormControls['contactNumber'].invalid)
      this.appoinmentFormControls['contactNumber'].markAsTouched();
    if (this.appoinmentFormControls['carCompany'].invalid)
      this.appoinmentFormControls['carCompany'].markAsTouched();
    if (this.appoinmentFormControls['carModel'].invalid)
      this.appoinmentFormControls['carModel'].markAsTouched();
    if (this.appoinmentFormControls['appoinmentDate'].invalid)
      this.appoinmentFormControls['appoinmentDate'].markAsTouched();
    if (this.appoinmentFormControls['appoinmentTime'].invalid)
      this.appoinmentFormControls['appoinmentTime'].markAsTouched();
  }
  onFormSubmit() {
    if (this.appoinmentForm.invalid) {
      this.showValidationErrors()
    } else {
      //api call to submit data
      let reqObj = {
        car_model: (this.appoinmentForm?.controls['carModel']?.value).toString(),
        car_id: (this.appoinmentForm?.controls['carCompany']?.value).toString(),
        date: new Date(this.appoinmentForm?.controls['appoinmentDate']?.value),
        time: new Date(this.appoinmentForm?.controls['appoinmentTime']?.value)
      }
    }
    if (this.localStorageService.getIem("token") === undefined || this.localStorageService.getIem("token") === null) {
      this.toastService.showErrorToaster("Home", this.activeTab.seqNum == this.tabSetEnum.Booking ? "Register to book appointment" : "Register/Login to view available spares");
      this.router.navigate(["/auth/register"]);
    }
    else { 
      if (this.appoinmentForm.invalid) {
        this.showValidationErrors()
      } else {
        //api call to submit data
        let reqObj = {
          car_model: this.appoinmentForm?.controls['carModel']?.value,
          car_id: this.appoinmentForm?.controls['carCompany']?.value,
          date: new Date(this.appoinmentForm?.controls['appoinmentDate']?.value),
          time: new Date(this.appoinmentForm?.controls['appoinmentTime']?.value)
        }
        this.apiService.POSTAPICallAsync<boolean>("http://52.66.113.164:3000/app/appointment/add", reqObj).then(res => {
          if (res) {
            this.toastService.showSuccessToaster("Appoinment", "Your Appointment has been successfully booked.");
          } else {
            this.toastService.showErrorToaster("Appoinment", "Somethind went wrong");
          }
        }).catch(err => { 
          this.toastService.showErrorToaster("",JSON.stringify(err));
        })
      }
    }
  }
}
export interface carCompanyResVM { 
  car_id: number;
  name: string;
}
export interface carModelsResVM { 
  car_id: number;
  model_id: number;
  name: string;
}
export interface bookingVM {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;
  carCompany: number;
  carModel: number;
  appoinmentDate: Date;
  appoinmentTime: Date;
}
export class tabSetVM {
  label: string = "";
  seqNum: number = 0;
  command: any;
}
export enum TabSetEnum {
  Accesories = 2,
  Booking = 1
}
export class commonDropdownVM {
  label: string = "";
  value: number | string = 0
}
export class commonDropdownWithParentIdVM extends commonDropdownVM {
  parentId: number | string = 0
}
export interface ISpearPartsVM {
  partId: number;
  name: string;
  partNumber: number;
  origin: string;
  class: string;
  company: string;
  discountedRate: number;
  mrp: number;
  discountPercentage: number;
}
const carCompanies: Array<commonDropdownVM> = [
  { label: "Audi", value: 0 },
  { label: "BMW", value: 1 },
  { label: "Mercedes", value: 2 },
  { label: "Tata", value: 3 },
  { label: "Suzuki", value: 4 },
  { label: "Lexus", value: 5 },
  { label: "Maclarne", value: 6 },
];
const categories: Array<commonDropdownVM> = [
  { label: "Air Conditioning", value: 0 },
  { label: "Brake", value: 1 },
  { label: "Shock Absorber and Strut", value: 2 },
  { label: "Light", value: 3 },
  { label: "Belt", value: 4 },
  { label: "Catalogue Service manual", value: 5 },
  { label: "Repair Service Kit", value: 6 },
  { label: "Emblem", value: 6 },
  { label: "Glow Plug", value: 6 },
  { label: "Horn", value: 6 },
  { label: "Spark Plug", value: 6 },
  { label: "Wiper", value: 6 },
  { label: "Belts Chains and Rollers", value: 6 },
  { label: "Bearings", value: 6 },
  { label: "Body", value: 6 },
  { label: "Body Frame", value: 6 },
  { label: "Body Rubber Stop", value: 6 },
  { label: "Boot", value: 6 },
  { label: "Bumper", value: 6 },
  { label: "Panels", value: 6 },
  { label: "Windshield", value: 6 },
  { label: "Windshield Seal", value: 6 },
  { label: "Brake System", value: 6 },
  { label: "Anti Lock Braking System", value: 6 },
  { label: "Brake Disc", value: 6 },
  { label: "Brake Pads", value: 6 },
  { label: "Control Cables", value: 6 },
  { label: "Clutch System", value: 6 },
  { label: "Electric Components", value: 6 },
  { label: "Battery", value: 6 },
  { label: "Intake Air Temperature Sender Unit", value: 6 },
  { label: "Light", value: 6 },
  { label: "Spark Plug", value: 6 },
  { label: "Switch", value: 6 },
  { label: "Engine", value: 6 },
  { label: "Engine Cooling System", value: 6 },
  { label: "Exhaust System", value: 6 },
  { label: "Filters", value: 6 },
  { label: "Fuel Supply System", value: 6 },
  { label: "Gaskets and Sealing Rings", value: 6 },
  { label: "Ignition and Glowplug System", value: 6 },
  { label: "Interior and comfort", value: 6 },
  { label: "Lighting", value: 6 },
  { label: "Oils and Fluids", value: 6 },
];
const carModels: Array<commonDropdownWithParentIdVM> = [
  { label: "Audi model 1", value: 0, parentId: 0 },
  { label: "Audi model 2", value: 1, parentId: 0 },
  { label: "Audi model 3", value: 2, parentId: 0 },
  { label: "Audi model 4", value: 3, parentId: 0 },
  { label: "Audi model 5", value: 4, parentId: 0 },
  { label: "Audi model 6", value: 5, parentId: 0 },
  { label: "Audi model 7", value: 6, parentId: 0 },
  { label: "BMW model 1", value: 0, parentId: 1 },
  { label: "BMW model 2", value: 1, parentId: 1 },
  { label: "BMW model 3", value: 2, parentId: 1 },
  { label: "BMW model 4", value: 3, parentId: 1 },
  { label: "BMW model 5", value: 4, parentId: 1 },
  { label: "BMW model 6", value: 5, parentId: 1 },
  { label: "BMW model 7", value: 6, parentId: 1 },
  { label: "Mercedes model 1", value: 0, parentId: 2 },
  { label: "Mercedes model 2", value: 1, parentId: 2 },
  { label: "Mercedes model 3", value: 2, parentId: 2 },
  { label: "Mercedes model 4", value: 3, parentId: 2 },
  { label: "Mercedes model 5", value: 4, parentId: 2 },
  { label: "Mercedes model 6", value: 5, parentId: 2 },
  { label: "Mercedes model 7", value: 6, parentId: 2 },
  { label: "Tata model 1", value: 0, parentId: 3 },
  { label: "Tata model 2", value: 1, parentId: 3 },
  { label: "Tata model 3", value: 2, parentId: 3 },
  { label: "Tata model 4", value: 3, parentId: 3 },
  { label: "Tata model 5", value: 4, parentId: 3 },
  { label: "Tata model 6", value: 5, parentId: 3 },
  { label: "Tata model 7", value: 6, parentId: 3 }
];
export const spearPartsDetails = [
  {
    partId: 0,
    name: "Front AC",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 1,
    name: "  Microfilter  ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 2,
    name: " Refrigerant 134a (450g) ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 3,
    name: "  V-Ribbed Belts  ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 4,
    name: " AC CAN GAS (340 -FLORON) ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 5,
    name: " Cabin Air Filter ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
  {
    partId: 6,
    name: " Filter, interior air ",
    partNumber: 1234,
    origin: "AfterMarket",
    class: "Shock Absorber",
    company: "Garbiel",
    discountedRate: 0,
    mrp: 1230,
    discountPercentage: 12
  },
];