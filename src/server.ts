import { Application } from 'express';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';

import { ForecastController } from './controllers/forecast';

import './util/module-alias';

export class SetupServer extends Server {
  constructor(private port = 3015) {
    super();
  }

  public getApp(): Application {
    return this.app;
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    super.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    super.addControllers([forecastController]);
  }
}
