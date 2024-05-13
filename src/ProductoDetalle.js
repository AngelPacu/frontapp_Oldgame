import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const volver = useNavigate();
  const [producto, setProducto] = useState(null); // Estado para almacenar los detalles del producto
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad del producto

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/public/products/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener los detalles del producto');
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleCantidadChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value);
    if (nuevaCantidad >= 1) {
      setCantidad(nuevaCantidad);
    }
  };

  const agregarAlCarrito = async() => {
    try {
      const response = await fetch('http://localhost:4000/api/public/carrito/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId: producto.id, // ID del producto que se desea agregar al carrito
          cantidad: cantidad, // Cantidad del producto que se desea agregar al carrito
        }),
        credentials: 'include', // Esto hace que se incluyan las cookies
      });
      if (!response.ok) {
        throw new Error('No se pudo agregar el producto al carrito');
      }
      alert('Producto agregado al carrito exitosamente');
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };
  const handleVolverCatalogo = () => {
    volver('/catalogo'); // Ruta del catálogo de productos
  };

  return (
    <div className="producto-detalle-container">
      {producto && (
        <Card>
          <CardContent>
            <Typography variant="h5">{producto.nombre}</Typography>
            <div className="product-images">
                {producto.imagen.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt={producto.nombre} />
              ))}
            </div>
            <Typography variant="body2">{producto.descripcion}</Typography>
            <Typography variant="h6">Precio: {producto.precio}€</Typography>
            <TextField
              label="Cantidad"
              type="number"
              value={cantidad}
              onChange={handleCantidadChange}
              variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={agregarAlCarrito}>
              Agregar al carrito
            </Button>
            <Button variant="outlined" onClick={handleVolverCatalogo}>
              Volver al Catálogo
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductoDetalle;
