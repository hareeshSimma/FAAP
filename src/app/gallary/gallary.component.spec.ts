import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryComponent } from './gallary.component';

describe('GallaryComponent', () => {
  let component: GallaryComponent;
  let fixture: ComponentFixture<GallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});