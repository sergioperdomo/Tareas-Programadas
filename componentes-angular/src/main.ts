
// Inicializando una aplicación cuando se usan modulos

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs, 'es');

platformBrowserDynamic().bootstrapModule(AppModule)
