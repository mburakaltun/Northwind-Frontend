import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import {Container, Row, Col} from "reactstrap";
import {Component} from "react";
import alertify from "alertifyjs";
import {Switch, Route} from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";

class App extends Component {

    state = {
        currentCategory: "",
        products: [],
        cart: []
    }

    componentDidMount() {
        this.getProducts();
    }

    changeCategory = category => {
        this.setState({currentCategory: category.categoryName})
        this.getProducts(category.id)
    }

    addToCart = product => {
        let newCart = this.state.cart;
        let addedItem = newCart.find(c => c.product.id === product.id);
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({product: product, quantity: 1});
        }
        this.setState({cart: newCart});
        alertify.success(product.productName + " is added to the cart!", 1);
    }

    removeFromCart = product => {
        let newCart = this.state.cart.filter(c => c.product.id !== product.id);
        this.setState({cart: newCart});
        alertify.error(product.productName + " is removed from the cart!", 1);
    }

    getProducts = categoryId => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data}));
        console.log(this.state.products)
    }

    render() {
        let productInfo = {title: "Product List"};
        let categoryInfo = {title: "Category List"}

        return (
            <div>
                <Container>
                    <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}> </Navi>
                    <Row>
                        <Col xs="3">
                            <CategoryList categoryInfo={categoryInfo} currentCategory={this.state.currentCategory}
                                          changeCategory={this.changeCategory}> </CategoryList>
                        </Col>
                        <Col xs="9">
                            <Switch>
                                <Route exact path={"/"} render={props =>
                                    <ProductList currentCategory={this.state.currentCategory} addToCart={this.addToCart}
                                                 productInfo={productInfo}
                                                 products={this.state.products}> </ProductList>}/>
                                <Route exact path="/cart" render={props =>
                                    <CartList cart={this.state.cart} removeFromCart={this.removeFromCart}>
                                    </CartList>}/>
                                <Route component={NotFound}/>
                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
