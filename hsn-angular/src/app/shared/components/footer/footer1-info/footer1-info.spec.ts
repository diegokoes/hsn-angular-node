import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer1Info } from './footer1-info';

describe('Footer1Info', () => {
  let component: Footer1Info;
  let fixture: ComponentFixture<Footer1Info>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer1Info]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer1Info);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
