import './style/reset.css'
import './style/scss/style.scss'
import './style/scss/header&footer.scss'
import './style/scss/aside.scss'
import './style/scss/sale-banner.scss'
import './style/scss/busket.scss'
import './style/scss/favourite.scss'
import './style/scss/registration.scss'

import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} basename="/Shop-tuff"/>
    </Provider>
  );
}

export default App;
