import 'reflect-metadata';
import { ILogger, LogLevel } from '@michaelcoxon/utilities';
import * as Es6Promise from 'es6-promise';
import { container } from './services';
import { Services } from './services.config';
import { initializeIcons } from '@uifabric/icons';
import { initializeFileTypeIcons } from '@uifabric/file-type-icons';
import * as RoutesModule from './routes';
import { Bootstrapper } from './boot';

// get the logger
const logger = container.get<ILogger>(Services.ILogger);
/*
try
{
*/
logger.info("Application startup!");

// polyfills
logger.trace("Es6Promise.polyfill");
Es6Promise.polyfill();


// icons
logger.trace("initializeIcons");
initializeIcons();

logger.trace("initializeFileTypeIcons");
initializeFileTypeIcons();


// start react
logger.trace("new Bootstrapper");
const bootstrapper = new Bootstrapper(RoutesModule.routes);

logger.trace("bootstrapper.renderApp");
bootstrapper.renderApp();
    /*
}
catch (err)
{
    logger.errorError(err, "Fatal error");
    throw err;
}
*/