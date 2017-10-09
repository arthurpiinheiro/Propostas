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
  columns = [
    {name: 'Empresa'},
    {name: 'Status'},
    {name: 'Responsável'},
    {name: 'Vigência'},
    {name: 'Validade'},
    {name: 'Prazo de pagamento'},
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
    // this.rows = [
    //   {
    //     empresa: 'Company',
    //     status: 'Teste',
    //     responsavel: 'Teste',
    //     vigencia: '',
    //     validade: '',
    //     prazoPagamento: ''
    //   },
    //   {
    //     empresa: 'Company',
    //     status: 'Teste',
    //     responsavel: 'Teste',
    //     vigencia: '',
    //     validade: '',
    //     prazoPagamento: ''
    //   },
    //   {
    //     empresa: 'Company',
    //     status: 'Teste',
    //     responsavel: 'Teste',
    //     vigencia: '',
    //     validade: '',
    //     prazoPagamento: ''
    //   }
    // ];
  }

  updateFilter(event) {
    // const val = event.target.value.toLowerCase();

    // filter our data
    // const temp = this.temp.filter(function (d) {
    //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // update the rows
    this.rows = [];
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
