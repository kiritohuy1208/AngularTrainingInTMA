import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messsage',
  templateUrl: './messsage.component.html',
  styleUrls: ['./messsage.component.css']
})
export class MesssageComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

}
