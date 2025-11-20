import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer2Newsletter } from './footer2-newsletter';

describe('Footer2Newsletter', () => {
  let component: Footer2Newsletter;
  let fixture: ComponentFixture<Footer2Newsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer2Newsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer2Newsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
