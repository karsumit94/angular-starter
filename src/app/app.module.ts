import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from '@collab-ui/angular/esm2015/button';
import { TopbarModule } from '@collab-ui/angular/esm2015/topbar';
import { IconModule } from '@collab-ui/angular/esm2015/icon';
import { ListModule } from '@collab-ui/angular/esm2015/list';
import { ListItemModule } from '@collab-ui/angular/esm2015/list-item';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
