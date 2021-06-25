import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyotherchargesPage } from './myothercharges.page';

describe('MyotherchargesPage', () => {
  let component: MyotherchargesPage;
  let fixture: ComponentFixture<MyotherchargesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyotherchargesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyotherchargesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
