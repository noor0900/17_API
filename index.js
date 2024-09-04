const tbody = document.querySelector("tbody");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => (handleDisplay(data)
    ));


function handleDisplay(data) {
    if (data.length > 0) {
        tbody.innerHTML = "";
        data.map((ele, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${ele.name}</td>
                    <td>${ele.email}</td>
                    <td>${ele.phone}</td>
                    <td>${ele.company.name}</td>
                </tr>
            `;
        });
    }
};
