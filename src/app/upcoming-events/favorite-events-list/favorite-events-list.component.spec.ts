import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteEventsListComponent } from './favorite-events-list.component';

describe('FavoriteEventsListComponent', () => {
  let component: FavoriteEventsListComponent;
  let fixture: ComponentFixture<FavoriteEventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteEventsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
