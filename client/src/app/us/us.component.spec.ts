import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsComponent } from './us.component';

describe('UsComponent', () => {
  let component: UsComponent;
  let fixture: ComponentFixture<UsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
