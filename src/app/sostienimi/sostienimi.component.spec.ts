import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostienimiComponent } from './sostienimi.component';

describe('SostienimiComponent', () => {
  let component: SostienimiComponent;
  let fixture: ComponentFixture<SostienimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SostienimiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SostienimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
