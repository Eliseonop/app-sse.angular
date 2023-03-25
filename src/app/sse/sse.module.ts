import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SseComponent } from './sse/sse.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModalSseComponent } from './modal-sse/modal-sse.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
@NgModule({
  declarations: [SseComponent, ModalSseComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [SseComponent],
})
export class SseModule {}
