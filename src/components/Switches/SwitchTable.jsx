import SwitchCard from './SwitchCard'
import { useContext, useEffect, useState } from 'react'
import { ActiveFilterContext } from '../../contexts/ActiveFilterContext'
import '../../styles/SwitchTable.scss'
export default function SwitchTable() {
    const switches = require('../../data/switches_dev.json')
    const { activeFilter, SetActiveFilter } = useContext(ActiveFilterContext)
    const [filteredSwitches, setFilteredSwitches] = useState([switches])

    // useEffect(() => {
    //     if(activeFilter.every(item => item.active === false)){
    //         setFilteredSwitches(switches)
    //     }
    //     activeFilter.forEach(filter => {
    //         if(filter.active){
    //             if(filter.category === 'brand'){
    //                 setFilteredSwitches(switches.filter(kb_switch => kb_switch.brand === filter.name))
    //             }
    //         }
    //     })
    // }, [activeFilter])

    return (
        <div className='tablecontainer'>
            <table >
                <thead>
                    <tr>
                        <th><h1>Brand</h1></th>
                        <th><h1>Name</h1></th>
                        <th><h1>Keystroke</h1></th>
                        <th><h1>Switch Type(s)</h1></th>
                        <th><h1>Operation force</h1></th>
                        <th><h1>Tactile force</h1></th>
                        <th><h1>Pre-travel</h1></th>
                        <th><h1>Total travel</h1></th>
                        <th><h1>Stem type</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {switches.map((kb_switch, index) => <SwitchCard key={index} kb_switch={kb_switch}></SwitchCard>)}
                </tbody>
            </table>
        </div>
    )
}