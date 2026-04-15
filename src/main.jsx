import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Pages
import Home from './pages/Home/Home.jsx';

import { AnimatePresence } from "framer-motion"


import { VisibilityProvider, useScreen } from './providers/VisibilityProvider.jsx';

import { debugData } from './utils/debugData.jsx';


const routes = {
  home: <Home />,
};


debugData([{
	action: "UpdateUserData",
	data: {},
}]);

debugData([{
	action: "setVisible",
	data: true,
}]);

const Router = () => {
	const { screen } = useScreen();
	return (
		<>
			{routes[screen]}
		</>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisibilityProvider>
		<AnimatePresence>
			<Router />
		</AnimatePresence>
    </VisibilityProvider>
  </React.StrictMode>,
);