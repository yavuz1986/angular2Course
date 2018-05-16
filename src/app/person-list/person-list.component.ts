import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html' ,
  styles: [`
    input:focus {
      font-weight: bold;
      color: red;
      outline: none;
    }
    .mousedown {
      border: 2px solid green;
    }
  `]
})
export class PersonListComponent implements OnInit {
  @Input('personData') personData;
  @Output('showName') showName = new EventEmitter();
  strName: string;
  strSurname: string;
  constructor() {
    // this.strName = 'Yavuz';
    // this.strSurname = 'YILDIZ';
  }
  public WriteFullName() {
    // console.log(`Tam ad ${this.strName} ${this.strSurname}`);
    this.showName.next(this.personData);
  }
  public OnlyNumbers($event) {
    // console.log($event);
    if ($event.charCode >= 49 && $event.charCode <= 57) {
      return false;
    }
  }
  public CheckMail(email) {
    console.log(email);
  }

  ngOnInit() {
    this.strName = this.personData.name;
    this.strSurname = this.personData.surname;
  }

}
