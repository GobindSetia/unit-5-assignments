
import './index.css';

function indexHTML(){
    return `
    <h1>Shopping List</h1>
    <form id="form">
      <label>Item</label>
      <input type="text" placeholder="Enter an Item" id="item" />
      <label>Quantity</label>
      <input
        type="number"
        placeholder="Enter required quantity"
        id="quantity"
      /><br />
      <label>Priority</label>
      <select name="" id="priority">
        <option value="">----</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="submit" value="submit" />
    </form>
    <hr />
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Priority</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>`;
}


export default indexHTML;