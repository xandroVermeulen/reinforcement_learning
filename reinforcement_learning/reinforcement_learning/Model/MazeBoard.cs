using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Reinforcement_learning.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace reinforcement_learning.Model
{
    public class MazeBoard : GameBoard
    {
        public MazeBoard(int width, int height) : base(width, height)
        {
        }

        //generate a valid maze
        public override void Generate_board()
        {
            

        }

        public override String ToJSONString()
        {
            var jsondata = new
            {
                rows = this.width,
                columns = this.height,
                grid_cells = new Object[2, 7] { { "empty", 0, 1, 1, 0, 0, 0 }, { "empty", 0, 1, 1, 0, 0, 0 } }
            };
            return JsonConvert.SerializeObject(jsondata);
        }
    }
}
