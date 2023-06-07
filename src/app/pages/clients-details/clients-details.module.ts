import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SmartTableModule } from "./../../core/smart-table/smart-table.module";
import { ClientsDetailsRoutingModule } from "./clients-details-routing.module";
import { ClientsDetailsComponent } from "./clients-details.component";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";
import { SelectButtonModule } from "primeng/selectbutton";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [ClientsDetailsComponent],
  imports: [
    CommonModule,
    ClientsDetailsRoutingModule,
    SmartTableModule,
    OverlayPanelModule,
    ToolbarModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    SelectButtonModule,
    InputTextModule
  ],
})
export class ClientsDetailsModule {}
