import { useState } from 'react';
import './GlowCursor.css';

function GlowCursor () {
    const [cursor, setCursor] = useState({});

    window.addEventListener("mousemove", (e) => {
      setCursor({
        x:e.pageX - window.scrollX - 70 , y:e.pageY - window.scrollY - 70
      })
    });

    return (
      <div className="Cursor" style={{left: cursor.x + 'px', top: cursor.y + 'px'}}></div>
    )
}

export default GlowCursor;