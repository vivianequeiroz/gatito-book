import { AutenticacaoModule } from './autenticacao.module';

describe('AutenticacaoModule', () => {
  let autenticacaoModule: AutenticacaoModule;

  beforeEach(() => {
    autenticacaoModule = new AutenticacaoModule();
  });

  it('should create an instance', () => {
    expect(autenticacaoModule).toBeTruthy();
  });
});
