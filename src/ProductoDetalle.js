import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { VerCatalogoButton } from './Button';

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
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
        body: JSON.stringify({ // Convierte de JS a formato JSON
          gameId: producto.id, // ID del producto que se desea agregar al carrito
          cantidad: cantidad, // Cantidad del producto que se desea agregar al carrito
        }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('No se pudo agregar el producto al carrito');
      }
      alert('Producto agregado al carrito exitosamente');
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };
  return (
    <div className="cardMediaContainer">
      {producto && (
        <Card>
          <CardContent>
            <Typography variant="h5">{producto.nombre}</Typography>
            <div className="product-images">
                {producto.imagen.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt={producto.nombre} className={"small-image"} />
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
            <Button variant="contained" sx={{
              backgroundColor: '#000',  
              color: '#fff',             
              '&:hover': {      // Al pasr el raton, fondo blanco texto negro
              backgroundColor: '#fff', 
              color: '#000',           
              },
              margin: '5px'              // Margen de los botones
            }} 
            onClick={agregarAlCarrito}>
              Agregar al carrito
            </Button>
            <VerCatalogoButton />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductoDetalle;
