import { IDiskInfoService, IDiskSpaceResult } from "./abstractions/IDiskInfoService";
import { injectable, inject } from "../services";
import { Services } from "../services.config";
import { ILogger } from "@michaelcoxon/utilities";


@injectable()
export class DiskInfoService implements IDiskInfoService
{
    private readonly _logger: ILogger;

    constructor(
        @inject(Services.ILogger) logger: ILogger
    )
    {
        this._logger = logger.scope("DiskInfoService");
    }

    public async getDiskSpaceAsync(): Promise<IDiskSpaceResult[]>
    {
        const logger = this._logger!.scope("getDiskSpaceAsync");

        logger.trace("Fetching...");
        const response = await fetch('api/file-system/disk-space');

        logger.trace("Received!");
        const data = (await response.json()) as IDiskSpaceResult[];

        return data;
    }
}