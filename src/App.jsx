
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:8000/items";
  const [items, setItems] = useState([]);


  // loading from localstorage
 // const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  
  const [newItem, setNewItem] = useState("");

  const [searchItem, setSearchItem] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const[isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
     try {
       const response = await fetch(API_URL);
       if (!response.ok) throw Error("Did not recieve expected data");
       const listItems = await response.json();
       console.log(listItems);      
       setItems(listItems)
       setFetchError(null);
     } catch (error) {
       setFetchError(error.message);     
     } finally {
       setIsLoading(false);
     }
    }
    setTimeout(() => {
      (async ()=> await fetchItems())()
    }, 2000);
    

  },[])



  const additem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

    
  const handleCheck = (id) => {
    const listItems = items.map((item)=> item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    
  }

  const handleDelete = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!newItem) return
    additem(newItem)
    setNewItem("")
    
  }


  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        searchItem={searchItem}
        setSearchItem = {setSearchItem}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color: "red", fontFamily: "sans-serif"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
          setItem={setItems}
          handleCheck={handleCheck}
          handleDelete = {handleDelete}
        />} 
      </main>
      
      <Footer length={items.length } />
    </div>
  )
}

export default App
