import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
    selector: 'hero-form', 
    templateUrl: 'hero-form.component.html', 
    
})

export class HeroFormComponent {
  name =  new FormControl('')

  updateName() {
      this.name.setValue('Nancy')
  }
}