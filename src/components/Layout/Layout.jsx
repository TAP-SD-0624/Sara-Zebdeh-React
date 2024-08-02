import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Favourites from "../Favourites/Favourites";
import "./layout.scss";

const Layout = (props) => {
  const [favourites, setFavourites] = useState([]);
 
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    const favouritesArray = storedFavourites ? JSON.parse(storedFavourites) : [];
    setFavourites(favouritesArray);
  }, []);

  return (
    <>
      <body className="light-mode container">
        <div className="header-body-section">
          <Header />
          {props.children}
        </div>
        <Favourites favouriteTopics={favourites} />
        <Footer />
      </body>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
