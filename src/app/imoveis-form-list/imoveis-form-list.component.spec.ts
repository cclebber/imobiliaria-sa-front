import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisFormListComponent } from './imoveis-form-list.component';

describe('ImoveisFormListComponent', () => {
  let component: ImoveisFormListComponent;
  let fixture: ComponentFixture<ImoveisFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
