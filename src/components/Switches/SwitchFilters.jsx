import React, { useEffect } from "react";
import { useContext } from "react";
import { ActiveFilterContext } from "../../contexts/ActiveFilterContext"
import { namify } from "../../utils/formatting";
import FilterCard from "./Filters/FilterCard";
import FilterHeader from "./Filters/FilterHeader";
import Filter from "./Filters/Filter";

export default function SwitchFilters() {
    const { activeFilter, setActiveFilter } = useContext(ActiveFilterContext)
    let prevCat = null
    return (
        <div>
            {activeFilter.map((item, idx) => {
                if (item.category !== prevCat) {
                    prevCat = item.category
                    return (
                        <FilterCard key={idx}>
                            <FilterHeader>{namify(item.category)}</FilterHeader>
                            {activeFilter.map((filter, index) => filter.category === item.category && <Filter key={index} filter={filter}>{filter.name}</Filter>)}
                        </FilterCard>
                    )
                }
            })}
        </div>
    )
}