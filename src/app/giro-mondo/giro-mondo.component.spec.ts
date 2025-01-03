import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiroMondoComponent } from './giro-mondo.component';

describe('GiroMondoComponent', () => {
  let component: GiroMondoComponent;
  let fixture: ComponentFixture<GiroMondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiroMondoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiroMondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
