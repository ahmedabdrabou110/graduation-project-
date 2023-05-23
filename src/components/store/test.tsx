const fetchData = ()=>{
    fetch("0338-197-61-78-235.ngrok-free.app").then(response => response.json()).then(result => console.log(result)).catch(error => console.log(error));
}

fetchData()