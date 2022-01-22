import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserId, logout } from "../Login/modules";
import AlbumListComponent from "./components/Articles";
import { getAlbums, loadAlbums } from "./modules";

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [numberOfItems, setMaxNumberOfItems] = useState(10);
  const albums = useSelector(getAlbums);
  const userId = useSelector((s) => getUserId(s));

  // TODO - Implement the logic to fetch the albums from the server
  // using the userid from the login module. This means fetch only the albumns
  // for the user that is logged in.
  useEffect(() => {
    if (!userId) {
      history.push("/login");
    } else {
      dispatch(loadAlbums());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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

        <button
          style={{ marginTop: 16 }}
          onClick={(btn) => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const HomeScreen = connect()(HomeComponent);
export default HomeScreen;
