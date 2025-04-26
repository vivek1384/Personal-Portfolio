import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AboutComponent, ProjectComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // debugger
    window.scroll(0, 0);
    setTimeout(() => {
      this.isLoad = false
    }, 2000);
  }

  isLoad = true
}
