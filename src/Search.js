import React from 'react'
import { useState } from 'react';


export default function Search() {
    const arr = ['Aarav', 'Ayaan', 'Atharv', 'Avyan', 'Ashvik', 'Advik', 'Brayden', 'Bennett', 'Braxton', 'Caleb', 'Colton', 'Carson', 'Dhruvi', 'Divyansh', 'Griffin', 'Gideon', 'Zane', 'Zaiden', 'Kenneth', 'Kash', 'Roman', 'Richard', 'Nolan', 'Nash', 'Nasir', 'Madesh', 'Madhav'];

    const [name, changeName] = useState('');

    const Change = (event) => {
        changeName(event.target.value);
    }
    
    const onClick = (search) => {
        changeName(search);
    }

    return (
        <div>
            <input type='text' placeholder='Enter name to search' value={name} onChange={Change} />
            <div className='names'>
                {arr.filter(item => {
                    const searchItem = name.toLocaleLowerCase();
                    const tempName = item.toLocaleLowerCase();

                    return searchItem && tempName.startsWith(searchItem) && searchItem !== tempName;
                }).map(item => (
                    <p onClick={() => onClick(item)}>{item}</p>
                ))
                }
            </div>
        </div>
    )
}
