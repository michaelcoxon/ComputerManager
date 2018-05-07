using ComputerManager.FileSystem.DiskSpace.Models;
using ComputerManager.FileSystem.DiskSpace.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager.FileSystem.DiskSpace.Controllers
{
    [Route("api/file-system/disk-space")]
    public class DiskSpaceController : Controller
    {
        private readonly IDiskSpaceService _diskSpaceService;

        public DiskSpaceController(IDiskSpaceService diskSpaceService)
        {
            this._diskSpaceService = diskSpaceService;
        }

        [HttpGet("")]
        public Task<IEnumerable<DiskSpaceResult>> GetAllAsync()
        {
            return this._diskSpaceService.GetAllAsync();
        }
    }
}
