'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    symbol_bunny: "bunny",
    symbol_chicks: "",
    symbol_cross: "",
    symbol_eggs: "",
    symbol_lillies: ""
  });

  const handleChecking = (e) => {
    const { name, value, checked } = e.target;
    var finalValue = (checked ? value : "");

    var tempFormData = JSON.stringify(formData);
    tempFormData = JSON.parse(tempFormData);
    tempFormData[name] = finalValue;

    if (tempFormData.symbol_bunny + tempFormData.symbol_chicks + tempFormData.symbol_cross + tempFormData.symbol_eggs + tempFormData.symbol_lillies === "") {
      finalValue = value;
    }

    setFormData({
      ...formData,
      [name]: finalValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Image
          className={styles.symbolImage}
          src="/symbol_bunny.jpg"
          alt="Bunny"
          width={100}
          height={100}
        />
        <input 
          type="checkbox" 
          name="symbol_bunny" 
          value="bunny" 
          onChange={handleChecking} 
          checked={ (formData.symbol_bunny == "bunny") } 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
