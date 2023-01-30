import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isMenuCollapsed: boolean = true;

  // Holds all page locations to be sent to the header for highlighting on scroll
  public pageLocations = {aboutMeOffset: null, educationOffset: null, skillsOffset: null, projectsOffset: null, experienceOffset: null, contactOffset: null };

  @ViewChild('aboutme') aboutMeElement: ElementRef;
  @ViewChild('education') educationElement: ElementRef;
  @ViewChild('skills') skillsElement: ElementRef;
  @ViewChild('projects') projectsElement: ElementRef;
  @ViewChild('experience') experienceElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  // Sets all page locations based on the Y value offset from top
  ngAfterViewInit() {
    this.pageLocations.aboutMeOffset = this.aboutMeElement.nativeElement.offsetTop;
    this.pageLocations.educationOffset = this.educationElement.nativeElement.offsetTop;
    this.pageLocations.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    this.pageLocations.projectsOffset = this.projectsElement.nativeElement.offsetTop;
    this.pageLocations.experienceOffset = this.experienceElement.nativeElement.offsetTop;
    this.pageLocations.contactOffset = this.contactElement.nativeElement.offsetTop;
  }
}


