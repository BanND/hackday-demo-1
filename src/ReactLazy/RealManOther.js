import React, {useEffect, useState} from "react";
import dataDemo from "./DataDemoOther";
import '../App.css'

export default function RealManOther() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 3000);
    }, []);
    useEffect(() => {
        setIsLoading(!isDisplayed);
    },[isDisplayed]);

    return (
        <>
            <h1>Real man list: </h1>
            {isLoading && <div id="loading">Waiting...</div>}
            {isDisplayed &&
                dataDemo.map(data => (
                    <div id="card-body" key={data.id}>
                        <div className="card">
                            <h2>{data.name}</h2>
                            <p>Music: {data.genre}</p>
                            <p>Class level: {data.albums}</p>
                        </div>
                    </div>
                ))}
        </>
    );
}