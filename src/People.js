import React from 'react';

const People = ({people}) => {
    const peopleList = people.map(people => {
        return (
            <div className="human" key={people.id}>
               {people.name}
            </div>
        )
    })
    return (
        <div className="people-list">
            {peopleList}
        </div>
    )
}

export default People