const save = (key, data) => {
    localStorage.setItem(key, data);
  }
  
  
  const remove = (key) => {
    localStorage.removeItem(key);
  }
  
  const get = (key) => {
    const value = localStorage.getItem(key)
    return value
  }
  
  
  
  export default {
    get,
    save,
    remove,
  }