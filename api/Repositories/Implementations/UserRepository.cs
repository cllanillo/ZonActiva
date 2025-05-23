using Supabase.Gotrue;
using Supabase.Postgrest;

public class UserRepository : IUserRepository
{
    private readonly Supabase.Client _client;

    public UserRepository(Supabase.Client client)
      => _client = client;

    public async Task<IEnumerable<User>> GetAll()
      => await _client.From<User>()
                         .Select("*")
                         .Get()
                         .ContinueWith(t => t.Result.Models);

    public async Task<User> GetById(Guid id) => (await _client.From<User>().Where(u => u.UserId == id).Get()).Models.First();

    public async Task<User> Create(User user)
    => (await _client.From<User>().Insert(user, new QueryOptions { Returning = QueryOptions.ReturnType.Representation })).Models.First();


    public async Task<User> Update(User user)
      => (await _client.From<User>().Update(user)).Models.First();

    public async Task Delete(Guid id)
      => await _client.From<User>().Where(u => u.UserId == id).Delete();
}
