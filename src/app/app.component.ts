import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isMenuCollapsed: boolean = true;

  // Holds all page locations to be sent to the header for highlighting on scroll
  public pageLocations = {aboutMeOffset: null, educationOffset: null, skillsOffset: null, projectsOffset: null, experienceOffset: null, contactOffset: null };

  //Gets the element reference object
  @ViewChild('aboutme') aboutMeElement: ElementRef;
  @ViewChild('education') educationElement: ElementRef;
  @ViewChild('skills') skillsElement: ElementRef;
  @ViewChild('projects') projectsElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.pageLocations.aboutMeOffset = this.aboutMeElement.nativeElement.offsetTop;
      this.pageLocations.educationOffset = this.educationElement.nativeElement.offsetTop;
      this.pageLocations.skillsOffset = this.skillsElement.nativeElement.offsetTop;
      this.pageLocations.projectsOffset = this.projectsElement.nativeElement.offsetTop;
      this.pageLocations.contactOffset = this.contactElement.nativeElement.offsetTop;
  }

  // Sets all page locations based on the Y value offset from top
  ngAfterViewInit() {

    setTimeout( () => {
      this.pageLocations.aboutMeOffset = this.aboutMeElement.nativeElement.offsetTop;
      this.pageLocations.educationOffset = this.educationElement.nativeElement.offsetTop;
      this.pageLocations.skillsOffset = this.skillsElement.nativeElement.offsetTop;
      this.pageLocations.projectsOffset = this.projectsElement.nativeElement.offsetTop;
      this.pageLocations.contactOffset = this.contactElement.nativeElement.offsetTop;
    }, 1000 )

  }
}


