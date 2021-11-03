import React from "react";
import { DataType } from "../../modules";

interface Props {
  albums: DataType[];
}

const AlbumListComponent: React.FC<Props> = ({ albums }: Props) => {
  return (
    <div>
      <div>Older albums</div>
      {albums.length > 0 ? (
        albums.map((album) => {
          return <div key={`${album.id}-${album.title}`}>{album.title}</div>;
        })
      ) : (
        <div>No previous articles</div>
      )}
    </div>
  );
};

export default AlbumListComponent;
