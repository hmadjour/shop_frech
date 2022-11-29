import { CircularProgress, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { getProducts } from "../database/db";
import img from "../assets/sweat.png";

const imgWidth = 300;

const Item = ({ name, price }) => {
  return (
    <Grid item xs={3}>
      <img src={img} alt="" width={imgWidth} />
      <Box display="flex" justifyContent={"center"}>
        {name}
      </Box>
      <Box display="flex" justifyContent={"center"}>
        {price + "€"}
      </Box>
    </Grid>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    getProducts().then((r) => setProducts(r));
  }, []);

  if (!products) return <CircularProgress />;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {products.map((p) => {
          return <Item name={p.name} price={p.price} />;
        })}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
