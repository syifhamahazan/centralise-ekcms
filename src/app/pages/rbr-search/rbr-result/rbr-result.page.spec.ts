import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RbrResultPage } from './rbr-result.page';

describe('RbrResultPage', () => {
  let component: RbrResultPage;
  let fixture: ComponentFixture<RbrResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbrResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RbrResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
