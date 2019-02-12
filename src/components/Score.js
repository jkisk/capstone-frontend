import React from 'react'


export default function Score({score, playername, created_at}) {
    return (
        <tr className="">
            <td className="">{score}</td>
            <td className="">{playername}</td>
            <td className="">{created_at}</td>
        </tr>
    )
}