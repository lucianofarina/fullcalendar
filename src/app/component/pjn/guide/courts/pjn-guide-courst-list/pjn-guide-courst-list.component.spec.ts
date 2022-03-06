import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjnGuideCourstListComponent } from './pjn-guide-courst-list.component';

describe('PjnGuideCourstListComponent', () => {
  let component: PjnGuideCourstListComponent;
  let fixture: ComponentFixture<PjnGuideCourstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjnGuideCourstListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjnGuideCourstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
