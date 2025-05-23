using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
  private readonly IUserService _service;
  public UsersController(IUserService service) => _service = service;

  [HttpGet]
  public async Task<IActionResult> Get() => Ok(await _service.ListAsync());
}