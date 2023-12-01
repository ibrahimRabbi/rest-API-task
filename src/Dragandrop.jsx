import React, { useState } from 'react';
import 'react-anything-sortable/sortable.css';
const Sortable = require('react-anything-sortable')
var SortableItem = require('./SortableItem');


const App = () => {

    const [data, setData] = useState('')
    const [initialImg, setinititial] = useState('https://i.ibb.co/Sm3qjm6/photo-modified.png')




    const hellohendler = (e) => {
        e.preventDefault();
        console.log('hover')
    }

    const dropHandler = (e) => {
        e.preventDefault()
        setinititial('')
        setData('https://i.ibb.co/Sm3qjm6/photo-modified.png')
    }

    const handleSort = () => {
        console.log('hello')
    }

    return (
        <div className='flex gap-10'>
            <Sortable onSort={handleSort}>
                <SortableItem sortData="1" />
                <SortableItem sortData="2" />
            </Sortable>
            <div draggable className=' w-48 h-36 cursor-move'>
                <img className='w-[100%]' src={initialImg} />
            </div>

            <div onDrop={dropHandler} onDragOver={hellohendler} className='border w-48 h-36'>
                <img className='w-[100%]' src={data} />
            </div>
        </div>
    );
};

export default App;