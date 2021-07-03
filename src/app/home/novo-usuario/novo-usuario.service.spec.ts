import { TestBed, inject } from '@angular/core/testing';

import { NovoUsuarioService } from './novo-usuario.service';

describe('NovoUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoUsuarioService]
    });
  });

  it('should be created', inject([NovoUsuarioService], (service: NovoUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
