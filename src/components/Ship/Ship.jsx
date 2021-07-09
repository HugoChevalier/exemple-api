import './ship.css'

const Ship = ({ ship }) => (

    <div className="ship">
        <div>Name: {ship.displayname}</div>
        <div>Type: {ship.subType}</div>
    </div>
)

export default Ship
