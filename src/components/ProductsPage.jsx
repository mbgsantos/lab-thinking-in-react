import { useState } from "react";
import jsonData from './../data.json';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    const [searchText, setSearchText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const handleInStockChange = (value) => {
        setInStockOnly(value);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesStockFilter = inStockOnly ? product.inStock : true;
        return matchesSearch && matchesStockFilter;
    });

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar 
                onSearch={handleSearch}
                inStockOnly={inStockOnly}
                onInStockChange={handleInStockChange}
            />
            <ProductTable products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;