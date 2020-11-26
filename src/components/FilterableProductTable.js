import React from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

  state = {
    products: this.props.products,
    filteredProducts: this.props.products
  }

  searchAction = (state) => {
    let { search, stock }  = state
    let visibleProducts = [...this.state.products].filter((product) => {
      return (
        product.name.toLowerCase().includes(search.toLowerCase())
        && (stock ? product.stocked === stock : product)
      )
    })
  
        this.setState({
            filteredProducts: visibleProducts
        })
  }

      render() {
        return(
          
          <div>
           <h1> IRONSTORE </h1><br/>
            <Searchbar onFilter={this.searchAction} />
            <ProductTable filteredProducts={this.state.filteredProducts}/>
              
          </div>  
        )
    }
}

export default FilterableProductTable;