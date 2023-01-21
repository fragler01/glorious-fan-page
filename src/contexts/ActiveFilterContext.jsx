import React from "react"
export const ActiveFilterContextDefaults = {
    value: require('../data/filters_expanded.json')
        .sort((c, d) => {
          if (c.name.toLowerCase() < d.name.toLowerCase()) {
            return -1
          }
          if (c.name.toLowerCase() > d.name.toLowerCase()) {
            return 1
          }
          return 0
        })
        
        .sort((e, f) => {
          if (e.category.toLowerCase() < f.category.toLowerCase()) {
            return -1
          }
          if (e.category.toLowerCase() > f.category.toLowerCase()) {
            return 1
          }
          return 0
        }),
    // value: [],
    setValue: () => {}
}

export const ActiveFilterContext = React.createContext(ActiveFilterContextDefaults)