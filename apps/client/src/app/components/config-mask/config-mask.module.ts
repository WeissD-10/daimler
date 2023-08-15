import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigMaskComponent } from './config-mask.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [ConfigMaskComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfigMaskModule { }
