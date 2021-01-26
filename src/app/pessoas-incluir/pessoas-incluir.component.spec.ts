import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasIncluirComponent } from './pessoas-incluir.component';

describe('PessoasIncluirComponent', () => {
  let component: PessoasIncluirComponent;
  let fixture: ComponentFixture<PessoasIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
