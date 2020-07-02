using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reinforcement_learning.Models
{
    public abstract class GameBoard
    {
        protected int width { get; set; }//not including outer borders
        protected int height { get; set; }//not including outer borders
        public int[,] board { get; set; }

        public abstract void Generate_board();
        public abstract String ToJSONString();

        protected GameBoard(int width, int height)
        {
            if (width < 2 || height < 2)
            {
                throw new Exception("Dimensions of the game board need to be at least 2");
            }
            this.width = width;
            this.height = height;
            this.board = new int[height, width];
            Generate_board();
        }


    }
}