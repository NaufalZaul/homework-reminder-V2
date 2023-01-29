import React from 'react'
import Button from '../utils/Button';
import CardList from '../utils/CardList';
import ControlDate from '../utils/ControlDate';

class Deadline extends React.Component {

  dataItem = () => JSON.parse(sessionStorage.getItem('data'));

  Date(a) {
    const dateDeadline = new Date(a);
    const dateNow = new Date(Date.now());
    const deadline = dateDeadline.getDate() - dateNow.getDate();
    return deadline;
  }

  componentDidMount() {
    const dtSession = this.dataItem();
    // dtSession bernilai [] / undefined
    dtSession == undefined ? "" :
      dtSession.map(a => {
        if (this.Date(a.deadline) < 5) {
          if (a.onStatus == "running") {
            const r = Object.create(a)
            r.onStatus = "deadline";
            Object.assign(a, r)
            sessionStorage.setItem('data', JSON.stringify(dtSession))
          }
        }
      })
  }


  render() {
    return (
      <div className='mb-5 px-4 lg:mx-5'>
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>

          <h1 className='text-2xl font-semibold ml-2'>The Deadline is Coming</h1>
        </div>
        <p className='ml-8 mb-10 text-lg text-slate-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


        {
          this.dataItem() == undefined ? "" :
            this.dataItem().map(element => {
              // if (this.Date(element.deadline) < 5) {
              if (element.onStatus == "deadline") {
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

export default Deadline;