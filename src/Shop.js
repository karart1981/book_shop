import {Basket} from './Basket.js';

export class Shop {
    list = document.querySelector("#list");
    dropdown = document.querySelector("#filter");
    cart = new Basket();

    constructor(){
        this.dropdown.onchange = () => this.filter();
        this.render();
    }
    render(data = this.products){
       this.list.innerHTML = "";
       data.forEach(book => {
          let div = document.createElement("div");
          div.classList.add("col-md-4");
          div.classList.add("ms-8");

          let img = document.createElement("img");
          img.src = book.photo;
          img.style.width = "150px";
          img.style.height = "200px";
          div.append(img);
          let p = document.createElement("p");
          p.innerText = `${book.title} by ${book.author}`;
          div.append(p);
          
          let price = document.createElement("p");
          price.innerText = book.price + " AMD";
          price.classList.add("text-danger");
          div.append(price);

          let move = document.createElement("button");
          move.innerText = "move";
          move.className = "btn btn-dark";
          move.onclick = ()=> this.cart.addProduct(book)

          div.append(move);
          this.list.append(div);
       })
    }

    products = [
        { id: 101, genre: "tech", title: "React.js", author: "Marjinyan", price: 20000, photo: "https://zangakbookstore.am/uploads/images/products/a7b016f1708f6ddc9f8515a68942180b.jpeg" },
        { id: 102, genre: "tech", title: "JavaScript", author: "Marjinyan", price: 20000, photo: "https://media.licdn.com/dms/image/D4E22AQFSlaphsltKnA/feedshare-shrink_800/0/1693815106336?e=2147483647&v=beta&t=nJvwnjOTCnHYm6dpVzd0zqJCO0AvLMNJYGpuqwZj_Z4" },
        { id: 103, genre: "tech", title: "Code", author: "Petzold", price: 27000, photo: "https://m.media-amazon.com/images/I/515myo2UtFL._AC_UF1000,1000_QL80_.jpg" },
        { id: 104, genre: "tech", title: "JavaScript", author: "Flanagan", price: 20000, photo: "https://m.media-amazon.com/images/I/91hUer84PpL._AC_UF1000,1000_QL80_.jpg" },
        { id: 105, genre: "tech", title: "You don't know JS", author: "Simpson", price: 20000, photo: "https://m.media-amazon.com/images/I/81zWsOMWE4L._AC_UF1000,1000_QL80_.jpg" },
        { id: 106, genre: "science", title: "Psychology", author: "DK", price: 14000, photo: "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg" },
        { id: 107, genre: "science", title: "Physics", author: "DK", price: 12500, photo: "https://m.media-amazon.com/images/I/814VZlo2tXL._AC_UF1000,1000_QL80_.jpg" },
        { id: 108, genre: "science", title: "Biology", author: "DK", price: 11500, photo: "https://m.media-amazon.com/images/I/71uK5avBUcL._AC_UF1000,1000_QL80_.jpg    " },
        { id: 109, genre: "science", title: "Literature", author: "DK", price: 27800, photo: "https://m.media-amazon.com/images/I/71PxSVND4ZS._AC_UF350,350_QL80_.jpg" },
        { id: 110, genre: "science", title: "Poetry", author: "DK", price: 10000, photo: "https://m.media-amazon.com/images/I/71vTizEz8aL._AC_UF1000,1000_QL80_.jpg" },
    ]

    filter(){
        let opt = this.dropdown.value;
        console.log(opt);
        if(opt == "all"){
            this.render();
        } else if(opt == "science"){
           this.render(this.products.filter(a => a.genre == "science"));
        } else if(opt == "tech"){
            this.render(this.products.filter(a => a.genre == "tech"));
        }
        
    }
}