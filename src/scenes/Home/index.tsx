import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import AlbumListComponent from "./components/Articles";
import { addTodo, getAlbums, loadAlbums } from "./modules";

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();

  const add = (str: string) => dispatch(addTodo(str));
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(loadAlbums());
  }, [dispatch]);

  return (
    <div>
      <div>
        <AlbumListComponent albums={albums} />
        <div>
          <input placeholder={"Insert a new album"} onChange={(text) => {}} />
        </div>
        <button onClick={() => {}}>ADD</button>
      </div>
    </div>
  );
};

const HomeScreen = connect()(HomeComponent);
export default HomeScreen;
