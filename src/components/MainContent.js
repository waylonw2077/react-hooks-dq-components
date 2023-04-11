import React from "react";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";

function MainContent() {
  return <main>
    <GenrePicker></GenrePicker>
    <AlbumList></AlbumList>
  </main>;
}

export default MainContent;
