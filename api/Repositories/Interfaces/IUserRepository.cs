public interface IUserRepository
{
    Task<IEnumerable<User>> GetAll();
    Task<User> GetById(Guid id);
    Task<User> Create(User user);
    Task<User> Update(User user);
    Task Delete(Guid id);
}