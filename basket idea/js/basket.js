function getproducts() {
    let items = JSON.parse(localStorage.getItem("products"));

    let alert_box = document.querySelector(".alert")

    if (items.length === 0) {
        alert_box.classList.remove("d-none")
        document.querySelector(".table").classList.add("d-none")
    }
    else {
        alert_box.classList.add("d-none")
        document.querySelector(".table").classList.remove("d-none")


        let x = ""
        items.forEach((item, index) => {
            x += `
            <tr>
                <td>
                <img src=${item.Image}>
                </td>
                <td>${item.Title}</td>
                <td>${item.Price}$</td>
                <td>${item.Count}</td>
                <td>${(item.Count)*(item.Price)}$</td>
                <td>
                <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
                </td>

          </tr>
          `


        })
        document.querySelector("tbody").innerHTML = x

        let deleteButtons = document.querySelectorAll('.delete-btn')
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                let index = this.dataset.index
                items.splice(index, 1)
                localStorage.setItem('products', JSON.stringify(items))
                getproducts()
            })
        })
    }

}
getproducts()
