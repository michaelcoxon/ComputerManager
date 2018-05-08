


export namespace FormattingHelpers
{
    // https://stackoverflow.com/a/16023872/2302383
    // modified for this class
    export function humanReadableFileSize(bytes: number): string
    {
        const thresh = 1024;
        const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        if (bytes < thresh)
        {
            return bytes + ' B';
        }

        let u = -1;
        do
        {
            bytes /= thresh;
            ++u;
        }
        while (bytes >= thresh);

        return bytes.toFixed(2) + ' ' + units[u];
    };
}