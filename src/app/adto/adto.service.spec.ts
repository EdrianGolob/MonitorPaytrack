import { TestBed } from '@angular/core/testing';
import { adtoService } from '../shared/services/adto.service';



describe('AdtoService', () => {
  let service: adtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(adtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
