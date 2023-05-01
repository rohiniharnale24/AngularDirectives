import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skillArray: Array<string> = [
    'html',
    'js',
    'css',
    'MongoDB',
    'node.js',
    'angular',
  ];
  ngOnInit(): void {}
}
