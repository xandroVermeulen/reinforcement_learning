using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using reinforcement_learning.Model;
using Reinforcement_learning.Models;

namespace reinforcement_learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MazeController : ControllerBase
    {
        private readonly ILogger<MazeController> _logger;

        public MazeController(ILogger<MazeController> logger)
        {
            _logger = logger;
        }

        //GET: /api/maze/board?rowAmount=5&columnAmount=5
        [Produces("application/json")]
        [HttpGet("Board")]
        public IActionResult Get(int rowAmount, int columnAmount)
        {
            //todo check input bounds
            _logger.LogInformation("MazeController: Received Get call");
            MazeBoard board = new MazeBoard(columnAmount, rowAmount);
            return Ok(Content(board.ToJSONString(), "application/json")); 
        }
    }
}
