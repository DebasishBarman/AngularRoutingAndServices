import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmpContactComponent } from './child-emp-contact.component';

describe('ChildEmpContactComponent', () => {
  let component: ChildEmpContactComponent;
  let fixture: ComponentFixture<ChildEmpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEmpContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEmpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
