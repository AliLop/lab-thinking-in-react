import React from 'react';

class SearchBar extends React.Component {
    state = {
        search: '',
        stock: false
    }

    handleSearchInput = (event) => { 
    
        let { value } = event.target
      
        this.setState({
                search: value,
            },
            () => {
                this.props.onFilter(this.state);
            })
    }  

    handleChecked = () => { 
        this.setState({
                stock: !this.state.stock,
            },
            () => {
                this.props.onFilter(this.state);
            })
    }  

    render() {
        
        return(
          <div>
            <form >Search <br/>
            <input type="text" name="searchQuery" 
                onChange={this.handleSearchInput} 
                value={this.state.search} 
                placeholder="Search..." required></input> <br/>
            <input type="checkbox" 
                onChange={this.handleChecked} 
                name="stock"/>
            <label>Only show prdoducts in stock </label>
            </form> 
          </div>  
        )
    }
}

export default SearchBar;