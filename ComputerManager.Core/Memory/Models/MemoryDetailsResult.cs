using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager.Memory.Models
{
    public class MemoryDetailsResult
    {
        public long Size { get; set; }
        public long Used { get; set; }
        public long Available { get; set; }
    }
}
