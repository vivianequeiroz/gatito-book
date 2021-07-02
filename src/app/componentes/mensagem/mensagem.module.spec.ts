import { MensagemModule } from './mensagem.module';

describe('MensagemModule', () => {
  let mensagemModule: MensagemModule;

  beforeEach(() => {
    mensagemModule = new MensagemModule();
  });

  it('should create an instance', () => {
    expect(mensagemModule).toBeTruthy();
  });
});
