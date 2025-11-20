import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header3Navigation } from './header3-navigation';

describe('Header3Navigation', () => {
  let component: Header3Navigation;
  let fixture: ComponentFixture<Header3Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header3Navigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header3Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
