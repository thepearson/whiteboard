import Drawing from '../drawing';
import Palette from '../hud/palette';

export default class KeyEvents {

  /**
   * Reference to the main drawing object
   * 
   * @var {Drawing}
   */
  drawing: Drawing | null = null;

  /**
   * Set up the key event handler.
   *
   * @param   {Drawing}  drawing  Main drawing object
   *
   * @return  {[type]}
   */
  constructor(drawing: Drawing) {
    this.drawing = drawing;
  }

  /**
   * Handles all the key events.
   *
   * @param   {KeyboardEvent}  event related to the key down
   *
   * @return  {void}
   */
  public handle(event: KeyboardEvent): void {
    if (!this.drawing) return;
    switch(event.key) {
      case 'a':
        this.drawing.addLayer();
        break;
      case 'x':
        this.drawing?.removeLayer(this.drawing.active_layer?.id)
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        const palette: Palette = this.drawing.hud?.getByName('palette') as Palette;
        palette.setColorIndex(parseInt(event.key) - 1);
        break;
      case 'e':
        this.drawing.setActiveLayer(1);
        break;
      case 'c':

        break;
    }
  }

}

