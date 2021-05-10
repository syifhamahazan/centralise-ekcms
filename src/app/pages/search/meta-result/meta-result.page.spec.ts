import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaResultPage } from './meta-result.page';

describe('MetaResultPage', () => {
  let component: MetaResultPage;
  let fixture: ComponentFixture<MetaResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
