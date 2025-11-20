import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer4Copyright } from './footer4-copyright';

describe('Footer4Copyright', () => {
  let component: Footer4Copyright;
  let fixture: ComponentFixture<Footer4Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer4Copyright]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer4Copyright);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
