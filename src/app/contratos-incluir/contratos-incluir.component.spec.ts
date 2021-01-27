import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosIncluirComponent } from './contratos-incluir.component';

describe('ContratosIncluirComponent', () => {
  let component: ContratosIncluirComponent;
  let fixture: ComponentFixture<ContratosIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
