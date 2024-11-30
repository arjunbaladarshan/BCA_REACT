import st1 from './dev1.module.css';
import st2 from './dev2.module.css';
import Menu from './parts/Menu';
function DemoStyle(){
    return(
        <>
            <h1 className={st1.myClass}>Hello World</h1>
            <h1 className={st2.myClass}>How Are You?</h1>
        </>
    );
}

export default DemoStyle;