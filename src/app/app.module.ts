import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NoteworthyModalComponent } from './projects/modals/noteworthy-modal/noteworthy-modal.component';
import { ShoppingcartModalComponent } from './projects/modals/shoppingcart-modal/shoppingcart-modal.component';
import { SearchUmModalComponent } from './projects/modals/search-um-modal/search-um-modal.component';
import { DrinkFinderModalComponent } from './projects/modals/drink-finder-modal/drink-finder-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    NoteworthyModalComponent,
    ShoppingcartModalComponent,
    SearchUmModalComponent,
    DrinkFinderModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

