import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateioComponent } from './rateio.component';
import { PrestModule } from '../prest.module';


describe('RateioComponent', () => {
  let component: RateioComponent;
  let fixture: ComponentFixture<RateioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateioComponent, PrestModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
