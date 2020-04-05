import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productsAction from '../store/actions/products';
import { prepareProductsArray } from '../utils';
import ProductList from '../components/ProductsList';

const {
  getProducts,
} = productsAction;

class App extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { loading, products } = this.props;

        return (
            <ProductList
                loading={ loading }
                products={ products }
            />
        )
    }
}

export default connect(
    (state) => ({
      products: prepareProductsArray(state.Products.products),
      loading: state.Products.loading,
    }),
    {
      getProducts,
    }
)(App);
