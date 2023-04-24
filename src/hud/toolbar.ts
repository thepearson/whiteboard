import Drawing from "../drawing";
import Freehand from "../entities/freehand";
import Marker from "../tools/marker";
import Select from "../tools/select";
import HudItem from "./hud_item";

export default class Toolbar extends HudItem {

  tools: Array<{
    key: string,
    title: string 
  }> = [
    {
      key: "select",
      title: "Select"
    },
    {
      key: "marker",
      title: "Marker"
    }
  ];

  /**
   * Drawing reference.
   */
  drawing: Drawing | null = null;

  constructor(name: string, drawing: Drawing) {
    super(name);
    this.drawing = drawing;
  }

  /**
   * [setTool description]
   *
   * @param   {string}  tool  [tool description]
   *
   * @return  {[type]}        [return description]
   */
  public setTool(tool: string) {
    switch (tool) {
      case 'select':
        this.drawing?.setTool(new Select(this.drawing))
        break;
      case 'marker':
        this.drawing?.setTool(new Marker(this.drawing))
        break;
    }
    
  }

  /**
   * Build the toolbar
   *
   * @return  {void}
   */
  public build(): void {
    const target = document.getElementById("tools");
    if (!target) return;
    target.innerHTML = '';

    for (let tool of this.tools) {
      const button = document.createElement('button');
      button.innerText = tool.title;
      button.id = tool.key;
      button.addEventListener("click", (event: Event) => {
        this.setTool(tool.key)
      })
      target.appendChild(button);
    }
  }
  
}