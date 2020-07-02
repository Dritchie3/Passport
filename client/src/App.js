import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./utils/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" onFailureRedirectToPath="/login">
            <Home />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

// Code from CPC

// import React from "react";
// import Login from "./pages/Login";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import SignUp from "./pages/signup";
// import Nav from "./components/Nav";
// import { BrowserRouter, Switch,  Route }   from "react-router-dom";

// import ProjectPosts from "./pages/ProjectPosts";
// import PostaProject from "./pages/PostaProject";
// import Navbar from "./components/Navbar/navbar";

// import JobPosts from "./pages/ProjectPosts";

// // The app will not render correctly until you setup a Route component.
// // Refer to the Basic Example documentation if you need to.
// // (https://reacttraining.com/react-router/web/example/basic)
// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       {/* <Nav /> */}
//       <Switch>
//         <Route exact path = {["/", "/Login"]}>
//          <Login />
//         </Route>
//         <Route exact path = {["/signup"]}>
//          <SignUp />
//          </Route>

//          <Route exact path = {["/PostaProject"]}>
//          <PostaProject />
//          </Route>
//          <Route exact path = {["/ProjectPosts"]}>
//          <ProjectPosts />
//          </Route>
//          <Route exact path = {["/Navbar"]}>
//          <Navbar />

//          </Route>
//         <Route exact path = "/CodePro/:id">
//           <Detail />
//         </Route>
//         <Route>
//           <NoMatch />
//         </Route>
//       </Switch>

//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
