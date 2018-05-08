
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { loggerScope, ILogger, usingAsync, Strings } from '@michaelcoxon/utilities';
import { lazyInject } from '../services';
import { Services } from '../services.config';
import { FormattingHelpers } from '../helpers/FormattingHelpers';
import { IDiskSpaceResult } from '../services/abstractions/IDiskInfoService';



interface IDiskSpaceTableComponentProps
{
    results: IDiskSpaceResult[];
}


export class DiskSpaceTableComponent extends React.Component<IDiskSpaceTableComponentProps>
{
    public render()
    {
        let { results } = this.props;

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Used</th>
                        <th>Available</th>
                        <th>Used %</th>
                        <th>Mount point</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map(r => (
                            <tr key={r.mountPoint}>
                                <td>
                                    {
                                        Strings.isNullOrEmpty(r.name)
                                            ?
                                            <span className="text-muted">(no label)</span>
                                            :
                                            r.name
                                    }
                                </td>
                                <td>{FormattingHelpers.humanReadableFileSize(r.size)}</td>
                                <td>{FormattingHelpers.humanReadableFileSize(r.used)}</td>
                                <td>{FormattingHelpers.humanReadableFileSize(r.available)}</td>
                                <td>{((r.used / r.size) * 100).toFixed(2)} %</td>
                                <td>{r.mountPoint}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}
