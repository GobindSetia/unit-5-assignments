
import './App.css';

function App() {
  const data = [
    { heading: "Mobile Operating System", list:["Android","BlackBerry","IOS","Windows Phone"]},
    { heading: "Mobile Manufacturers", list:["Samsung","HTC","Micromax","Apple"]},
  ];
  return (
    <div>
      {data.map((dataList) => (
        <MobileComponent heading={dataList.heading} list={dataList.list}/>
      ))}
    </div>
  );
}

function MobileComponent({ heading, list }) {
  return (
    <div className="">
      <h1>{heading}</h1>  
      <ul>
      {
        list.map((item,index)=>
          <li key={index}>{item}</li>
        )
      }
      </ul>    
    </div>
  );
};

export default App;
