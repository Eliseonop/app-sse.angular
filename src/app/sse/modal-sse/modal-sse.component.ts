import { UserModel } from './../models/userModel';
import { Component, Inject, OnInit } from '@angular/core';
import { SseService } from '../sse.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-sse',
  templateUrl: './modal-sse.component.html',
  styleUrls: ['./modal-sse.component.scss'],
})
export class ModalSseComponent implements OnInit {
  form = this.fb.group({
    id: [Date.now().toString()],
    data: [null as any],
    empresa: [null as any],
  });

  users: UserModel[] = [];

  constructor(
    private sseService: SseService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sseService.users.subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const { data, empresa } = this.form.value;

    this.sseService.createTask(data, empresa);
    this.matDialog.closeAll();
  }

  onCancel() {
    this.matDialog.closeAll();
  }
}
