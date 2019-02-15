import React from 'react'
import Moment from 'react-moment'


export default function Score({score, playername, created_at}) {
    return (
        <tr className="">
            <td className="">{score}</td>
            <td className="">{playername}</td>
            <td className=""><Moment fromNow>{created_at}</Moment></td>
        </tr>
    )
}