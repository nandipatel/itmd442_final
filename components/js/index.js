// adding requests and messages based on the chnages and updates made on the app

$("#add_user").submit(function(event){
    alert("Employee Added Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    alert("Employee Updated Successfully!");
    
    $.ajax(request).done(function(){
        alert("Employee Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Are you sure you want to delete this employee?")){
            $.ajax(request).done(function(response){
                alert("Employee Deleted Successfully!");
                location.reload();
            })
        }

    })
}