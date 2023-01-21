import React from "react"
import { ActiveFilterContext } from "../../../contexts/ActiveFilterContext"
import { useContext } from "react"

export default function Filter(props) {
    const { activeFilter, setActiveFilter } = useContext(ActiveFilterContext)
    function handleClick() {
        let newFilters = [...activeFilter]
            .map(item => {
                if (item === props.filter) {
                    return {
                        "name": item.name,
                        "category": item.category,
                        "active": !item.active
                    }
                } else {
                    return item;
                }
            })
            .sort((c, d) => {
                if (c.name.toLowerCase() < d.name.toLowerCase()) {
                    return -1
                }
                if (c.name.toLowerCase() > d.name.toLowerCase()) {
                    return 1
                }
                return 0
            })
            .sort((a, b) => b.active - a.active)
            .sort((e, f) => {
                if (e.category.toLowerCase() < f.category.toLowerCase()) {
                    return -1
                }
                if (e.category.toLowerCase() > f.category.toLowerCase()) {
                    return 1
                }
                return 0
            }) 
        setActiveFilter(newFilters)
    }
    return (
        <button onClick={handleClick} className={props.filter.active ? "btn-active" :
            "btn-inactive"}>
            {props.children}
        </button>
    )
}