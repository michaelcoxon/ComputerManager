using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager.FileSystem.DiskSpace.Models
{
    public class DiskSpaceResult
    {
        public string FileSystem { get; set; }
        public long Size { get; set; }
        public long Used { get; set; }
        public long Available { get; set; }
        public string MountPoint { get; set; }
    }
}
