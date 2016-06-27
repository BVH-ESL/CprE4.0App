$(document).ready(function() {
  $.getJSON("http://127.0.0.1:3000/students", function() {
    console.log( "success" );
  })
  .done(function(data) {
    // console.log(data);
    getDataToTable(data);
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
});

function getDataToTable(data){
  var table = document.getElementById("list");
  // var tbody = table.createTBody();
  for(var i=0; i<data.length; i++){
    var row = table.insertRow();
    var cellNum   = row.insertCell(0);
    var cellName  = row.insertCell(1);
    var cellSudentId = row.insertCell(2);
    var cellDepartment = row.insertCell(3);
    cellNum.innerHTML = i+1;
    cellName.innerHTML = data[i].name.fristName + " " + data[i].name.lastName;
    cellSudentId.innerHTML = data[i].studentID;
    cellDepartment.innerHTML = data[i].department;
  }
}
