import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MainBlockComponent } from '../main-block/main-block.component';
import * as exampleMaze from '../temp.json';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.sass']
})
export class MazeComponent implements OnInit {

  @ViewChild('elementContainer', { static: false })
  public elementContainer: ElementRef<HTMLDivElement>;

  public rows = 5;
  public columns = 6;
  public x = 50;
  public y = 50;
  public elements: {
    block: any;
    type: 'empty' | 'main' | 'start' | 'end';
    data?: {
      walls?: {
        top?: any;
        bottom?: any;
        left?: any;
        right?: any;
        'diag-left'?: any;
        'diag-right'?: any;
      };
      floor?: any;
    };
  }[] = [];
  public maze_source_object : Object;

  private blocks: Map<string, any> = new Map([
    ['main', MainBlockComponent]
  ]);


  constructor(private renderer: Renderer2) { 
    this.renderMaze();
  }

  private set_dimensions(rows,columns){
    this.rows = rows;
    this.columns = columns;
    document.documentElement.style.setProperty('--rows', this.rows+"");
    document.documentElement.style.setProperty('--columns', this.columns+"");
  }

  private renderMaze(){
    this.maze_source_object = exampleMaze["default"];
    this.set_dimensions(this.maze_source_object["rows"], this.maze_source_object["columns"]);
    
    console.log(this.maze_source_object);

    this.elements = Array.from(this.maze_source_object["grid_cells"]).map(el => {
      if (el) {
        console.log(el);
        // @TODO return "actual" block
        var cell : any = { type: el[0], 
                block: this.blocks.get("main"),
                data:{
                  walls:{
                    top: el[1],
                    bottom: el[2],
                    left: el[3],
                    right: el[4],
                    'diag-left': el[5],
                    'diag-right': el[6]
                  },
                floor: el[0]
                }
              };
        return cell;
      }
      return { type: 'empty', block: this.blocks.get('main') };
    });
  }

  ngOnInit(): void {
  }

}
