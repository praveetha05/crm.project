import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cusupdate } from './cusupdate';

describe('Cusupdate', () => {
  let component: Cusupdate;
  let fixture: ComponentFixture<Cusupdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cusupdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cusupdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
