import { Component, HostListener, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  myLogo: string = "../assets/DCP LOGO bold.png";

  // Used to check if menu is collapsed
  isMenuCollapsed = true;


  public currentActive = 1; // Tracks the current active page

  // Holds all pageYOffset positions
  @Input () pageLocations: any;

  // Gets the scroll position and compares it to the page position then sets the correct page as active
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() { 
    console.log(this.pageLocations.educationOffset);

    if (window.pageYOffset >= this.pageLocations.aboutMeOffset && window.pageYOffset < this.pageLocations.educationOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.pageLocations.educationOffset && window.pageYOffset < this.pageLocations.skillsOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.pageLocations.skillsOffset && window.pageYOffset < this.pageLocations.projectsOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.pageLocations.projectsOffset && window.pageYOffset < this.pageLocations.contactOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.pageLocations.contactOffset) {
      this.currentActive = 5;
    } else {
      this.currentActive = 0;
    }
  }

}
