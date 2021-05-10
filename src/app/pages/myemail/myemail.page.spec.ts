import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyemailPage } from './myemail.page';

describe('MyemailPage', () => {
  let component: MyemailPage;
  let fixture: ComponentFixture<MyemailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
