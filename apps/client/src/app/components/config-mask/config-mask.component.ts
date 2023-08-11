import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { debounceTime, first ,Observable } from 'rxjs';
import { IBaseVehicle, IColors, IExtra, IMotor, IVehicle } from '../../interfaces';
import { VehicleService } from '../../services/vehicles/vehicles.service';
import { FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-config-mask',
  templateUrl: './config-mask.component.html',
  styleUrls: ['./config-mask.component.scss']
})
export class ConfigMaskComponent{

  constructor() { }

}
