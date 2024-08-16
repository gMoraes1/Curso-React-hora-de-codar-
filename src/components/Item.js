import PropTypes from 'prop-types'

function Item ({marca, anoLancamento}) {
    return(
<>
<li>{marca}</li>
</>
    )
}
Item.protoTypes = {
    marca: PropTypes.string
}
export default Item