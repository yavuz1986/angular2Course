import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {
    People: PeopleModel[];
    private _people = [];

    constructor(http: Http) {
        http.request('data.json').pipe(
            map((response: Response) => <PeopleModel[]>response.json())
            .subscribe(response => this.People = response,
                err => console.log(err),
                () => console.log('Ok')
            )
        );
     }
}

export class PeopleModel {
    constructor(name: string, surname: string) {}
}
