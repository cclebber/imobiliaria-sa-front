import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFormListComponent } from './pessoa-form-list.component';

describe('PessoaFormListComponent', () => {
  let component: PessoaFormListComponent;
  let fixture: ComponentFixture<PessoaFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
