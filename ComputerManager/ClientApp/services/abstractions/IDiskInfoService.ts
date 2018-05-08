

export interface IDiskSpaceResult
{
    name: string;
    size: number;
    used: number;
    available: number;
    mountPoint: string;
}

export interface IDiskInfoService
{
    getDiskSpaceAsync(): Promise<IDiskSpaceResult[]>;
}

