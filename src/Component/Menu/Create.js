import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const tempStorage = []

class Create extends React.Component {

  componentDidMount() {
    const getKey = sessionStorage.getItem('data');

    if (getKey === null) {
      sessionStorage.setItem('data', JSON.stringify([]));
    } else {
      const parseGetKey = JSON.parse(window.sessionStorage.getItem('data'));
      sessionStorage.setItem('data', JSON.stringify(parseGetKey))
    }
  }

  inputValue() {
    const label = document.getElementById('name-label').value;
    const deadline = document.getElementById('deadline').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    return {
      id: +new Date(), label, deadline, time, description, onStatus: 'running'
    }
  }

  click = () => {
    const data = this.inputValue();
    tempStorage.push(data);
    sessionStorage.setItem('data', JSON.stringify(tempStorage));
  };


  render() {
    return (
      <div className='mb-5 px-4 lg:mx-5'>
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-indigo-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <h1 className='text-2xl font-semibold ml-2'>Create Reminder</h1>
        </div>
        <p className='ml-8 text-lg text-slate-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='mt-5 lg:w-9/12 '>
          <div className='flex flex-col px-3'>
            <div className='flex flex-col mb-4'>
              <label for="name-label" className='mb-2'>Label Name</label>
              <input type="text" name="name-label" id="name-label" className='border-none rounded my-1 py-2 px-3 bg-slate-100 focus-visible:outline-indigo-900' placeholder='Lorem Ipsun' />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className='flex flex-col'>
                <label for="deadline" className='mb-2'>Deadline</label>
                {/* <input type="text" onFocus={ () => { return this.setState({ type: "date" }) } } name="deadline" id="deadline" className='border-none rounded my-1 py-2 px-3 bg-slate-100 focus-visible:outline-indigo-900' placeholder='Label Name' /> */}
                <input type="date" name="deadline" id="deadline" className='border-none rounded my-1 py-2 px-3 bg-slate-100 focus-visible:outline-indigo-900' placeholder='Label Name' />
              </div>
              <div className='flex flex-col'>
                <label for="time" className='mb-2'>Time</label>
                <input type="time" name="time" id="time" className='border-none rounded my-1 py-2 px-3 bg-slate-100 focus-visible:outline-indigo-900' />
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <label for="description" className='mb-2'>Description</label>
              <textarea name="description" id="description" className='h-48 border-none rounded my-1 py-2 px-3 bg-slate-100 focus-visible:outline-indigo-900' placeholder="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></textarea>
            </div>
            <button type="submit" className='border-none rounded bg-indigo-900 text-white p-2 lg:w-48' onClick={this.click}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Create;