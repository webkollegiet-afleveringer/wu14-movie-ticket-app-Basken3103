import "./Seat.scss";


export default function Seat({reserved = false, selected = false}) {

  return (

     <label className="seat">
      <input className="seat__checkbox" type="checkbox" defaultChecked={selected} disabled={reserved} />
    </label>

  )
}