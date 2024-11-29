import React from 'react';
import ReactDOM from 'react-dom/client';
import Faculties from './Faculties';
import DemoCondition from './DemoCondition';
import DemoStyle from './DemoStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <Faculties />
    <DemoCondition name="arjun" isEdit={true}/>
    <DemoCondition name="vijay sir" isEdit={false}/>
    <DemoCondition name="deepa" isEdit={true}/>
    <DemoCondition name="ravi" isEdit={false}/> */}

    <DemoStyle/>
  </>
);