import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglogBoxComponent } from './diaglog-box.component';

describe('DiaglogBoxComponent', () => {
  let component: DiaglogBoxComponent;
  let fixture: ComponentFixture<DiaglogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaglogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaglogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
