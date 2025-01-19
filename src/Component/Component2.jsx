import React, { useEffect } from "react";
import { GlobalContext } from "../Context.jsx";
import { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Nav from "react-bootstrap/Nav";

const Component2 = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let images = state.user.img;
  console.log(images);

  // for(var i=0;i<images.length;i++){
  //   let img=images[i]
  // return img

  // }console.log(img);

  return (
    <>
      <div
        className="container p-3"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div
          className="outerDiv p-4"
          style={{ backgroundColor: "#f6f1ff", borderRadius: "10px" }}
        >
          <h3>Welcom </h3>

          <h2>{state?.user?.firstName}</h2>
          <p>{state?.user?.email}</p>
          <div className="my-5">
            
            {/* {images.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt={`Image ${image.id}`} />
                <p>Image Source: {image.src}</p>
              </div>
            ))} */}
            {images ?(
                            <div key={images.id}>
                            <img src={images.src} alt={`Image ${images.id}`} />
                            <p>Image Source: {images.src}</p>
                          </div>
            ):(<p>no image</p>)}
          </div>
          <hr />

          {/* {
            <Router>
              <Nav.Link as={Link} to="/component2">
                <button style={{ backgroundColor: "#855cf7" }}>
                  Creat profile
                </button>
              </Nav.Link>
              <Routes>
                <Route path="/component2" element={<Component2 />} />
              </Routes>
            </Router>
          } */}
        </div>
      </div>
    </>
  );
};

export default Component2;
