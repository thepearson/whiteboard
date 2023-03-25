import "./scss/styles.scss";
import App from './app';

/**
 * Query selector string 
 * for the canvas target
 */
const target = '#drawing-canvas';



(() => {
  // This is our target canvas
  const canvas = document.querySelector<HTMLCanvasElement>(target);
  if (canvas instanceof HTMLCanvasElement) {

    // Using the 2D context
    const context = canvas.getContext('2d');
    if (context == null) return; 

    // Create Game object.
    const app = new App(canvas, context);
  
    // Define gameloop and process.
    const animationLoop = (timestamp: DOMHighResTimeStamp): void => {
      
      app.process(timestamp);
    
      // Keep requesting new frames
      window.requestAnimationFrame(animationLoop);
    }  

    // Bootstrap any setup stuff
    app.setUp();

    // Start the renderloop.
    window.requestAnimationFrame(animationLoop)
  }
})()


  

 
