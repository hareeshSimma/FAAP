import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieventsComponent } from './achievents.component';

describe('AchieventsComponent', () => {
  let component: AchieventsComponent;
  let fixture: ComponentFixture<AchieventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchieventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchieventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
