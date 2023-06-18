function SearchBar ({onSearch, inStockOnly, onInStockChange}) {
    const handleInputChange = (event) => {
        const searchText = event.target.value;
        onSearch(searchText);
    };

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        onInStockChange(checked);
    }
    return (
        <div>
            <h4>Search</h4>
            <input type="text" name="search" onChange={handleInputChange} />
            <input 
                type="checkbox" 
                name="checkbox" 
                checked={inStockOnly}
                onChange={handleCheckboxChange}
            />
            <label>Only show products in stock</label>
        </div>
    )
}

export default SearchBar;