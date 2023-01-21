import React from 'react'
import SwitchCard from '../components/Switches/SwitchCard'
import SwitchFilters from '../components/Switches/SwitchFilters'
import SwitchTable from '../components/Switches/SwitchTable'
import '../styles/Switches.scss'

export default function Switches() {
    
    return (
        <div className='Switches'>
            {/* <div>
                <h1>Filters</h1>
                <SwitchFilters></SwitchFilters>
            </div> */}
            <div>
                <h1>Switches</h1>
                <SwitchTable></SwitchTable>
            </div>
            
        </div>
    )
}