/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StructEditorComponent } from './struct-editor';
import { RouterTestingModule } from '@angular/router/testing';

describe('App: AzzyztedData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StructEditorComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '/struct-editor',
            component: StructEditorComponent
          }
        ]),
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Azzyzted Data'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Azzyzted Data');
  }));

  it('should render title in a div tag of class app-title', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.app-title').textContent).toContain('Azzyzted Data');
  }));
});
