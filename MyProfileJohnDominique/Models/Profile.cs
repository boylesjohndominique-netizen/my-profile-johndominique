namespace StudentMVC.Models
{
    public class Profile
    {
        public string Name { get; set; } = string.Empty;
        public string Course { get; set; } = string.Empty;
        public int Age { get; set; }
        public string Hobby { get; set; } = string.Empty;
        public string FavoriteSubject { get; set; } = string.Empty;
        public string CareerGoal { get; set; } = string.Empty;

        // Extra properties added for Part 8 - Option 1
        public string Email { get; set; } = string.Empty;
        public string Motto { get; set; } = string.Empty;
    }
}
