import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() theme !: string;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
