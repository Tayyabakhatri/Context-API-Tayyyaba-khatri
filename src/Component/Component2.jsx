import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Nav from "react-bootstrap/Nav";


const Component2 = () => {
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
          <h3>Welcom to </h3>
<div className="my-5"><img src="src/assets/Rectangle 14.png" alt="" /></div>
         <hr/>
        
          
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
