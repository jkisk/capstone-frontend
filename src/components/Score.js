import React from 'react'


export default function Score({score, id, created_at}) {
    return (
        <tr className="">
            <td className="">{score}</td>
            <td className="">{id}</td>
            <td className="">{created_at}</td>
        </tr>
    )
}