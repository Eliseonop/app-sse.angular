import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.scss'],
})
export class ChatViewerComponent implements OnInit {
  messages: MessageEvent[] = [];
  message = ''
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.start().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
  }
}
