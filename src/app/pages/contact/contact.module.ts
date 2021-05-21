import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { MaterialDesignModule } from 'src/app/shared/modules/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
