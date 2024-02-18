export const BASE_URL ='https://dragonball-api.com/api/characters'

export const truncate=(str, maxlength)=> {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}