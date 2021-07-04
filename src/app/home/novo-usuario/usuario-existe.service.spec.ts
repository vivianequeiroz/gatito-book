import { TestBed, inject } from '@angular/core/testing';

import { UsuarioExisteService } from './usuario-existe.service';

describe('UsuarioExisteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioExisteService]
    });
  });

  it('should be created', inject([UsuarioExisteService], (service: UsuarioExisteService) => {
    expect(service).toBeTruthy();
  }));
});
