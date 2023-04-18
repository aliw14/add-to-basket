if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]))
}

let buttons = document.querySelectorAll(".btn")

for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.previousElementSibling.src;
        let title = this.previousElementSibling.previousElementSibling.innerHTML;
        let price = this.previousElementSibling.innerHTML;

        let product_list = JSON.parse(localStorage.getItem("products"));


        let existproduct = product_list.find(items => items.Id == id)

        if (existproduct === undefined) {
            product_list.push({

                Id: id,
                Title: title,
                Image: src,
                Price: price,
                Count: 1,

            })
            document.querySelector(".toaster").innerHTML = "Succesfully added"
            document.querySelector(".toaster").style.backgroundColor = "green"


        }
        else {
            existproduct.Count += 1
            document.querySelector(".toaster").innerHTML = "Already added"
            document.querySelector(".toaster").style.backgroundColor = "red"

        }


        localStorage.setItem("products", JSON.stringify(product_list))
        document.querySelector(".toaster").style.right = "5%"
        setTimeout(() => {
            document.querySelector(".toaster").style.right = "-20%"

        }, 1000);
        showcount();

    }
}

function showcount() {
    let items = JSON.parse(localStorage.getItem("products"))
    document.querySelector("#count").innerHTML = items.length
}
showcount()