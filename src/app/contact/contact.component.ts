import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    // debugger
    window.scroll(0,0)
    setTimeout(() => {
      this.isLoad  = false
    }, 1500);
}

isLoad = true;
}
