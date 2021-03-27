import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptedItemComponent } from './intercepted-item.component';

describe('InterceptedItemComponent', () => {
  let component: InterceptedItemComponent;
  let fixture: ComponentFixture<InterceptedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
