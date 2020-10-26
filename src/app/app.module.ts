import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { UserModule } from './pages/user/user.module';
import { TestComponent } from './test/test.component';

import { HighlightDirective } from './tt.directive';
import { RoundBlockDirective } from './round-block.directive';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirective,
    RoundBlockDirective
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule

  ],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
