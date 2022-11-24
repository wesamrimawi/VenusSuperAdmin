import { SmartTableModule } from './../../../../core/smart-table/smart-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesFormComponent } from './notes-form/notes-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [NotesComponent, NotesFormComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    SmartTableModule

  ]
})
export class NotesModule { }
