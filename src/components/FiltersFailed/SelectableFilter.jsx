import { useContext } from "react"
import { ActiveFilterContext } from '../contexts/ActiveFilterContext'

export default function SelectableFilter({ filterBranch }) {
    const { activeFilter, setActiveFilter } = useContext(ActiveFilterContext)
    function handleClick(branch, filter) {
        const activeFilterCopy = [...activeFilter];
        let valueToChange = activeFilterCopy.find(fBranch => fBranch.name === branch).value
            .find(bFilter => bFilter.name === filter.name).active

        valueToChange === true
            ? activeFilterCopy.find(fBranch => fBranch.name === branch).value
                .find(bFilter => bFilter.name === filter.name).active = false
            : activeFilterCopy.find(fBranch => fBranch.name === branch).value
                .find(bFilter => bFilter.name === filter.name).active = true;

        activeFilterCopy.find(fBranch => fBranch.name === branch).value
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
        setActiveFilter(activeFilterCopy);


        console.log(activeFilterCopy.find(fBranch => fBranch.name === branch).value
            .find(bFilter => bFilter.name === filter.name).active)

    }
    return (
        <div>
            <h4>{filterBranch.name}</h4>
            <div style={{ maxWidth: '200px', maxHeight: '200px', overflowY: "auto", flexDirection: "column", display: "flex" }}>
                {filterBranch.value.map((filter, index) => <button key={index}
                    onClick={() => handleClick(filterBranch.name, filter)}
                    style={{ backgroundColor: filter.active ? "red" : "grey", width: "100%" }}>
                    {filter.name}
                </button>)}
            </div>
        </div>
    )
}