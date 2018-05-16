import { Component } from '@angular/core';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './person-list/personService';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-person-list *ngFor='let person of this.people' [personData]="person" (showName)='SayMyName($event)'></app-person-list>
    <br/><br/>
    <span *ngIf="this.PeopleList.length>0">Eklenen toplam kişi sayısı : {{ this.PeopleList.length }}
      <input type="button" value="Temizle" (click)="ClearList()">
      <ul>
        <li *ngFor='let person of this.PeopleList'>
          <span [ngClass]="person.state">{{ person.name }} {{ person.surname }}</span>
        </li>
      </ul>
    </span>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class AppComponent {
  title = 'Angular2 Eğitimine Hoşgeldiniz!';
  people = [];
  constructor(personService: PersonService) {
    this.people = personService.People;
  }
  PeopleList = [];
  SayMyName($event) {
    const people = {name: $event.name, surname: $event.surname, state: 'completed'};
    if (!this.PeopleList.find(res => res.name === people.name)) {
      this.PeopleList.push(people);
    }
    // console.log(`Say my name : ${$event.name} surname : ${$event.surname}`);
  }
  ClearList() {
    this.PeopleList = [];
  }
}
