export const namify = (name) => {
    return name[0].toUpperCase()+name.slice(1, name.length).toLowerCase().replace("_", " ")
}