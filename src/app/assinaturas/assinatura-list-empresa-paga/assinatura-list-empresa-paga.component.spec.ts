import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaListEmpresaPagaComponent } from './assinatura-list-empresa-paga.component';

describe('AssinaturaListEmpresaPagaComponent', () => {
  let component: AssinaturaListEmpresaPagaComponent;
  let fixture: ComponentFixture<AssinaturaListEmpresaPagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinaturaListEmpresaPagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaListEmpresaPagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
