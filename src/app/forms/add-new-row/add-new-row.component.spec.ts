import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRowComponent } from './add-new-row.component';

describe('AddNewRowComponent', () => {
  let component: AddNewRowComponent;
  let fixture: ComponentFixture<AddNewRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewRowComponent]
    });
    fixture = TestBed.createComponent(AddNewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
