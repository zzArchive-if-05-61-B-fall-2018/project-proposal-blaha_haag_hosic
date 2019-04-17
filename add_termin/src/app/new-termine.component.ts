import { Component } from '@angular/core';

@Component({
  selector: 'app-new-termine',
  template: `
    <input #newTermin
      (keyup.enter)="addTermin(newTermin.value)"
      (blur)="addTermin(newTermin.value); newTermin.value='' ">

    <button (click)="addTermin(newTermin.value)">Add</button>

    <ul><li *ngFor="let termin of termine">{{termin}}</li></ul>
  `
})
export class NewTermineComponent {
  termine = ['1.1.19'];
  addTermin(newTermin: string) {
    if (newTermin) {
      this.termine.push(newTermin);
    }
  }
}


