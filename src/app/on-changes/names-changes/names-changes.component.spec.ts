import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesChangesComponent } from './names-changes.component';

describe('NamesChangesComponent', () => {
  let component: NamesChangesComponent;
  let fixture: ComponentFixture<NamesChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
