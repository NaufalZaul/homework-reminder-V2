import React from 'react';
import CardList from '../utils/CardList';
import ControlDate from '../utils/ControlDate';
import Button from '../utils/Button';

class History extends React.Component {

    dataItem = () => {
        return JSON.parse(sessionStorage.getItem('data'))
    };

    render() {
        return (
            <div className='mb-5 px-4 lg:mx-5'>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <h1 className='text-2xl font-semibold ml-2'>History of The Homework</h1>
                </div>
                <p className='ml-8 mb-10 text-lg text-slate-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>                {
                    this.dataItem() == undefined ? "" :
                        this.dataItem().map(element => {
                            if (element.onStatus == "finish") {
                                return (
                                    <CardList
                                        deadline={<ControlDate date={element.deadline} />}
                                        time={element.time}
                                        button={<Button id={'delete'} value={element.id} />}
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

export default History;