import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedunitsComponent } from './affiliatedunits.component';

describe('AffiliatedunitsComponent', () => {
  let component: AffiliatedunitsComponent;
  let fixture: ComponentFixture<AffiliatedunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatedunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
