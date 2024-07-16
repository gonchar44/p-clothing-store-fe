import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@gonchar44/react-components-pack'
import App from './App.tsx'
import '@assets/styles/global.css'
import { Provider } from 'react-redux'
import { store } from '@store'
import { theme } from '@config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
