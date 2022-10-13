import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {customToast} from '../customToast'



function Table({ title, data, column, actionNedded, collection ,editPath }) {

const navigation =useNavigate()
  function refreshPage() {
    window.location.reload(false);
  }
  const editData =(e,item)=>{
    e.preventDefault();
  
    navigation(
      editPath,
   {   state:{
        item:item
      }}
      
    );

  }
const deleteData=(e,id)=>{
  e.preventDefault();

  axios
  .delete(`http://localhost:5000/api/${collection}/delete/${id}`)
  .then((res) => {
    customToast("Successfully deleted",0);
    refreshPage();
  });


}


  return (


    <div className="card">
      <div className="card-header">
        <h4 className="card-title font-bold text-lg">{title}</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                {column.map((item) => <th key={item.value} className='font-bold'>{item.heading}</th>)}
                {actionNedded ? <th>action</th> : ""}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) =>
                <tr key={item._id}>
                  {column.map((columnItem, index) => {
                    console.log(columnItem.value)
                    return <td key={columnItem.value}>{item[`${columnItem.value}`]}</td>


                  })}

                  {actionNedded ? <td>
                    <button type="button" onClick={(e)=>editData(e,item)} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
                    &nbsp;| &nbsp;
                    <button type="button" onClick={(e)=>deleteData(e,item._id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>


                  </td> : ""}
                </tr>


              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}





export default Table