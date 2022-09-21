import React from 'react';

const Table = ({data}) => {
  return (
    <>
       <tr className='data'>
            <td>{data.salutation}</td>
            <td>{data.foreName}</td>
            <td>{data.surname}</td>
            <td>{data.telephone}</td>
          </tr>
    </>
  )
}

export {Table};