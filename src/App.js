
// import Grettings from "./function_components/Grettings";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// codevalution
import {Grettings} from "./function_components/Grettings";
import Welcome from "./class_components/Class_com_grettings";
import JsxEx from "./ce_jsx_example/Jsx_ex";
import PropsDemo from './c_props/FunctionCom';
import PropsDemoClass from './c_props/ClassComponent';
import ChnageStateButton from './state/CbuttonTextChnage';
import Counter from './state/Counter';
import Counter5time from './state/Count5Times';
import DestructeProps from './CDestructuringPropsAndState/FCOmponent';
import DestructeClassProps from './CDestructuringPropsAndState/ClassComponent';
import BindingInRender from './EventHandleWithBind/BindInRender';
import UsingArrowWithoutBinding from './EventHandleWithBind/ArrowFunction';
import BindingOnConstructor from './EventHandleWithBind/BindInConstructor';
import DefineArrowHandleFUnction from './EventHandleWithBind/HandleFUnctionAsArrowFunction';
// sumit
import Clock from "./class_components/S_Clock";
import Fun_clock from "./function_components/S_fun_clock";
import ManualComponenet from './ce_jsx_example/Diffrence';
import Runstate from './state/RunState';
import ButtonClick from './EventHandeling/ButtonClick';


//const place = ['ar-SA',"bn-BD","bn-IN"]

function App() {
  return (
    <div className="App">
        <div className='border container p-3'>
          <h1 className='text-center'>codevalution example</h1>
          <Grettings/>
          <Welcome/>
          <JsxEx/>
          <ManualComponenet />
          <div className='container border p-2'>
            <h1>props example(function component)</h1>
            <PropsDemo name='nahian' id='1'>
              <p>nahian  property</p>
              <p>nahian  property</p>
            </PropsDemo>
            <PropsDemo name='niloy' id='2'>
              <button className='btn btn-dark'>Niloys buttton</button>
            </PropsDemo>
            <div className='container border'>
              <h2 className='text-center'>state example</h2>
              <ChnageStateButton/>
              <div className='container border'>
                  <div className='row'>
                    <div className='col-3'>
                      <Counter/>
                    </div>
                    <div className='col-3'>
                      <Counter5time/>
                    </div>
                  </div>
              </div>
            </div>
            <div className='container border'>
              <h1 className='bg-dark text-white text-center p-3'>Destructe </h1>
              <div className='row'>
                <div className='text-center col border'>
                  <p className='text-center'>FUnctional component </p>
                  <DestructeProps name='nahian' id = '8185'/>
                </div>
                <div className='text-center col border'>
                  <p>Destructe Class Props</p>
                  <DestructeClassProps name='nahian' id = '8185'/>
                </div>
              </div>
            </div>
            
            <div className='container shadow-sm'>
              <h1 className='text-center'>Bindings</h1>
              <div className='row'>
                <div className='col border'>
                  <BindingInRender/>
                </div>
                <div className='col border'>
                  <UsingArrowWithoutBinding/>
                </div>
                <div className='col border'>
                  <BindingOnConstructor/>
                </div>
                <div className='col border'>
                  <DefineArrowHandleFUnction/>
                </div>
              </div>
            </div>
            {/* running ! */}
            <div className='container border p-3'>
              <div className='row'>
                <div className='col'>
                  
                </div>
              </div>
            </div>
          </div>

          <div className='container border p2'>
            <h1>props example(Class component)</h1>
            <PropsDemoClass name="nahian">
              <p className='border'>Childern</p>
              <p className='border'>Childern</p>
              <p className='border'>Childern</p>
              <p className='border'>Childern</p>
            </PropsDemoClass>
            <PropsDemoClass name="niloy">
            <p className='border'>Childern</p>
            <p className='border'>Childern</p>
            <p className='border'>Childern</p>
            </PropsDemoClass>
          </div>
        </div>

        <br></br>
        <div className='container border'>
          <h1 className='text-center'>SUMIT example</h1>
          <h1>class Based  component bangladesh Time:</h1><Clock local="bn-BD"/>
          <h1>class Based  component Arab  Time:</h1><Clock local="ar-SA"/>
          <div className='container border'>
              <div className='row border'>
                <div  className='col-4 border p-2'>
                  <Runstate local='bn-BD'/>
                </div>
                <div className='col-3 border p-2'>
                  <Runstate local='ar-SA'/>
                </div>
              </div>
          </div>
          <div className='container border p-3'>
              <h3>button Click Event chnage</h3>
              <div className='row p-3'>
                <div className='col-4 border'>
                  <ButtonClick/>
                </div>
              </div>
            </div>
          <Fun_clock place_data="ar-SA"/>
        </div>
        

        
      
      
      

      
    </div>
  );
}

export default App;
