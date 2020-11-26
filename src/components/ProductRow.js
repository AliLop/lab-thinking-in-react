import React from 'react';


class ProductRow extends React.Component {

        render() {
        return(
          <div>
            {this.props.filteredProducts.map((item) => {
                return <tr>
                <td style={{color: item.stocked ? "black" : "red"}}>{item.name}</td>
                <td>{item.price}</td>
                </tr>
               })}
          </div>  
        )
    }
}

export default ProductRow;