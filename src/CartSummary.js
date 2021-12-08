import React, {Component} from "react";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Badge} from "reactstrap";

export default class CartSummary extends Component {
    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem>
                            <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}> X </Badge>
                            {cartItem.product.productName}
                            <Badge color="secondary"> {cartItem.quantity} </Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        Empty Cart
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}