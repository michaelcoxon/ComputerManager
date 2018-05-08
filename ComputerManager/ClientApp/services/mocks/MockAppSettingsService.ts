import { IAppSettingsService } from "../abstractions/IAppSettingsService";
import { LogLevel } from "@michaelcoxon/utilities";
import { injectable } from "../../services";



@injectable()
export class MockAppSettingsService implements IAppSettingsService
{
    loggingVerbosity: LogLevel = LogLevel.Debug;
    useTraceMethodForTraceLogLevel: boolean = false;
}