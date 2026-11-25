import FromPeople from './Components/FromPeople'

function App() {
        let [dark, setDark] = useState("")
          let [appClass, setAppClass] = useState("app")
  console.log(dark);
  return (
    <div  className={`${appClass} ${dark}`}>
      <FromPeople setDark={setDark}/>
    </div>
    
  )
}

export default App
