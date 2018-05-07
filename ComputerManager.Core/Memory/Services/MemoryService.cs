using ComputerManager.Memory.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager.Memory.Services
{
   public sealed class MemoryService
    {
        public Task<MemoryDetailsResult> GetMemoryDetailsAsync()
        {
            return Task.FromResult(new MemoryDetailsResult
            {
                Available = 0,
                Size = 0,
                Used = 0,
            });
        }
    }
}
