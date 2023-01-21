export default function SwitchCard({ kb_switch }) {    
    return (
        <tr className="row" style={{display: 'table-row'}}>
            <td className="cell"  style={{display: 'table-cell'}}>
                {kb_switch.brand}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.name}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.keystrokes === 'N/A' ? kb_switch.keystrokes : kb_switch.keystrokes + " m"}
            </td>            
            {kb_switch.switchType!== undefined && <td className="cell" style={{display: 'table-cell'}}>                
                {kb_switch.switchType.join(', ')}
            </td>}
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.opForce === 'N/A' ? kb_switch.opForce : kb_switch.opForce + " g"}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.tacForce === 'N/A' ? kb_switch.tacForce : kb_switch.tacForce + " g"}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.preTravel === 'N/A' ? kb_switch.preTravel : kb_switch.preTravel + " mm"}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.totalTravel === 'N/A' ? kb_switch.totalTravel : kb_switch.totalTravel + " mm"}
            </td>
            <td className="cell" style={{display: 'table-cell'}}>
                {kb_switch.stemType}
            </td>
        </tr>
    )
}