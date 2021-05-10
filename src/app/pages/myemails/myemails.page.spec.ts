import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyemailsPage } from './myemails.page';

describe('MyemailsPage', () => {
  let component: MyemailsPage;
  let fixture: ComponentFixture<MyemailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyemailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
