const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];


export default function PackingList(){
  return(
  <div className="list">
  <ul >
      {initialItems.map(item => (<Item item={item} key={item.id}/>))}
  </ul>
  </div>)
}

function Item({item}){
  console.log(item);
  const {id, description,quantity, packed} = item
  return <li>
    <span style={ packed ? {textDecoration : "line-through"} : {}}> {quantity} {description}</span>
    <button>❌</button>
    </li>
}