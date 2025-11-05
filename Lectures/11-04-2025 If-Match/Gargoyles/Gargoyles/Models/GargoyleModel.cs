namespace Gargoyles.Models
{
    public class GargoyleModel
    {
        public string? Name { get; set; }

        public string? Color { get; set; }

        public int Age { get; set; }

        public DateTime LastUpdated { get; set; }

        public string ETag()
        {
            return this.LastUpdated.ToString();
        }
    }
}
