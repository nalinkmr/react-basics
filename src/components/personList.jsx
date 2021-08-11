import React from 'react'
import Person from './person'
export default function personList() {
    const persons = [
        { name: 'John' , age : 54, id:1 },
        { name: 'Jane' , age : 64, id:11},
        { name: 'kane' , age : 54, id:111}
    ]
    const personList = persons.map(element => <Person key={element.id} personData={element} />)
    console.log(personList)

    return (
        <div>
            {personList}
        </div>
    )
}
