import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import Navigation from "./routes/navegation/navegation.component";

import Authentication from "./routes/authentication/authenticetion.component";

const Shop = () => {
  return <h1>I am The Shop Page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" signIn element={<Shop />} />
        <Route path="auth" signIn element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
