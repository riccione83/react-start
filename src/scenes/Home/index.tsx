import React, { useEffect, useState } from "react";
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

  const [newArticle, setNewArticle] = useState<string | undefined>("");

  return (
    <div>
      <div>
        <AlbumListComponent albums={albums} />
        <div>
          <input
            placeholder={"Insert a new album"}
            onChange={(text) => setNewArticle(text.target.value)}
            value={newArticle}
          />
        </div>
        <button
          onClick={() => {
            newArticle && add(newArticle);
            setNewArticle(undefined);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

const HomeScreen = connect()(HomeComponent);
export default HomeScreen;
