import React, {Component} from 'react';
import {Table, Button} from "reactstrap";

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.productInfo.title} </h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th> Quantity Per Unit</th>
                        <th>Category Id</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product => (
                        <tr key={product.id}>
                            <td> {product.productName} </td>
                            <td> {product.unitPrice} </td>
                            <td> {product.unitsInStock} </td>
                            <td> {product.quantityPerUnit} </td>
                            <td> {product.categoryId} </td>
                            <td> <Button onClick={() => this.props.addToCart(product)} color="info"> Add to Cart </Button>{' '} </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductList;