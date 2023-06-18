function ProductRow ({products}) {

    return (
        <div>
            <table>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className={!product.inStock ? 'out-of-stock' : ''}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductRow;