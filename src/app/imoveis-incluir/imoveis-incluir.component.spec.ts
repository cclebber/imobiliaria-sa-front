import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisIncluirComponent } from './imoveis-incluir.component';

describe('ImoveisIncluirComponent', () => {
  let component: ImoveisIncluirComponent;
  let fixture: ComponentFixture<ImoveisIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
