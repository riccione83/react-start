import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserId } from "../Login/modules";
import AlbumListComponent from "./components/Articles";
import { addTodo, getAlbums, loadAlbums } from "./modules";

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [numberOfItems, setMaxNumberOfItems] = useState(10);

  const add = (str: string) => dispatch(addTodo(str));
  const albums = useSelector(getAlbums);
  const userId = useSelector(getUserId);

  //If no user id is set, go back to login

  // useEffect(() => {
  //   if (!userId) {
  //     history.push("/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userId]);

  useEffect(() => {
    console.info("Current user id:", userId);
    dispatch(loadAlbums());
  }, [dispatch, userId]);

  return (
    <div>
      <div>
        <AlbumListComponent albums={albums.slice(0, numberOfItems)} />
        {numberOfItems < albums.length && (
          <div
            style={{ marginTop: 16, cursor: "pointer", color: "red" }}
            onClick={() => {
              setMaxNumberOfItems((itemsNum) => itemsNum + 10);
            }}
          >
            Show more...
          </div>
        )}
        <div style={{ marginTop: 16 }}>
          <input placeholder={"Insert a new album"} onChange={(text) => {}} />
        </div>
        <button
          onClick={(btn) => {
            add(btn.currentTarget.value);
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
