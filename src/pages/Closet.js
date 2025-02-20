
import React, { useState, useEffect} from "react";
import ClothingItem from "../components/ClothingItem";
import './Closet.css'

function Closet() {
  const [clothes, setClothes] = useState([]);
  const [newClothing, setNewClothing] = useState({ name: "", type: "", color: "", image: "" });


    // Load clothing data from localStorage when component mounts
  useEffect(() => {
    const savedClothes = JSON.parse(localStorage.getItem("clothes"));
    if (savedClothes) {
      setClothes(savedClothes);
    }
  }, []);

    // Save clothing data to localStorage whenever clothes state changes
  useEffect(() => {
    localStorage.setItem("clothes", JSON.stringify(clothes));
  }, [clothes]);

  const addClothing = () => {
    if (!newClothing.name || !newClothing.type || !newClothing.color) {
      alert("Please fill in all the fields!")
      return; 
    }
    setClothes([...clothes, newClothing]);
    setNewClothing({ name: "", type: "", color: "", image: "" }); // Reset form
  };

  const generateRandomOutfit = () => {
    if (clothes.length === 0) {
      alert("No clothes available");
      return;
    }
    const randomItem = clothes[Math.floor(Math.random() * clothes.length)];
    alert('Your outfit: ${randomItem.name} ({$randomItem.type}, ${randomItem.color})');
  };

  return (
    <div class = "container1">
      <h1 class = "header">My Closet</h1>
      <div class = "inputs">
        <input type="text" placeholder="Name" value={newClothing.name} onChange={(e) => setNewClothing({ ...newClothing, name: e.target.value })} />
        <input type="text" placeholder="Type" value={newClothing.type} onChange={(e) => setNewClothing({ ...newClothing, type: e.target.value })} />
        <input type="text" placeholder="Color" value={newClothing.color} onChange={(e) => setNewClothing({ ...newClothing, color: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newClothing.image} onChange={(e) => setNewClothing({ ...newClothing, image: e.target.value })} />
        <button onClick={addClothing}>Add Clothing</button>
        <button onClick={generateRandomOutfit}>Get Random outfit</button>
      </div>
      <div className="items">
        {clothes.map((item, index) => (
          <ClothingItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Closet;
