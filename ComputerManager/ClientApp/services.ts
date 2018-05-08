// these 2 lines must be first or pain and sufferring will be had by all
import 'reflect-metadata';
import { Services } from './services.config';
import { injectable, inject, multiInject, named, tagged, Container, decorate } from "inversify";

// now include all the other jive
import { ILogger, ConsoleLogger, AggregateLogger } from '@michaelcoxon/utilities';
import { IAppSettingsService } from './services/abstractions/IAppSettingsService';
import { IDiskInfoService } from './services/abstractions/IDiskInfoService';

import getDecorators from 'inversify-inject-decorators';

export const container = new Container();

// decorate our imported library class
//decorate(injectable(), ConsoleLogger);
container.bind(ConsoleLogger)
    .toDynamicValue(ctx => new ConsoleLogger(
        window.console,
        ctx.container.get<IAppSettingsService>(Services.IAppSettingsService)
    ));

container.bind<ILogger>(Services.ILogger)
    .toDynamicValue((ctx) => new AggregateLogger(
        ctx.container.get(ConsoleLogger)
    ));


// mocks

import { MockAppSettingsService } from './services/mocks/MockAppSettingsService';
container.bind<IAppSettingsService>(Services.IAppSettingsService).to(MockAppSettingsService);

// reals
import { DiskInfoService } from './services/DiskInfoService';
container.bind<IDiskInfoService>(Services.IDiskInfoService).to(DiskInfoService);




export const { lazyInject, lazyInjectNamed, lazyInjectTagged, lazyMultiInject } = getDecorators(container);
export { injectable, inject, multiInject, named, tagged };