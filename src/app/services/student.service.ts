import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GlobalVariables } from '../common/global-variables';
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudentList():Observable<Student[]> {
  const studentListUrl = `${GlobalVariables.baseUrlConst}/students`;

  return this.httpClient.get<Student[]>(studentListUrl);
  }
}


  