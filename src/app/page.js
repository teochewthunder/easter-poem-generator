"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";

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
    const response = await fetch("/api/poemgen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Image className={styles.symbolImage} src="/symbol_bunny.jpg" alt="Bunny" width={100} height={100} />
        <input type="checkbox" name="symbol_bunny" value="bunny" onChange={handleChecking} checked={ (formData.symbol_bunny === "bunny") } />
        &nbsp;Bunny
        &nbsp;<a href="/symbols/bunny" target="_blank">Note</a>
        <br />
      </label>
      <label>
        <Image className={styles.symbolImage} src="/symbol_chicks.jpg" alt="Chicks" width={100} height={100} />
        <input type="checkbox" name="symbol_chicks" value="chicks" onChange={handleChecking} checked={ (formData.symbol_chicks === "chicks") } />
        &nbsp;Chicks
        &nbsp;<a href="/symbols/chicks" target="_blank">Note</a>
        <br />
      </label>
      <label>
        <Image className={styles.symbolImage} src="/symbol_cross.jpg" alt="Cross" width={100} height={100} />
        <input type="checkbox" name="symbol_cross" value="cross" onChange={handleChecking} checked={ (formData.symbol_cross === "cross") } />
        &nbsp;Cross
        &nbsp;<a href="/symbols/cross" target="_blank">Note</a>
        <br />
      </label>
      <label>
        <Image className={styles.symbolImage} src="/symbol_eggs.jpg" alt="Eggs" width={100} height={100} />
        <input type="checkbox" name="symbol_eggs" value="eggs" onChange={handleChecking} checked={ (formData.symbol_eggs === "eggs") } />
        &nbsp;Eggs
        &nbsp;<a href="/symbols/eggs" target="_blank">Note</a>
        <br />
      </label>
      <label>
        <Image className={styles.symbolImage} src="/symbol_lillies.jpg" alt="Lillies" width={100} height={100} />
        <input type="checkbox" name="symbol_lillies" value="lillies" onChange={handleChecking} checked={ (formData.symbol_lillies === "lillies") } />
        &nbsp;Lillies
        &nbsp;<a href="/symbols/lillies" target="_blank">Note</a>
        <br />
      </label>      
      <button type="submit">Submit</button>
    </form>
  );
}
