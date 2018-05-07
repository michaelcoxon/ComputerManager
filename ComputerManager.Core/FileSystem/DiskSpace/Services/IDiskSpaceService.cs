using System.Collections.Generic;
using System.Threading.Tasks;
using ComputerManager.FileSystem.DiskSpace.Models;

namespace ComputerManager.FileSystem.DiskSpace.Services
{
    public interface IDiskSpaceService
    {
        Task<IEnumerable<DiskSpaceResult>> GetAllAsync();
    }
}