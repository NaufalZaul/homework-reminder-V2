import React, { useState } from 'react';

// function deleteData(e) {
//   const [delData, setDelData] = useState(false);

  // e.preventDefault();
  // const a = JSON.parse(sessionStorage.getItem('data'))
  // const nomorIndex = (el) => el.id == e.currentTarget.value
  // const specificArr = a.findIndex(nomorIndex);
  // a.splice(specificArr, 1);

  // sessionStorage.setItem('data', JSON.stringify(a));

  // window.location.reload();
// }


// function moveHistory(e) {
//   e.preventDefault();
//   const a = JSON.parse(sessionStorage.getItem('data'))

//   console.log(a);

//   const specificArr = a.findIndex(el => el.id == e.currentTarget.value);
//   const y = a.indexOf(specificArr);
//   const x = a.at(y);

//   const u = Object.create(x)
//   u.onStatus = "finish";

//   Object.assign(x, u)
//   sessionStorage.setItem('data', JSON.stringify(a));
//   window.location.reload();
// }


export default function Button(props) {

  const moveHistory=(e)=> {
    e.preventDefault();
    const a = JSON.parse(sessionStorage.getItem('data'))
    a.map(y => {
      if (y.id == e.currentTarget.value) {
        y.onStatus = "finish";
        Object.assign(a, y)
        sessionStorage.setItem('data', JSON.stringify(a));
        window.location.reload();
      }
      
    })
  }
  
  const deleteData =(e)=> {

    e.preventDefault();
    const a = JSON.parse(sessionStorage.getItem('data'))
    const nomorIndex = (el) => el.id == e.currentTarget.value
    const specificArr = a.findIndex(nomorIndex);
    a.splice(specificArr, 1);
    
    sessionStorage.setItem('data', JSON.stringify(a));
    alert('Delete Data Success!!')
    
  window.location.reload();
}

  return (
    <button
      type='submit'
      id={props.id}
      onClick={props.id == 'delete' ? deleteData : moveHistory}
      className={ props.id == 'delete' ? 'bg-red-100 text-red-500 hover:bg-red-500 hover:text-white mr-2 p-2 pr-3 text-sm rounded-lg font-semibold' : 'bg-green-50 text-green-500 hover:bg-green-500 hover:text-white p-2 pr-3 text-sm rounded-lg font-semibold' }
    value={props.value}>
      {
        props.id == 'delete' ? <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> Delete</span> : <span className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg> Clear
        </span>
      }
    </button>
  );
}
