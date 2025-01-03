import './style/reset.css'
import './style/scss/style.scss'
import './style/scss/header&footer.scss'
import './style/scss/aside.scss'
import './style/scss/sale-banner.scss'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
