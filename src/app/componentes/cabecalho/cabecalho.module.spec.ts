import { CabecalhoModule } from './cabecalho.module';

describe('CabecalhoModule', () => {
  let cabecalhoModule: CabecalhoModule;

  beforeEach(() => {
    cabecalhoModule = new CabecalhoModule();
  });

  it('should create an instance', () => {
    expect(cabecalhoModule).toBeTruthy();
  });
});
