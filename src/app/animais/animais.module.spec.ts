import { AnimaisModule } from './animais.module';

describe('AnimaisModule', () => {
  let animaisModule: AnimaisModule;

  beforeEach(() => {
    animaisModule = new AnimaisModule();
  });

  it('should create an instance', () => {
    expect(animaisModule).toBeTruthy();
  });
});
