const url = 'http://localhost:4000/cartelera'

const getData=async()=>{
    const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }   
  }); 
const json = await response.json();
console.log(json);     
return json;
}

export default getData;


