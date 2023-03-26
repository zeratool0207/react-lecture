import React, { useEffect, useState } from 'react'
import dummy from './dummy/dummy.json'

const Iteration = () => {
    const [ accounts, setAccounts ] = useState([]);

    useEffect( () => {
        setAccounts(dummy.accountList);
    }, [])

 const filtered = accounts.filter(account => {
    return account.id > 4;
 })

 console.log(filtered);

  return (
    <>
        <ul>
            {/* {accounts.map( account => (
                <li key = {account.id}>
                    {account.name}, {account.accountNumber}, {account.total}
                </li>
            ))} */}
           {filtered.map(filters => (
                 <li key = {filters.id}>
                    {filters.name}, {filters.accountNumber}, {filters.total}
                </li>
           ))}
        </ul>
    </>
  )
}

export default Iteration