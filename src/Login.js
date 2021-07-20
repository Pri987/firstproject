import './Login.css';
import React from 'react';

const Login = () => {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState('');
  const [showList, setShowList] = React.useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    if (name === '') {
      alert("Please Enter Username!");
    } else {
      const newList = list.concat({ name });
      setList(newList);
      setName('');
    }
  }

  function handleShow() {
    if (list.length === 0) {
      alert("List is Empty!!");
    } else {
      const changeShow = !showList;
      setShowList(changeShow);
    }
  }

  function handleRemove() {
    if (list.length === 0) {
      alert("List is Empty!!");
    } else {
      const newList = list.slice(1);
      setList(newList);
    }
  }

  return (
    <div className='outerDiv'>
      <div>
        <input className='innerDiv' type="text" value={name} onChange={handleChange} placeholder='Enter Username...' />
        <button className='innerDiv' type="button" onClick={handleAdd}>Add</button>
        <button className='innerDiv' type="button" onClick={handleRemove}>Remove</button>
        <button className='innerDiv' type="button" onClick={handleShow}>Show</button>
      </div>

      <ul>
        {showList && list.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
