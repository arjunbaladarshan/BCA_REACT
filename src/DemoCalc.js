import React from 'react'
import Menu from './parts/Menu';

const DemoCalc = () => {
    let data = "";

    let handleData = (e)=>{
        data += e.target.innerText;
        console.log(data);
    };
    
  return (
    <>
        <table>
            <tr>
                <td colSpan={4}>
                    <input type='text' />
                </td>
            </tr>
            <tr>
                <td><button onClick={handleData}>1</button></td>
                <td><button onClick={handleData}>2</button></td>
                <td><button onClick={handleData}>3</button></td>
                <td><button onClick={handleData}>+</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>4</button></td>
                <td><button onClick={handleData}>5</button></td>
                <td><button onClick={handleData}>6</button></td>
                <td><button onClick={handleData}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>7</button></td>
                <td><button onClick={handleData}>8</button></td>
                <td><button onClick={handleData}>9</button></td>
                <td><button onClick={handleData}>*</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>0</button></td>
                <td><button onClick={handleData}>.</button></td>
                <td><button onClick={handleData}>/</button></td>
                <td><button>=</button></td>
            </tr>
        </table>
    </>
  )
}

export default DemoCalc;