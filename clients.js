let x=14
x=90
var y = 20
console.log(x+y)

function sumTwoNumbers(){
    return 4+5
}

function changeContent(){

    document.getElementById("toChange").innerHTML="cambiado desde javascript"
}

function getCostumes(){
    //elemento del DOM->document object model
    const $responseContainer=document.getElementById("response");
    // $responseContainer.innerHTML='texto agregado desde javascript';
    $.ajax({
        url:"https://gf65f826b9fa93a-e0n2twaj2ejtoo63.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/COSTUMES",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            console.log(response.items)
            for(let x=0;x<response.items.length;x++){
                const costume= response.items[x];
                $responseContainer.innerHTML+=`
                id:${costume.idcostume}
                nombre:${costume.name} 
                descripción:${costume.description} 
                años:${costume.year} 
                marca:${costume.brand} 
                categoría:${costume.idcategory}                
                <br>
                `;
            }
        }
    })
}

function createCostume(){
    
    let dataToSend={
        "idcostume": parseInt( $("#id").val()),
        "name":$("#name").val(),
        "brand":$("#brand").val(),
        "year":parseInt($("#year").val()),
        "description":$("#description").val(),
        "idcategory": parseInt($("#idCategory").val())
    }
    dataToSend=JSON.stringify(dataToSend);   

    const settings = {
        "url": "https://gf65f826b9fa93a-e0n2twaj2ejtoo63.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/COSTUMES",
        "method": "POST",        
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend,        
      };
      
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

}

function updateCostume(){
    
    let dataToSend={
        "idcostume": parseInt( $("#id").val()),
        "name":$("#name").val(),
        "brand":$("#brand").val(),
        "year":parseInt($("#year").val()),
        "description":$("#description").val(),
        "idcategory": parseInt($("#idCategory").val())
    }
    dataToSend=JSON.stringify(dataToSend);   

    const settings = {
        "url": "https://g389439032223da-bxtdn7v5dsb6tede.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        "method": "PUT",        
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend,        
      };      
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

}

function deleteCostume(){
    
    let dataToSend={
        "idcostume": parseInt( $("#id").val()),        
    }
    dataToSend=JSON.stringify(dataToSend);   

    const settings = {
        "url": "https://g389439032223da-bxtdn7v5dsb6tede.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costumes",
        "method": "DELETE",        
        "headers": {
          "Content-Type": "application/json"
        },
        "data": dataToSend,        
      };      
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

}

console.log(sumTwoNumbers())
changeContent()
getCostumes()