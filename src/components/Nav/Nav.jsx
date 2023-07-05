import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Nav (props){
    const {onSearch} = props;
    return(
        <div className = {style.container}>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}