 const url = "https://reqres.in/api/users";
   const table = document.getElementById("customerTable");
   
   
   function getCustomerList() {


 
  fetch(url).then((response) =>
    response.json().then((data) => {
     

    
      for(user of data.data){
       

        table.innerHTML += ` <tr>
        <td><input type="text" class="form-control" id="" value="
        ${user.first_name}"></td>
        <td><input type="text" class="form-control" id="" value="${user.last_name}"></td>
        <td><input type="text" class="form-control" id="" value="${user.email}"></td>
        
       </tr> `
      }
    })
  );
}

getCustomerList();


function refreshData(){
    getCustomerList();
}


function addCustomer(){
    let data={
        first_name:document.getElementById("first_name").value ||"deger yok ",
        last_name:document.getElementById("last_name").value ||"deger yok ",     
       email:document.getElementById("email").value ||"deger yok "
    }
        
        fetch(url,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
  
    table.innerHTML +=` <tr>
    <td><input type="text" class="form-control" id="" value="
    ${data.first_name}"></td>
    <td><input type="text" class="form-control" id="" value="${data.last_name}"></td>
    <td><input type="text" class="form-control" id="" value="${data.email}"></td>
    
   </tr> `



})

    
}




