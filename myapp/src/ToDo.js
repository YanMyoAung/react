import { useState } from "react";

let toDoList = [
  { title: "Wake Up Early ", id: 3 },
  { title: "Walk 10000 steps", id: 1 },
  { title: "Do HomeWork", id: 2 },
  { title: "Do Exercise", id: 4 },
];

export default function ToDo() {
  return <List lists={toDoList} />;
}

function List({ lists }) {
  const [newlists, setNewLists] = useState(lists);
  const [title, setTitle] = useState("");

  let rows = [];

  function checkList(id) {
    const updatedlist = newlists.map((item) =>
      item.id === id ? { ...item, checked: !item.checked || false } : item
    );
    setNewLists(updatedlist);
  }

  newlists.forEach((list) => {
    rows.push(
      <ListRows
        list={list}
        key={list.id}
        checkList={() => checkList(list.id)}
      />
    );
  });

  const saveList = () => {
    if (title.trim() !== "") {
      const newlist = [
        ...newlists,
        { title: title.trim(), id: newlists.length + 1 },
      ];
      const sortedList = newlist.sort((a, b) => a.id - b.id);
      setNewLists(sortedList);
      setTitle("");
    }
  };

  const deleteList = () => {
    const updatedlist = newlists.filter((n) => n.checked !== true);
    setNewLists(updatedlist);
  };

  return (
    <fieldset>
      <legend>TO DO LIST</legend>
      <div>{rows}</div>
      <UpdateList
        saveList={saveList}
        deleteList={deleteList}
        onTitleChange={setTitle}
        title={title}
      />
    </fieldset>
  );
}

function ListRows({ list, checkList }) {
  return (
    <>
      <input
        type="checkbox"
        id={list.id}
        onChange={checkList}
        checked={list.checked || false}
      />
      <label
        htmlFor="walk"
        onClick={checkList}
        style={{ textDecoration: list.checked ? "line-through" : "none" }}
      >
        {list.title}
      </label>
      <br />
    </>
  );
}

function UpdateList({ title, saveList, deleteList, onTitleChange }) {
  return (
    <div>
      <input
        type="text"
        id="todotitle"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <br />
      <button onClick={saveList}>SaveList</button>
      <button onClick={deleteList}>Delete List</button>
    </div>
  );
}
