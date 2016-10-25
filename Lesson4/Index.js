
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        var list = document.querySelector('.Table_header');

        console.log(data);

        var headerTitles = "";

            for (var key in data[0]) {

                headerTitles = headerTitles + "<th>" + key + "</th>";
            }

        var bodyData = "";

        data.forEach(function(item){

            bodyData = bodyData + "<tr>";

            for (var key in item) {

                var node = item[key];

                if (key === "address" || key === "company"){

                    var nodeContent = "<ul>";

                   for (var key2 in item[key]){

                       node  = node + "<li>" + key2 + " : " + item[key][key2] + "</li>";
                   }
                }
                bodyData = bodyData + "<td><pre>" + node + "</pre></td>";
            }
            bodyData = bodyData + "</tr>";

        });

        var bodyList = document.querySelector('.Table_body');

        list.innerHTML = headerTitles;
        bodyList.innerHTML = bodyData;
    });



















