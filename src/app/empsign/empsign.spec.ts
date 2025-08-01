import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empsign } from './empsign';

describe('Empsign', () => {
  let component: Empsign;
  let fixture: ComponentFixture<Empsign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empsign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empsign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
