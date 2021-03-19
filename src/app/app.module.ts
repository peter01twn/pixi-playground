import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PainterModule } from './modules/painter/painter.module';
import { PaletteModule } from './modules/palette/palette.module';
import { ScratchOffModule } from './modules/scratch-off/scratch-off.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FontAwesomeModule, PainterModule, PaletteModule, ScratchOffModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}