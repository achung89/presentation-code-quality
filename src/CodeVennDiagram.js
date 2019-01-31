import React, { useEffect, useRef } from 'react';

export default ({count}) => {
  let canvas = useRef(null);
  useEffect(function canvasUseEffect() {
    if (canvas.current) {
      
      let context = canvas.current.getContext('2d');
      [
        [350, 350, 300, 'brown', 350, 100, 'secure code']
        , [320, 370, 250, 'green', 270, 183, 'bug and error free']
        , [300, 400, 200, 'blue', 240, 310, 'maintainable code']
        , [250, 450, 100, 'red', 200, 450, 'clean code']
      ]
      .slice(-count)
      .forEach(function createCanvasCircle([x, y, radius, color, xtitle, ytitle, title]) {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
        context.closePath();
        context.fillStyle = "white";
        context.font = "20px Arial";
        context.fillText(title, xtitle, ytitle)


      });
    }
  }, [canvas]);
  
  return <canvas width={2000} 
                 height={2000}
                 ref={canvas}></canvas>
}