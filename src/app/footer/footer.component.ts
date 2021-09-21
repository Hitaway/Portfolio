import { Component, OnInit } from '@angular/core';

enum linkType {
  EMAIL,
  LINK
}

interface Item {
  name: string;
  type: linkType;
  link: string;
  logoClass: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public allLinkType: linkType;
  public listItems: Item[] = [
      {
          name: 'GitHub',
          type: 1,
          link: 'https://github.com/Hitaway',
          logoClass: 'fa fa-github fa-2x'
      },
      {
          name: 'Linkedin',
          type: 1,
          link: 'https://fr.linkedin.com/in/quentin-rat-737b25152',
          logoClass: 'fa fa-linkedin fa-2x'
      },
      {
          name: 'Email',
          type: 0,
          link: 'quentinrat@hotmail.fr',
          logoClass: 'fa fa-envelope-o  fa-2x'
      }
  ];

}
