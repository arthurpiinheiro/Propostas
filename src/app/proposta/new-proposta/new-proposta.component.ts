import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-new-proposta',
  templateUrl: './new-proposta.component.html',
  styleUrls: ['./new-proposta.component.scss']
})
export class NewPropostaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Nova Proposta');
  }

}
