import React from 'react'
import ReactDOM from 'react-dom'
import { RouterConfig } from "./RouterConfig";
import { AuthContextProvider } from "./AuthContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterConfig />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
