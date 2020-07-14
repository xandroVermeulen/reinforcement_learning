using reinforcement_learning.Model;
using System;
using Xunit;

namespace XUnitTestReinforcementLearner
{
    public class MazeBoardTest
    {
        [Fact]
        public void Test1()
        {
            //TODO CHECK HOE XUNIT WERKT 
            //arrange
            int columnAmount = 2;
            int rowAmount = 2;

            //act
            MazeBoard board = new MazeBoard(columnAmount, rowAmount);

            //assert
            
        }
    }
}
