import React from 'react'

export default function Person(props) {
    // console.log(dataPerson)
    const { name , age } = props.personData;
    return (
        <div>
            my name is {name} age is {age}
        </div>
    )
}
