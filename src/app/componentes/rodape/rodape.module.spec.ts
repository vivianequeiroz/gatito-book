import { RodapeModule } from './rodape.module';

describe('RodapeModule', () => {
  let rodapeModule: RodapeModule;

  beforeEach(() => {
    rodapeModule = new RodapeModule();
  });

  it('should create an instance', () => {
    expect(rodapeModule).toBeTruthy();
  });
});
