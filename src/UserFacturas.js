import TablaFacturas from './tablaFacturas';

// Renderiza la tabla en tu componente UserFacturas
function UserFacturas() {
    return (
        <div className="user-facturas-container">
            <h1 style={{ textAlign: 'center', marginTop: '80px', marginBottom: '20px' }}>Facturas</h1>
            <TablaFacturas />
        </div>
    );
}

export default UserFacturas;