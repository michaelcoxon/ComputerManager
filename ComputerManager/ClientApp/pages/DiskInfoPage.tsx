
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { loggerScope, ILogger, usingAsync } from '@michaelcoxon/utilities';
import { lazyInject } from '../services';
import { Services } from '../services.config';
import { IDiskInfoService, IDiskSpaceResult } from '../services/abstractions/IDiskInfoService';
import { DiskSpaceTableComponent } from '../components/DiskSpaceTableComponent';


interface IDiskInfoState
{
    results: IDiskSpaceResult[];
    resultsLastUpdated?: Date;
}


export class DiskInfoPage extends React.Component<RouteComponentProps<{}>, IDiskInfoState>
{
    @loggerScope('DiskInfoPage')
    @lazyInject(Services.ILogger)
    private readonly _logger?: ILogger;

    @lazyInject(Services.IDiskInfoService)
    private readonly _diskInfoService?: IDiskInfoService;

    private _interval?: number;

    constructor(props: RouteComponentProps<{}>)
    {
        super(props);

        this.state = {
            results: [],
        };
    }

    public async componentWillMount()
    {
        await this._updateDiskSpaceAsync();
        this._interval = window.setInterval(async () => await this._updateDiskSpaceAsync(), 10000);
    }

    // cleanup the component
    public componentWillUnmount()
    {
        if (this._interval !== undefined)
        {
            clearInterval(this._interval);
            this._interval = undefined;
        }
    }

    public render()
    {
        let { results, resultsLastUpdated } = this.state;

        return (
            <div>
                <h1>Disk info</h1>
                <p>
                    This provides information about the disks in this system.
                </p>
                {
                    results.length > 0
                        ?
                        (
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Disk space
                                </div>
                                <DiskSpaceTableComponent
                                    results={results}
                                />
                                <div className="panel-footer text-right">
                                    <small><em>Last updated: {resultsLastUpdated!.toString()}</em></small>
                                </div>
                            </div>
                        )
                        :
                        <span>Fetching data...</span>
                }
            </div>
        );
    }

    private async _updateDiskSpaceAsync(): Promise<void>
    {
        this._logger!.trace("Updating disk space...");
        const data = await this._diskInfoService!.getDiskSpaceAsync();

        this._logger!.trace("Setting disk space...");
        this.setState({
            results: data,
            resultsLastUpdated: new Date()
        });
    }
}
