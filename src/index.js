import React from 'react';
import ReactDOM from 'react-dom/client';
import Faculties from './Faculties';
import DemoCondition from './DemoCondition';
import DemoStyle from './DemoStyle';
import DemoEvent from './DemoEvent';
import DemoCalc from './DemoCalc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './parts/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Faculties />} />
          <Route path="/calc" element={<DemoCalc/>}/>
          <Route path="/style" element={<DemoStyle/>} />
          <Route path="/event" element={<DemoEvent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);