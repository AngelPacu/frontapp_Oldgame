import { useState, useEffect } from 'react';
/*
const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/games')
      .then(response => response.json())
      .then(data => setProductos(data));
  }, []);

  return productos;
};


export default useProductos;
*/
// Ejemplo de cómo recuperar productos desde el backend

// URL del endpoint de la API de productos en tu backend
const productsEndpoint = 'http://localhost:4000/api/public/catalogo';

// Función para recuperar la lista de productos desde el backend
async function fetchProducts() {
  try {
    const response = await fetch(productsEndpoint);
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de productos');
    }
    const products = await response.json();
    // Aquí puedes procesar los productos, por ejemplo, mostrarlos en la interfaz de usuario
    console.log('Productos obtenidos:', products);
    return products;
  } catch (error) {
    console.error('Error al recuperar productos:', error);
    return []; // o puedes lanzar el error para manejarlo en otro lugar
  }
}

// Llamar a la función para recuperar los productos
fetchProducts();
