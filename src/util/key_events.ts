import Drawing from '../drawing';

export default class KeyEvents {

  drawing: Drawing | null = null;

  constructor(drawing: Drawing) {
    this.drawing = drawing;
  }

  public handle(event: KeyboardEvent): void {
    console.log(event);
    switch(event.key) {
      case 't':
        this.drawing?.addLayer();
        break;
      case 'x':
        this.drawing?.removeLayer(this.drawing?.active_layer?.id)
    }
  }

}

