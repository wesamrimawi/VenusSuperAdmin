import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// primng
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ChipsModule} from 'primeng/chips';
import { AccordionModule } from 'primeng/accordion';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { ChartModule } from 'primeng/chart';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  declarations: [

    AddressInfoComponent
  ],
  imports: [
    OverlayPanelModule,
    CommonModule,
    TranslateModule,
    TreeSelectModule,
    TabViewModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    SelectButtonModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    ToastModule,
    MultiSelectModule,
    ContextMenuModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    ConfirmPopupModule,
    FormsModule,
    CheckboxModule,
    ToolbarModule,
    ReactiveFormsModule,
    RadioButtonModule,
    InputSwitchModule,
    AutoCompleteModule,
    CalendarModule,
    TabViewModule,
    TabMenuModule,
    MenuModule,
    DividerModule,
    ColorPickerModule,
    ChipsModule,
    AccordionModule,
    ChartModule
  ],
  exports: [
    OverlayPanelModule,
    InputSwitchModule,
    TranslateModule,
    ToastModule,
    TableModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    TreeSelectModule,
    SelectButtonModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    MultiSelectModule,
    ContextMenuModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    ConfirmPopupModule,
    FormsModule,
    CheckboxModule,
    ToolbarModule,
    ReactiveFormsModule,
    FileUpload,
    RadioButtonModule,
    AutoCompleteModule,
    CalendarModule,
    TabViewModule,
    TabMenuModule,
    MenuModule,
    DividerModule,
    ChipsModule,
    ColorPickerModule,
    AccordionModule,
    ChartModule,
    AddressInfoComponent
  ],
  providers: [
    DialogService
  ]
})
export class SharedModule { }
