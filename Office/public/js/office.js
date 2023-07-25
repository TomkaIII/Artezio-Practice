async function getAllEmployees(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10');
    const employees = await res.json();

    console.log(employees);
    employees.forEach(element => employeesToHTML(element));
}


window.addEventListener('DOMContentLoaded', getAllEmployees)

// id,name,tecknology,worksplace + more
function employeesToHTML({userId,title,body,id}){
    const employees = document.getElementById('employees');

    employees.insertAdjacentHTML('beforeend',`
    <tr>
        <td>${userId}</td>
        <td>${title}</td>
        <td>${body}</td>
        <td>${id}</td>
        <td>More Info</td>
    </tr>
    `);
}