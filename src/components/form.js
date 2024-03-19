export default function Form(){
  return (<form className="add-form">
    <h3>What do you need for your trip?</h3>
    <select>
      {Array.from({length:20}, (_,i)=> i +1).map((e) =>( <option value={e} key={e}>{e}</option>))}
    </select>
    <input type="text" placeholder="item..."/>
    <button>add</button>
  </form>)
}