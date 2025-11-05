using Gargoyles.Models;

namespace Gargoyles.Services
{
    public class GargoylesDatabase
    {
        private Dictionary<string, GargoyleModel> gargoyles = new();

        public GargoyleModel Get(string name)
        {
            // note i'm not going to handle null here, but you probably should for your assignment.

            return gargoyles[name];
        }

        public void AddOrReplace(GargoyleModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            {
                return;
            }

            model.LastUpdated = DateTime.UtcNow;
            gargoyles.Add(model.Name, model);
        }
    }
}
