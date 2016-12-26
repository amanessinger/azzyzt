import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'my-data-editor',
  templateUrl: './struct-editor.component.html',
  styleUrls: ['./struct-editor.component.sass']
})
export class StructEditorComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('field-editor-bag', {
      // only copy out of the library to the target, let the target be reordered
      copy: function (el, source) {
        return source.className === 'data-library-box';
      },
      accepts: function (el, target) {
        return target.className === 'target-type-box'
      },
    });
  }

  ngOnInit() {
  }

}
