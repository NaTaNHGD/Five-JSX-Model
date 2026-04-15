import React, { createContext, useContext, useEffect, useState } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { fetchNui } from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityCtx = createContext(null);


const ScreenContext = createContext();


export const VisibilityProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState('home');

  useNuiEvent("changePage", setScreen);
  
  useNuiEvent("setVisible", setVisible);

  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e) => {
      if (["Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  return (
    <VisibilityCtx.Provider value={{ visible, setVisible }}>
      <ScreenContext.Provider value={{ screen, setScreen }}>
        <div style={{ visibility: visible ? "visible" : "hidden"}}>
          {children}
        </div>
      </ScreenContext.Provider>
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityCtx);
export const useScreen = () => useContext(ScreenContext);


