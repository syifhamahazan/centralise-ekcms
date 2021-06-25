import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherchargescardComponent } from './otherchargescard.component';

describe('OtherchargescardComponent', () => {
  let component: OtherchargescardComponent;
  let fixture: ComponentFixture<OtherchargescardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherchargescardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherchargescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
