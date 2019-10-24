var button = d3.select("#filter-btn");

button.on("click", function () {

    var inputElement = d3.select("#datetime");
    console.log(inputElement)

    var inputValue = inputElement.property("value");
    console.log(inputValue)
    console.log(tableData)

    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData)

    var filteredTable = d3.select("tbody");
    filteredTable.html("");

    function table(data) {
        data.forEach((element) => {
            var row = filteredTable.append("tr");
            Object.values(element).forEach((value) => {
                var cell = row.append("td");
                cell.text(value);
                console.log(value)
            });
        });
    };
    table(filteredData)

});


