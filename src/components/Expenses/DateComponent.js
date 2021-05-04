import React from 'react';
function ExpenseDate(props) {
    // console.log(props)
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    // const [month, day, year] = props.ken;
    return React.createElement(
        'div', { className: 'date' }, 
        React.createElement('div', {}, month), 
        React.createElement('div', {}, day), 
        React.createElement('div', {}, year)
    )
    // return(
    //     <div className='date'>
    //         <div>{props.ken[0]}</div>
    //         <div>{props.ken[1]}</div>
    //         <div>{props.ken[1]}</div>
    //         {/* <div>{month}</div>
    //         <div>{day}</div>
    //         <div>{year}</div> */}
    //     </div>
    // )

}

export default ExpenseDate;