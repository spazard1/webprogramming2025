using APIVersioning.Models;

namespace APIVersioning.Entities.V1U0
{
    public class ValueEntity
    {
        public ValueEntity() { }

        public ValueEntity(string value)
        {
            this.Value = value;
        }

        public string? Value { get; set; }

        public ValueModel ToModel()
        {
            return new ValueModel { Value = Value };
        }
    }
}
