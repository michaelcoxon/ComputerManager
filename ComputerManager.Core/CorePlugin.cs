using ComputerManager.FileSystem.DiskSpace.Services;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComputerManager
{
    public sealed class CorePlugin : IPlugin
    {
        private class CoreAssemblyPart : AssemblyPart
        {
            public CoreAssemblyPart() : base(typeof(CoreAssemblyPart).Assembly) { }

            public override string Name => nameof(CoreAssemblyPart);
        }

        public AssemblyPart AssemblyPart { get; }


        public CorePlugin()
        {
            this.AssemblyPart = new CoreAssemblyPart();
        }

        public void RegisterServices(IServiceCollection services)
        {
            services.AddTransient<IDiskSpaceService, DiskSpaceService>();
        }
    }
}
