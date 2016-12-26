import { StructEditorComponent } from './struct-editor.component';
import { DragulaService } from 'ng2-dragula';

describe('Component: DataEditor', () => {
  it('should create an instance', () => {
    let component = new StructEditorComponent(new DragulaService());
    expect(component).toBeTruthy();
  });
});
