import React from "react";

function Menu({ onSelectVideo, videoValues }) {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, i) => (
        <div className="video-inputs">
          <input key={i} type="radio" name="src" value={value} />
          {value}
        </div>
      ))}
    </form>
  );
}

export default Menu;
