export default function Order (props) {
    console.log(props)
    return (
        <div>
            {props.order.cart.map((car) => (
                <p>{car.make}</p>
            ))}
        </div>
    )
}