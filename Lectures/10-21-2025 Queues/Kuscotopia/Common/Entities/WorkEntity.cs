namespace Common.Entities
{
    public class WorkEntity
    {
        public string? Name { get; set; }

        public string? WorkType { get; set; }

        public override string ToString()
        {
            return Name + " " + WorkType;
        }
    }
}
