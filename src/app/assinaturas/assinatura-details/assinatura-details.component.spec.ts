import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaDetailsComponent } from './assinatura-details.component';

describe('AssinaturaDetailsComponent', () => {
  let component: AssinaturaDetailsComponent;
  let fixture: ComponentFixture<AssinaturaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssinaturaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
