import { Outlet } from 'react-router-dom';
import './App.css';
import { MainAppLayout } from './components/layouts/layout';

function App() {
  return (
    <MainAppLayout>
      <Outlet />
    </MainAppLayout>
  );
}

export default App;
