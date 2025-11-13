using APIVersioning.Models;
using System.ComponentModel.DataAnnotations;

namespace APIVersioning.Entities.V1U1
{
    public class ValueEntity
    {
        public ValueEntity() { }

        public ValueEntity(ValueModel valueModel)
        {
            this.Value = valueModel.Value;
            this.Description = valueModel.Description;
        }

        public string? Value { get; set; }

        [Required]
        public string? Description { get; set; }

        public ValueModel ToModel()
        {
            return new ValueModel
            {
                Value = Value,
                Description = Description
            };
        }
    }
}
