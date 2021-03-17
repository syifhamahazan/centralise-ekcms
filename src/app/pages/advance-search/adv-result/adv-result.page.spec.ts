import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvResultPage } from './adv-result.page';

describe('AdvResultPage', () => {
  let component: AdvResultPage;
  let fixture: ComponentFixture<AdvResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
