import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          name={album.title}
          image={album.image}
          genre={album.genre}
        />
      ))}
    </section>
  );
}

export default AlbumList;
