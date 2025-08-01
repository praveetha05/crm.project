import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cusdetails } from './cusdetails';

describe('Cusdetails', () => {
  let component: Cusdetails;
  let fixture: ComponentFixture<Cusdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cusdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cusdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
