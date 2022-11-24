import { EditVariantFormComponent } from './edit-variant-form/edit-variant-form.component';
import { VariantFormComponent } from './variant-form/variant-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { SmartTableModule } from '../../../core/smart-table/smart-table.module';
import { ItemProfileComponent } from './item-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProfileRoutingModule } from './item-profile-routing.module';
import { RawMaterialFormComponent } from './raw-material-form/raw-material-form.component';


@NgModule({
  declarations: [
    ItemProfileComponent,
    VariantFormComponent,
    RawMaterialFormComponent,
    EditVariantFormComponent
  ],
  imports: [
    CommonModule,
    ItemProfileRoutingModule,
    SmartTableModule,
    SharedModule
  ]
})
export class ItemProfileModule { }
