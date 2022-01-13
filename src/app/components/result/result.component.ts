import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.result = Number(localStorage.getItem('result')) || 0;
    console.log(this.result)
    localStorage.setItem('result', "")
    if (this.result == 0) {
      this.router.navigate([''])
    }
  }

}
