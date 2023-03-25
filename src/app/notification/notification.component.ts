import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NotificationsService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications = new BehaviorSubject<any>([]);
  subscription: Subscription = new Subscription();

  constructor(
    private notificationsService: NotificationsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.notificationsService.notification.subscribe((data) => {
      this.notifications.next(data);
    });

    this.subscription = this.notificationsService.connect().subscribe(
      (data) => {
        console.log('data: ', data);
        this.notifications.next(data);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  enviarNotificacion(): void {
    this.notificationsService
      .enviarNotificacion('mynewData')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.notificationsService.disconnect();
    this.subscription.unsubscribe();
  }
}
