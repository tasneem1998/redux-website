import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    data: state?.cardItems?.cardData
})
const mapDispatchToProps = dispatch => ({
    // no use for this component
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)