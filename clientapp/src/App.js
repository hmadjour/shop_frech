import { Box } from "@mui/system";
import React from "react";
import MyAppBar from "./components/MyAppBar";
import ProductsPage from "./components/ProductsPage";
import { getProducts } from "./database/db";

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Box mt={4}>
        <ProductsPage />
      </Box>
    </div>
  );
}

export default App;
