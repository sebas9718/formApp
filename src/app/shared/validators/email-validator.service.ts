import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      if (email === 'sebas@gmail.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
      }
      subscriber.next(null);
      subscriber.complete();
    });
    return httpCallObservable;
  }
  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;

  //   return of({
  //     emailTaken: true
  //   })
  // }


}

// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
//   .pipe(
//     map( resp => {
//       return ( resp.length === 0 )
//         ?null
//         : {emailTaken: true}
//     })
//   )
