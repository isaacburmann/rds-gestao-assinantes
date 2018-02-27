import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaListEmpresaGerenciaComponent } from './assinatura-list-empresa-gerencia.component';

describe('AssinaturaListEmpresaGerenciaComponent', () => {
  let component: AssinaturaListEmpresaGerenciaComponent;
  let fixture: ComponentFixture<AssinaturaListEmpresaGerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinaturaListEmpresaGerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaListEmpresaGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
