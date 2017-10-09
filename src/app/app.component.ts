import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './login/auth.service';
import {Subject} from 'rxjs/Subject';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {

  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoggin: boolean;
  companys = [
    {
      'codigo': '1',
      'nome': 'Mex Benefícios',
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
  currentTitle = 'Dashboard';
  formApp: FormGroup;
  config = {
    labelField: 'nome',
    valueField: 'codigo',
    create: false,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down',
    maxItems: 1,
    searchField: ['nome'],
    optionGroups: null,
    render: {
      'item': (data) => {
        return `<div>${data.nome}</div>`;
      },
      'option': (data) => {
        return `<div>${data.nome}</div>`;
      }
    }
  };
  idEmpresa: number;
  idProduto: number;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private route: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.showMenu();
    this.createForm();
    this.route.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .takeUntil(this.destroy$)
      .subscribe((event) => {
        if (event.children) {
          this.currentTitle = event.children[0].routeConfig.data.title;
        }
      });
    this.idEmpresa = this.formApp.get('empresa').value;
    this.idProduto = this.formApp.get('produto').value;
  }

  createForm() {
    this.formApp = this.formBuilder.group({
      'produto': [null],
      'empresa': [null]
    });
    this.formApp.get('produto').setValue('1');
    this.formApp.get('empresa').setValue('1');
  }

  ngOnChanges() {
  }

  showMenu() {
    this.authService.showMenu.takeUntil(this.destroy$).subscribe(res => this.isLoggin = res);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
