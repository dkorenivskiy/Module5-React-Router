import './App.css';
import React, { Component } from 'react'
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { ParrotStorage } from './ParrotStorage';
import StorageComponent from './components/StorageCompnent/StorageComponent';
import { Bucket } from './Bucket';
import BucketComponent from './components/BucketComponent/BucketComponent';

export const myBucket = new Bucket();
export const myStorage = new ParrotStorage();

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="List" element={<ListComponent />} />
        <Route path="Cart" element={<CartComponent />} />
      </Route>

      <Route path="*" element={<NoMatchComponent />} /> 
    </Routes>

  </div>
  );
}


function LayoutComponent() {
  const navigation = useNavigate();

  return (
    <div>
      <h1>Welcome to Parrot Store!</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/List">List</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}


const HomeComponent = () => {
  return (
    <div>
      <h2>If you want to buy parrots click on List</h2>
    </div>
  );
}

const ListComponent = () => {

  const { id } = useParams();

  return (
    <div>
      <h2>List of Parrots:</h2>
      <StorageComponent></StorageComponent>
    </div>
  );
}

const CartComponent = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <BucketComponent></BucketComponent>
    </div>
  );
}

const NoMatchComponent = () => {
  return (
    <div>
      <h2>Error!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
