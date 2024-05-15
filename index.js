function getData() {
    const val = document.getElementById('id1').value;
    const url = `http://localhost:3000/users/${val}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            function generateTable(data) {
                var tableBody = document.getElementById("tablebody");
                tableBody.innerHTML = '';
                data.forEach((element) => {
                    var row = document.createElement("tr");

                    // Iterate over the keys of the object
                    Object.keys(element).forEach((key) => {
                        var cell = document.createElement("td");
                        cell.textContent = element[key]; // Access property by key
                        row.appendChild(cell);
                    });

                    tableBody.appendChild(row);
                });
            }

            generateTable(data);
            console.log(data); // Logging data for debugging purposes
        });
}


function deleteData( )
{
    const val= document.getElementById('id2').value;
    const url = `http://localhost:3000/users/${val}`;
    fetch(url,{method:"DELETE"}).then(response => response.json( )).then(data => console.log(data)).catch(err=>console.log(`Error in deleteing data :${err}`))
}
function createData( )
{
    const xhr = new XMLHttpRequest( );
    xhr.open("POST","http://localhost:3000/users");
    //xhr.setRequestHeader('Content-type')
    id1 = document.getElementById('id').value;
    no1 = parseInt(document.getElementById('no').value);
    names= document.getElementById('name').value;
    email1= document.getElementById('email').value;
    const newData={
                        id:id1,
                        no:no1,
                        name:names,
                        email:email1

                  };
    const jsondata = JSON.stringify(newData);
    xhr.send(jsondata);
}

function updateData( )
{
    const val = document.getElementById("idd").value;
    no1 = document.getElementById('noo').value;
    names= parseInt(document.getElementById('namee').value);
    email1= document.getElementById('emaill').value;
    const updatedData={
                        id:val,
                        no:no1,
                        name:names,
                        email:email1

                  };
    fetch(`http://localhost:3000/users/${val}`,{method:"PATCH",header:{'Content-Type':'application/json'},
                                                        body:JSON.stringify(updatedData)}).then(response=>{
                                                                                                             if(!response.ok)
                                                                                                                 throw new Error("Ntework response not ok ");
                                                                                                            return response.json( );
                                                                                                                                                            
                                                                                                           }).catch(err=>console.log("Cannot update data due:"+err));
}
