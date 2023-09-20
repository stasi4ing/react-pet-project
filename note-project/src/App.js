import { useState } from "react";

function App() {

  const [text, setText] = useState([]);
  const [userText, setUserText] = useState('');
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState('');

  function id() {
    let str = '';
        for (let i = 0; i < 16; i++) {
          str += Math.floor(Math.random()*10);
        }
        return str;
  }

  function enterTextUser (userText) {
    const userTask = {
      id: id(),
      discriprion: userText,
      head: userText.slice(0, 6),
      edit: false
    }
    setText([...text, userTask]);
  }


  function deleteTask(ind) {
    setText([...text.slice(0, ind), ...text.slice(ind+1)])
      }

  function editNote (index) {
    text.map((item, ind) => {
      if (ind == index) {
        item.edit = !item.edit
        setUserText(item.discriprion);
      }
      setText([...text])
    })
  }

  function saveChanges(index) {
    text.map((item, ind) => {
      if (ind == index) {
        item.discriprion = userText;
        item.head = userText.slice(0, 6);
        item.edit = !item.edit;
      }
      setUserText('');
      setText([...text]);
    })
  }

  function enterTask(id) {
    text.map((item) => {
      if (item.id == id) {
        setUserText(item.discriprion)
      }
    })
  }
  
    const res = text.map((item, index)=>{
      return (search == '' ? (item.edit ?
  
        <p>processing... <button onClick={() => saveChanges(index)}>save changes</button></p>
  
        :<span key={item.id}><p onClick={() => enterTask(item.id)}>{item.head}</p>
        <button onClick={() => editNote(index)}>edit</button>
        <button onClick={()=>deleteTask(index)}>delete</button>
        <hr />
        </span>)

        : <p key={item.id} onClick={() => enterTask(item.id)}>{item.discriprion.startsWith(search)
           ?
           <><p>{item.head}</p>
           <button onClick={() => editNote(index)}>edit</button>
           <button onClick={()=>deleteTask(index)}>delete</button>
        <hr /></>
        :''}</p>
      );
    });

  return (
    <div>
      <h1 className="header">Записная книжка</h1>
      <div className="menuBar" id="parent">
        <input placeholder="search note" value={search} onChange={(e) => setSearch(e.target.value)} />
        {res}
      </div>
      <div>
            <textarea cols="60" rows="25"  value={userText} onChange={(e) => setUserText(e.target.value)}/>
            <br />
            <button onClick={() => {enterTextUser(userText); setUserText('')}}>save</button>
        </div>
    </div>
  );
}

export default App;
