export const toCapitalize = (val) => {
    let capitalletter = val.charAt(0).toUpperCase();
    let therest = val.slice(1);
    return `${capitalletter}${therest}`;
}