import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('creates AppComponent', () => {
    expect(component).toBeTruthy();
  });
});