import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsDetailsComponent } from './upcoming-events-details.component';

describe('UpcomingEventsDetailsComponent', () => {
  let component: UpcomingEventsDetailsComponent;
  let fixture: ComponentFixture<UpcomingEventsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEventsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
