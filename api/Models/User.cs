using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

public class User : BaseModel
{
    [PrimaryKey("user_id")]
    public Guid UserId { get; set; }

    [Column("auth0_id")]
    public string? AuthId { get; set; }

    [Column("name")]
    public string? Name { get; set; }

    [Column("email")]
    public string? Email { get; set; }
}