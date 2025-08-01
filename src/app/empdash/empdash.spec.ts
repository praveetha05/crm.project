import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empdash } from './empdash';

describe('Empdash', () => {
  let component: Empdash;
  let fixture: ComponentFixture<Empdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empdash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
