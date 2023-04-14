import Drawing from '../drawing';
import Palette from '../hud/palette';

export default class KeyEvents {

  drawing: Drawing | null = null;

  constructor(drawing: Drawing) {
    this.drawing = drawing;
  }

  public handle(event: KeyboardEvent): void {
    switch(event.key) {
      case 'a':
        this.drawing?.addLayer();
        break;
      case 'x':
        this.drawing?.removeLayer(this.drawing?.active_layer?.id)
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        const palette: Palette = this.drawing?.hud?.getByName('palette') as Palette;
        palette.setColorIndex(parseInt(event.key) - 1);
        break;
      case 'e':
        this.drawing?.setActiveLayer(1);
        break;
      case 'c':

        break;
    }
  }

}

