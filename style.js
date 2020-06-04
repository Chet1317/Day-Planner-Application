var dayTime = moment(new Date());
document.getElementById("currentDay").innerHTML = dayTime

for(var i=9; i<=17; i++){
    document.querySelector(".container-planner").innerHTML += 
    `<div class = "row">
    <div class = "hour col">${moment(i,"LT").format("hA")}</div>
<textarea class = "col-10" id="description"></textarea>
</div>`
}

