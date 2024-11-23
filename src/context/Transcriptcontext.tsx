import React from "react";

const TranscriptContext = React.createContext("");

const TranscriptProvider = ({ children}) => {
    const [transcript, setTranscript] = React.useState("");

    return (
        <TranscriptContext.Provider value={{transcript, setTranscript}}>
        {children}
        </TranscriptContext.Provider>
    );
}

export { TranscriptContext, TranscriptProvider };