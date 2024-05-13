import React,{useState, useEffect} from "react"; 
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
//import useProductos from "./productGetGames";
import './catalogProducts.css';
import { HomeUserButton, UserCarritoButton } from './Button';
import logo from './img/logo.jpeg';

function Productos ({producto})  {
    return (
     <Card>
        <div className="cardMediaContainer">
        <CardMedia
            component="img"
            image={producto.thumbnail}
            alt={producto.nombre}
        />
        </div>
      
        <div className="cardInfoContainer">
        <CardContent>
            <Typography variant="h5">{producto.nombre}</Typography>
            <div className="product-images">
                {producto.imagen.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={producto.nombre} className={"small-image"}/>
              ))}
            </div>
            <Typography variant="body2">{producto.descripcion}</Typography>
            <Typography variant="h6">Precio: {producto.precio}€</Typography>
            <CardActionArea>

            <Link to={`/catalogo/${producto.id}`} state={{ producto }}>
                <Button variant="contained" color="primary">Ver detalle</Button>
            </Link>
            </CardActionArea>
        </CardContent>
        </div>
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
        <div className="productos-app">
                   <div className="appBarContainer">     
       <AppBar position="static" sx={{ backgroundColor: '#000', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img src={logo} alt="GameLand Logo" style={{ height: 50, marginRight: 10 }} />
          <Typography variant="h6" color="inherit" sx={{ fontFamily: 'MyCustomFont' }}>
            GameLand
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
        <h2>Productos destacados</h2>
        <div className="homeCarritoButtonsContainer">
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', marginTop: '10px' }}>
            <UserCarritoButton />
            <HomeUserButton />
        </div>
        </div>
        <div className="productos-grid">
            {productos.map((producto) => (
                <Productos key={producto.id} producto={producto} />
            ))}
        </div>
    </div>
    );
}

export default CatalogProducts;