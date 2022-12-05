import {
  Button,
  CircularProgress,
  Dialog,
  Grid,
  Input,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { getProducts, uploadFile } from "../database/db";
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

const FormAdd = ({ closeDialog }) => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <div>Ajouter un produit</div>
            <div>
              <Button onClick={closeDialog}>X</Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => console.log("e", e?.target?.value)}
            InputProps={{
              type: "text",
            }}
            fullWidth
            label="Nom"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => {
              console.log("e", e?.target?.value);
            }}
            InputProps={{
              type: "number",
            }}
            fullWidth
            label="Prix"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => console.log("e", e?.target?.value)}
            InputProps={{
              type: "file",
            }}
            fullWidth
            label="Photo"
          />
        </Grid>
        <Grid item xs={12}>
          <Button>Valider</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = React.useState(null);
  const [openAddProduct, setOpenAddProduct] = React.useState(false);

  React.useEffect(() => {
    getProducts().then((r) => setProducts(r));
  }, []);

  const handleChange = (e, v) => {
    uploadFile(e.target.value);
  };

  if (!products) return <CircularProgress />;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Button onClick={() => setOpenAddProduct(true)}>
          Ajouter un produit
        </Button>
        <Dialog open={openAddProduct} maxWidth="sm" fullWidth>
          <FormAdd closeDialog={() => setOpenAddProduct(false)} />
        </Dialog>
        {/* {products.map((p) => {
          return <Item name={p.name} price={p.price} />;
        })} */}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
