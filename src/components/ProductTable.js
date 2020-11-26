import React from 'react';
import ProductRow from './ProductRow'; 


class ProductTable extends React.Component {

    render() {
        return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
          <tbody>
             <ProductRow key={this.props.filteredProducts.id} 
             filteredProducts={this.props.filteredProducts}/> 
          </tbody>
        </table>
        )
    }
}

export default ProductTable;