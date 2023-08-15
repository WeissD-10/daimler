import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config/config.service';
import { VehicleService } from '../../services/vehicles/vehicles.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IBaseVehicle, IExtra } from '../../interfaces';


@Component({
  selector: 'app-config-mask',
  templateUrl: './config-mask.component.html',
  styleUrls: ['./config-mask.component.scss']
})
export class ConfigMaskComponent implements OnInit {

  vehicles$: Observable<IBaseVehicle[]> = new Observable<IBaseVehicle[]>()
  selectedVehicle: IBaseVehicle;
  extras$: Observable<IExtra[]> = new Observable<IExtra[]>
  destroy$ = new Subject<void>()
  types = new Array<string>();
  selectedExtra: IExtra;

  // form: FormGroup = this.fb.group({
  //   class: ['', Validators.required],
  //   power: ['', Validators.required],
  //   color: ['', Validators.required],
  //   metallicColor: ['', Validators.required],
  //   extras: this.fb.array([]),
  //   type: ['', Validators.required],
  //   //pricing should come or at least be validated by BE I will deviate from this BP
  //   price: ['', Validators.required]
  // })

  // Getter for extras formarray
  // get extras() {
  //   return this.form.get('extras') as FormArray;
  // }

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService,
    private vehicleService: VehicleService
    ) {}

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles()
    this.extras$ = this.configService.getExtras()
  }

  selectExtra(extra: IExtra) {
    this.selectedExtra = extra;
  }

  // addExtra() {
  //   this.extras.controls.push(this.fb.control(this.selectedExtra.name));
  // }
}
