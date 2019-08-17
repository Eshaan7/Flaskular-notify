import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotificationItemComponent } from './add-notification-item.component';

describe('AddNotificationItemComponent', () => {
  let component: AddNotificationItemComponent;
  let fixture: ComponentFixture<AddNotificationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotificationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
