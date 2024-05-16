async function fetchData() {
  const response = await fetch("http://localhost:3000/user");
  const data = await response.json();

  data.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.roll_no}</td>
      <td>${student.name}</td>
      <td>${student.branch}</td>
      <td align="center">
        <button onclick="delete_data('${student.id}')">Delete</button>
        <button onclick="edit_data('${student.id}')">Edit</button>  
      </td>
    `;
    document.getElementById("tablebody").appendChild(row);
  });
}

function createData() {
  fetch("http://localhost:3000/user", {
    method: "POST",
    body: JSON.stringify({
      roll_no: parseInt(document.getElementById("roll_no").value),
      name: document.getElementById("name").value,
      branch: document.getElementById("branch").value,
    }),
  });
}

function edit_data(id) {
  fetch(`http://localhost:3000/user/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      roll_no: document.getElementById("roll_no").value,
      name: document.getElementById("name").value,
      branch: document.getElementById("branch").value,
    }),
  });
}

function delete_data(id) {
  fetch(`http://localhost:3000/user/${id}`, {
    method: "DELETE"
  });
}

async function searchData() 
{
  const roll = document.getElementById("rollNo").value;
  const response = await fetch(`http://localhost:3000/user`);
  
  const data = await response.json();
  const student = data.find(std => std.roll_no === parseInt(roll));
  const tb = document.getElementById("tablebd");
  tb.innerHTML="";
  if (student) 
  {
    const row = document.createElement("tr");

    
    row.innerHTML = `
      <td>${student.roll_no}</td>
      <td>${student.name}</td>
      <td>${student.branch}</td>
    `;

    
    tb.appendChild(row);
  }
   else 
  {
    alert("Student not found!");
  }
}


  
