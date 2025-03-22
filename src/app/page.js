"use client"

import Link from "next/link";
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

  const [generation, setGeneration] = useState({
    poem: ""
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
    setGeneration( { poem: "<h2>Pease wait...</h2>" } );

    const response = await fetch("/api/poemgen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();

    if (response.status === 200) {
      setGeneration( { poem: result.message } );
    } else {
      console.log(result);
    }
  };

  return (
    <div className={styles.generationContainer} >
      <form onSubmit={handleSubmit}>
        <h1>Generate an Easter Poem!</h1>
        <b>Include at least one of these elements</b>
        {
          Object.entries(formData).map(([key, value]) => (
          <label className={styles.label} key={key}>
            <input type="checkbox" name={key} value={key.replace("symbol_", "")} onChange={handleChecking} checked={ (formData[key] === key.replace("symbol_", "")) } />
            &nbsp;{key.replace("symbol_", "")}
            &nbsp;<Link href={ ("/" +key.replace("_", "/")) } target="_blank">&#9658;</Link>
            <br />
          </label>
        ))}    
        <button type="submit" className={styles.button}>Go!</button>
        <br style={{ clear:"both" }} />
      </form>
      <div className={styles.poemContainer} dangerouslySetInnerHTML={{ __html: generation.poem }} />
    </div>
  );
}
