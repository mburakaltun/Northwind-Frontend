import React, {Component} from 'react';
import {Button, Table} from "reactstrap";

class CartList extends Component {
    renderCart() {
        return (
            <Table stripped>
                <thead>
                <tr>
                    <td> #</td>
                    <td> Category Id</td>
                    <td> Product Name</td>
                    <td> Unit Price</td>
                    <td> Units In Stock</td>
                    <td> Quantity</td>
                    <td> </td>
                </tr>
                </thead>
                <tbody>
                {this.props.cart.map(cartItem => (
                    <tr key={cartItem.product.id}>
                        <td> {cartItem.product.id} </td>
                        <td> {cartItem.product.categoryId} </td>
                        <td> {cartItem.product.productName} </td>
                        <td> {cartItem.product.unitPrice} </td>
                        <td> {cartItem.product.unitsInStock} </td>
                        <td> {cartItem.quantity} </td>
                        <td> <Button color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}> Remove </Button> </td>
                    </tr>
                ))}
                </tbody>

            </Table>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}

export default CartList;