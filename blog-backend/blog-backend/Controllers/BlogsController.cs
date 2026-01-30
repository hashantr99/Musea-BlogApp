using blog_backend.Data;
using blog_backend.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace blog_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly IRepository<Blog> _blogRepository;

        public BlogsController(IRepository<Blog> blogRepository)
        {
            _blogRepository = blogRepository;
        }

        [HttpGet]
        public async Task<ActionResult> GetBlogsList()
        {
            var blogs = await _blogRepository.GetAll();
            return Ok(blogs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetBlog([FromRoute] int id)
        {
            var blog = await _blogRepository.GetById(id);
            return Ok(blog);
        }

        [HttpPost]
        public async Task<ActionResult> AddBlog([FromBody] Blog model)
        {
            await _blogRepository.AddAsync(model);
            return Ok(model);
        }
    }
}
