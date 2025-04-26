import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    // debugger
      window.scroll(0,0)
      setTimeout(() => {
        this.isLoad  = false
      }, 1500);
  }

  isLoad = true;
}
