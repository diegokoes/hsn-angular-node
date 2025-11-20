import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer3Partners } from './footer3-partners';

describe('Footer3Partners', () => {
  let component: Footer3Partners;
  let fixture: ComponentFixture<Footer3Partners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer3Partners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer3Partners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
