import React from 'react';
import CardList from '../utils/CardList';
import ControlDate from '../utils/ControlDate';
import Button from '../utils/Button';



class Running extends React.Component {

  dataItem = () => {
    return JSON.parse(sessionStorage.getItem('data'))
  };

  render() {
    return (
      <div className='mb-5 px-4 
      lg:mx-5'>
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          <h1 className='text-2xl font-semibold ml-2'>Homework List</h1>
        </div>
        <p className='ml-8 mb-10 text-lg text-slate-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        {
          this.dataItem() == undefined ? "" :
            this.dataItem().map(element => {
              if (element.onStatus == "deadline" || element.onStatus == "running") {
                return (
                  <CardList
                    deadline={<ControlDate date={element.deadline} />}
                    time={element.time}
                    button={<Button id={'finish'} value={element.id} />}
                    label={element.label}
                    description={element.description}
                  />
                )
              }
            })
        }
      </div >
    )
  }
}

export default Running;