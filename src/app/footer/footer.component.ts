import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  gitLogo: string = "../assets/github-mark-white.png";
  linkedinLogo: string = "../assets/whitelinkedin.png";
}
