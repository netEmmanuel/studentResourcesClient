import { TestBed, inject } from '@angular/core/testing';

import { StudentsResourceService } from './students-resource.service';

describe('StudentsResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsResourceService]
    });
  });

  it('should be created', inject([StudentsResourceService], (service: StudentsResourceService) => {
    expect(service).toBeTruthy();
  }));
});
