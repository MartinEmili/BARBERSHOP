import { Box, Wrap, WrapItem, Center } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/* Verifica que haya al menos dos productos en los datos antes de renderizar el contenido. */}
      {products.length > 0 && (
        <Box>
          {/* Utiliza el componente Wrap para crear un contenedor flexible para los productos. */}
          <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: "12", md: "20", lg: "32" }}>
            {/* Mapea sobre los datos de productos y crea un WrapItem para cada uno. */}
            {products.map((product) => (
              <WrapItem key={product._id}>
                {/* Utiliza el componente Center para centrar cada tarjeta de producto. */}
                <Center w='250px' h='450px'>
                  {/* Renderiza el componente ProductCard para cada producto. */}
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

// Exporta el componente ProductsScreen para que pueda ser utilizado en otros lugares.
export default ProductsScreen;
