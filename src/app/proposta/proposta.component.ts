import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.scss']
})
export class PropostaComponent implements OnInit {

  rows = [];
  temp = [];
  limit = 10;
  offset = 0;
  columns = [
    {name: 'empresa'},
    {name: 'status'},
    {name: 'responsavel'},
    {name: 'vigencia'},
    {name: 'validade'},
    {name: 'prazoPagamento'},
    {name: 'actions'}
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  formFilterProposta: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {

    this.fetch((data) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });

  }

  ngOnInit() {
    this.titleService.setTitle('Propostas');
    this.create();
  }


  create() {
    this.formFilterProposta = this.formBuilder.group({
      'empresa': [null]
    });
  }

  fetch(cb) {
    this.rows = [
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      },
      {
        empresa: 'teste empresa',
        status: 'teste status',
        responsavel: 'teste responsavel',
        vigencia: 'teste vigencia',
        validade: 'teste validade',
        prazoPagamento: 'teste prazoPagamento',
        actions: ''
      }
    ];
  }

  setPage() {
  }

  updateFilter(event) {
    this.rows = [];
  }
}
