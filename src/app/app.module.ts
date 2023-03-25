import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { HttpClientModule } from '@angular/common/http';
import { SseComponent } from './sse/sse/sse.component';
import { AppRoutingModule } from './app-routing.module';
import { EventStreamComponent } from './event-stream/event-stream.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SseModule } from './sse/sse.module';

@NgModule({
  declarations: [
    AppComponent,
    EventStreamComponent,
    NotificationComponent,
    ChatViewerComponent,
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireMessagingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
