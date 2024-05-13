import React,{useState, useEffect} from "react"; 
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Button from '@mui/material/Button';
//import useProductos from "./productGetGames";
import './catalogProducts.css';


function Productos ({producto})  {
    const trailerurl = producto.trailer;
    return (
     <Card>
        <CardMedia
            component="img"
            height="140"
            image={producto.thumbnail}
            alt={producto.nombre}
        />
       <Box sx={{ width: '50%', maxWidth: 400, mt: 16 }}>
          <iframe
            width="100%"
            height="200"
            src={trailerurl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          ></iframe>

        </Box>
        
        <CardContent>
            <Typography variant="h5">{producto.nombre}</Typography>
            <div className="product-images">
                {producto.imagen.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt={producto.nombre} />
              ))}
            </div>
            <Typography variant="body2">{producto.descripcion}</Typography>
            <Typography variant="h6">Precio: ${producto.precio}</Typography>
            <Link to={`/catalogo/${producto.id}`} state={{ producto }}>
                <Button variant="contained" color="primary">Ver detalle</Button>
            </Link>
        </CardContent>
     </Card>
    )

} 
 function CatalogProducts  () {
    const [productos, setProductos] = useState([]);
   
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:4000/api/public/products');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de productos');
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        }

        fetchProducts();
    }, []);
    return (
        <div className="productos-container">
        <h2>Productos destacados</h2>
        <div><Link to="/home_user/carrito">
          <Button variant="contained" color="secondary">Ver carrito</Button>
        </Link></div>
        <div className="productos-grid">
            {productos.map((producto) => (
                <Productos key={producto.id} producto={producto} />
            ))}
        </div>
    </div>
    );
}

export default CatalogProducts;