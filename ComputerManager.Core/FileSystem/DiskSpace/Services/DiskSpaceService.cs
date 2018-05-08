using ComputerManager.FileSystem.DiskSpace.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager.FileSystem.DiskSpace.Services
{
    public class DiskSpaceService : IDiskSpaceService
    {
        public Task<IEnumerable<DiskSpaceResult>> GetAllAsync()
        {
            return Task.Run(() => DriveInfo.GetDrives()
                .Where(d => d.IsReady)
                .Select(d => new DiskSpaceResult
                {
                    Available = d.TotalFreeSpace,
                    Name = d.VolumeLabel,
                    MountPoint = d.Name,
                    Size = d.TotalSize,
                    Used = d.TotalSize - d.TotalFreeSpace
                }));
        }
    }
}
