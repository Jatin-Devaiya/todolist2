import { useState } from "react";

const Todo = () => {

    const [inputdata, setinputdata] = useState("")
    const [item, setitem] = useState([])
    const [togglesubmit,settogglesubmit] = useState(true)
    const [edititems, setedititem] = useState(null)

    const Additem = () => {
        if (!inputdata) {
            alert("plz. fill data")
        }else if(inputdata && !togglesubmit){
                 setitem (
               item.map((elem)=>{
                    if(elem.id === edititems){
                        return {...elem,name:inputdata}
                    }
                    return elem;
                })
            )
            settogglesubmit(true)
            setinputdata("") 
            setedititem(null)
        }
         else {
            const allupdatedata = { id: new Date().getTime().toString(), name: inputdata }
            setitem([...item, allupdatedata])
            setinputdata("")
        }
    }


    const deleteitem = (index) => {
        const updateitem = item.filter((elem) => {
            return index !== elem.id
        })
        setitem(updateitem)
    }
    const removeall = () => {
        setitem([])
    }
    const edititem = (id) => {
        const edit = item.find((elem) => {
            return elem.id === id
        })                                          
        console.log(edit)       
        settogglesubmit(false)

        setinputdata(edit.name) 
        setedititem(id)
    }
            
    return (
        <>
            <p>Todo List</p>

            <h1>Add Your List Hear</h1>
            <div>
                <input type="text" placeholder="Add Item" value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
                {togglesubmit ? <button title="Update Item" onClick={Additem}>+</button>:<button title="Add Item" onClick={Additem}>Edit</button> }
                
            </div><br />

            {item.map((element) => {
                return (
                    <>
                        <div key={element.id}>
                            <h3>{element.name}</h3>
                            {/* <p>{element.id}</p> */}
                            <button tital="Edit" onClick={() => edititem(element.id)}>Edit</button>
                            <button title="Remove Item" onClick={() => deleteitem(element.id)} >-</button>

                        </div>
                        <br />
                    </>
                )
            })}

            <button onClick={removeall}>Remove All</button>
        </>
    )
}
export default Todo;