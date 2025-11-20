import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header4TopPageAlert } from './header4-top-page-alert';

describe('Header4TopPageAlert', () => {
  let component: Header4TopPageAlert;
  let fixture: ComponentFixture<Header4TopPageAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header4TopPageAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(Header4TopPageAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
