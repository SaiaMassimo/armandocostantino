import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSponsorComponent } from './carousel-sponsor.component';

describe('CarouselSponsorComponent', () => {
  let component: CarouselSponsorComponent;
  let fixture: ComponentFixture<CarouselSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
