
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
//14
import BindingInRender from './EventHandleWithBind/BindInRender';
import UsingArrowWithoutBinding from './EventHandleWithBind/ArrowFunction';
import BindingOnConstructor from './EventHandleWithBind/BindInConstructor';
import DefineArrowHandleFUnction from './EventHandleWithBind/HandleFUnctionAsArrowFunction';
//15
import ParentComponent from './c_props/propsASmethod/parentComponent';
import ParentReciver from './c_props/passPerameter/Parent';
//16
import IfelseConditions from './conditinalRendering/UsingIfElse/condiftions';
import RetrunAsVariable from './conditinalRendering/ElementsVariable/RetrunVariableAsCondition';
import ternaryOperator from './conditinalRendering/ternaryOperator/ternaryOperatorCondiftion';
import ShortCondition from './conditinalRendering/shortCircuit/ShortConditionApproach';
//17 render list
import RenderList from './ListRender/listRender';
import ObjectInsideListRender from './ListRender/ObjectInsideListRender';
import PersonDataComponent from './ListRender/DevideComponent/personData';
//19 index as key
import NameAskey from './ListIndexAskey/UseNameAskey';
import IndexAsKey from './ListIndexAskey/UseIndexAsKey';
//21 form handle
import FormTest from './FormHandle/FormTest';

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
              <h2 className='rounded text-center border btn-dark p-2'>state example</h2>
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
              <h1 className='text-center border btn-dark p-2'>Bindings</h1>
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
            
            <div className='container border p-3'>
              <h1 className='text-center border btn-dark p-2'>Passing  props </h1>
              <h2>parent child component realtion</h2>
              <div className='row'>
                <div className='col'>
                  <h3>Passing method as props</h3>
                 <ParentComponent/>
                </div>
                <div className='col'>
                  <h3>Pass parameter wtih click handle</h3>
                  <ParentReciver/>
                </div>
              </div>
            </div>
            
            <div className='container p-1 border'>
              <h3 className='text-center border btn-dark p-2'>Conditional rendering</h3>
              <div className='row'>
                <div className='col'>
                  <p className='bg-info'>Direct condition</p>
                  <IfelseConditions/>
                </div>
                <div className='col'>
                  <p className='bg-info'>set on variable and retrun</p>
                  <RetrunAsVariable/>
                </div>
                <div className='col'>
                  <p className='bg-info'>Using ternary Operator</p>
                  <ternaryOperator/>
                </div>
                <div className='col'>
                  <p className='bg-info'>Short condition</p>
                  <ShortCondition/>
                </div>
              </div>
            </div>

            <div>
              <div className='container m-1 border'>
                <h3 className='text-center border btn-dark p-2'>Rendering List </h3>
                <div className='row'>
                  <div className='col p-3 border rounded shadow p-3'>
                    <p>render list using map</p>
                    <RenderList/>
                  </div>
                  <div className='col p-3 border rounded shadow p-3'>
                    <h3>object inside list</h3>
                    <ObjectInsideListRender/>
                  </div>
                  <div className='col p-3 border rounded shadow p-3'>
                    <h3>Devide component</h3>
                    <PersonDataComponent/>
                  </div>
                </div>
              </div>
            </div>

            <div className='container p-1'>
              <h3 className='text-center border btn-dark p-2 shadow-sm'>Index as key</h3>
              <div className='row broder p-2'>
                <div className='col p-3 border rounded shadow p-3'>
                  <p>Using name as key</p>
                  <NameAskey/>
                </div>
                <div className='col p-3 border rounded shadow p-3'>
                  <p>Use index as key</p>
                  <IndexAsKey/>
                </div>
              </div>
            </div>

            <div className='container'>
              <h3 className='text-center border btn-dark p-2 shadow-sm'>Form Test</h3>
              <FormTest/>
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
