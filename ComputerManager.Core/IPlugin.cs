using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.DependencyInjection;

namespace ComputerManager
{
    public interface IPlugin
    {
        AssemblyPart AssemblyPart { get; }

        void RegisterServices(IServiceCollection services);
    }
}