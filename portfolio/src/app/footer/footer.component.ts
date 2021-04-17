import { Component, OnInit } from '@angular/core';

interface item {
  name: string;
  link: string;
  logoClass: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public listItems: item[] = [
      {
          name: 'GitHub',
          link: "https://github.com/Hitaway",
          logoClass: 'fa fa-github fa-2x'
      },
      {
          name: 'Linkedin',
          link: "https://fr.linkedin.com/in/quentin-rat-737b25152",
          logoClass: 'fa fa-linkedin fa-2x'
      }
  ];

}
