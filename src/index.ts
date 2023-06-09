import "./scss/styles.scss";
import App from './app';
import { Constants } from "./constants";

/**
 * Query selector string 
 * for the canvas target
 */
const target = `#${Constants.CANVAS_TARGET}`;


/**
 * App entry point. Start here.
 */
(() => {

  // This is our target canvas
  const canvas = document.querySelector<HTMLCanvasElement>(target);
  if (canvas instanceof HTMLCanvasElement) {

    // Using the 2D context
    const context = canvas.getContext('2d');
    if (context == null) return; 

    // Create application object.
    const app = new App(canvas, context);
  
    // Define animation loop and process.
    const animationLoop = (timestamp: DOMHighResTimeStamp): void => {
      
      // Everything gets done here.
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


  

 
