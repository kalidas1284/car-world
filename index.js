function storeRecords(){
    const records={
        brand:carid.value,
        price:priceid.value,
        key:keyid.value

    }
    if (records.brand==""||records.price==""||records.key=="")
    {
     alert("All Fields Required")
    }
    else{
        if(records.key in localStorage){
            alert("Data Already Exist")
        }
        else{
            localStorage.setItem(records.key,JSON.stringify(records))
            alert("Data Added Succesfully")
            document.getElementById("f1").reset()
        }
    }
    }

    //retreivin

   
   
    function retrieve(){
        let key=searchid.value

        if(key ==''){
            alert("Enter Key");
            console.log(key);
        }
        else{
        if(key in localStorage){
            item=JSON.parse(localStorage.getItem(key));
            console.log(`${item}`);
            result.innerHTML=`<div class="card" style="width: 100% ">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Brand:${item.brand}</li>
              <li class="list-group-item">Price:${item.price}</li>
              <li class="list-group-item">Key:${item.key}</li>
            </ul>
          </div>`;
          document.getAnimations("form2").reset()
          
        }
        else{
             
            alert('key not found');
            document.getElementById("form2").reset()
           
        }
    
    }
}
      






    // function searchCar(event){
    //     event.preventDefault();
    //     let key=searchKey.value;   
    
    //     if(key ==''){
    //         alert("Enter Key");
    //         console.log(key);
    //     }
    //     else{
            
    //         if(key in localStorage){
    //            let Car=JSON.parse(localStorage.getItem(key));
    //             console.log(`${Car}`);
                
    //             result.innerHTML=`<div class="bg-primary-subtle p-2 mt-2 border border-1 rounded shadow text-primary"><h5 class="text-center text-primary ">Car Details</h5>
    //             <p>Car Brand : ${Car.brand}</p>
    //             <p>Car Price : ${Car.price}</p>
    //             <p>Car Key   : ${Car.key}</p>
    //             </div>`;
    //             document.getElementById("form2").reset();
    //         }
    //         else{
    //             alert("Car Doesn't Exist in records")
    //             document.getElementById("form2").reset();
    //         }
    //     }
    
    // }




    
    

    function removeall(){
        localStorage.removeItem(deleteid.value)
        deleteid.value="";
        alert('Details removed successfully')
       
    }


    function clearall(){
        var c=confirm("The Data cannot be Retrieved After Clearing")
        if(c){
            localStorage.clear()
        }
        
    }
    

 
   
       
    
  
    

    
        

   
