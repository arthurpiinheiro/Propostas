import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggin: boolean;
  selectedCompany;
  selectedProduct;
  companys = [
    {
      'codigo': '1',
      'nome': 'Mex Beneficios',
      'icon': 'mex-beneficios'
    }
  ];
  products = [
    {
      'codigo': '1',
      'nome': 'Vale transporte',
      'icon': 'vale-transporte'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
