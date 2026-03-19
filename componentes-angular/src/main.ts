
// Inicializando una aplicación cuando se usan modulos

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)



// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { registerLocaleData } from '@angular/common';
// import localEs from '@angular/common/locales/es';

// registerLocaleData(localEs, 'es');

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
