import TablaCarrito from './tablaCarrito';

// Renderiza la tabla en tu componente UserFacturas
function UserFacturas() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px', marginBottom: '20px' }}>Carrito</h1>
            <TablaCarrito />
        </div>
    );
}

export default UserFacturas;