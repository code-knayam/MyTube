import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FooterComponent } from './core/footer/footer.component';
import { WatchComponent } from './watch/watch.component';
import { VideoService } from './shared/video.service';
import { VideoDetailComponent } from './shared/video-detail/video-detail.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    WatchComponent,
    VideoDetailComponent,
    UploadComponent,
    ProfileComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VideoService,
    AuthService,
    AuthGuard,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
