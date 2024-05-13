export class Basket{
    items = [];
    carthtml = document.querySelector("#cart");
    addProduct(product){
       product.quantity = 1;
       this.items.push(product);
       this.render();
    }


    render(data = this.items){
        this.carthtml.innerHTML = "";
        data.forEach(book =>{
            let tr = document.createElement("tr");
            let titleTd = document.createElement("td");
            let priceTd = document.createElement("td");
            let quantityTd = document.createElement("td");
            let subtotalTd = document.createElement("td");
            let actionsTd = document.createElement("td");

            titleTd.innerText = book.title;
            priceTd.innerText = book.price + " AMD";
            quantityTd.innerText = book.quantityTd;
            subtotalTd.innerText = book.price* book.quantity + " AMD";

            tr.append(titleTd);
            tr.append(priceTd);
            tr.append(quantityTd);
            tr.append(subtotalTd);
            tr.append(actionsTd);

            this.carthtml.append(tr);
        })
        
    }
}