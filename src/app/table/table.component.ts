import { Component, OnInit } from '@angular/core';
import { Istudent } from './module/studentArray';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  studentArray: Array<Istudent> = [
    {
      fName: 'tony',
      lName: 'stark',
      email: 'tony@gmail.com',
      contact: 3444444,
    },
    {
      fName: 'john',
      lName: 'doew',
      email: 'john@gmail.com',
      contact: 3444444,
    },
    {
      fName: 'summer',
      lName: 'stark',
      email: 'summer@gmail.com',
      contact: 3444444,
    },
    {
      fName: 'june',
      lName: 'stark',
      email: 'june@gmail.com',
      contact: 3444444,
    },
    {
      fName: 'tony',
      lName: 'stark',
      email: 'tony@gmail.com',
      contact: 3444444,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
