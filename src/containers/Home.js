import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/actions";

const mapStateToProps = state => ({
    data: state?.cardItems?.cardData
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: (data) => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)