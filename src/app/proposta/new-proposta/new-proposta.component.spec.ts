import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropostaComponent } from './new-proposta.component';

describe('NewPropostaComponent', () => {
  let component: NewPropostaComponent;
  let fixture: ComponentFixture<NewPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
