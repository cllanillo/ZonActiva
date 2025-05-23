public interface IUserService
{
    Task<IEnumerable<User>> ListAsync();
}