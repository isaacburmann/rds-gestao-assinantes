import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaListComponent } from './assinatura-list.component';

describe('AssinaturaListComponent', () => {
  let component: AssinaturaListComponent;
  let fixture: ComponentFixture<AssinaturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinaturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
