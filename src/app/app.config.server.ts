import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
