import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { SseService } from '../sse.service';
import { MatDialog } from '@angular/material/dialog';

import { ModalSseComponent } from '../modal-sse/modal-sse.component';
import { UserModel } from '../models/userModel';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrls: ['./sse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'empresa'];
  users: UserModel[] = [
    {
      id: 1,
      name: 'Kyle',
      empresa: 1,
    },
    {
      id: 2,
      name: 'Jhon',
      empresa: 2,
    },
    {
      id: 3,
      name: 'Dos',
      empresa: 2,
    },
  ];
  data: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>([]);

  userForm = new FormControl<any>({
    id: 1,
    name: 'Kyle',
    empresa: 1,
  });

  events: MessageEvent[] = [];

  constructor(
    private sseService: SseService,
    private _matDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userForm.valueChanges.subscribe((data) => {
      console.log('data', data);
      const user = new UserModel(data);

      const { id, empresa } = user;

      this.sseService.conect(empresa, id).subscribe((event) => {
        console.log('event', event);
        const data = event?.data;
      });
    });
  }

  openDialog() {
    const dialogRef = this._matDialog.open(ModalSseComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
