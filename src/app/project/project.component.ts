import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  ngOnInit(): void {
    // debugger
    window.scroll(0,0)
    setTimeout(() => {
      this.isLoad  = false
    }, 1500);
}

isLoad = true;
}
