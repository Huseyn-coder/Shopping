const al = document.querySelector("#al")
const name = document.querySelector("#name")
const price = document.querySelector("#price")
const card = document.querySelector("#card")
al.addEventListener("click", function() {
    if(name.value.trim() == "" && typeof name.value !== String ) {
        alert("Mehsul qeyd edin!")
    }
    else if (price.value.trim() == "") {
        alert("qiymet daxil edin (sadece reqem)")
    }
    else {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const btn = document.createElement("button")
    btn.innerHTML = `Sebete elave et <br> +`
    h2.innerHTML = name.value
    p.innerHTML = price.value + "$"
    div.append(h2, p, btn)
    card.append(div)
    
    btn.addEventListener("click", function(){
        var say = 1
        btn.style.display = "none"
       const btn1 = document.createElement("button")
       const span = document.createElement("span")
       const btn2 = document.createElement("button")
       const article = document.createElement("article")
       const btn3 = document.createElement("button")
       btn3.innerHTML = "Sil"
       btn3.style.marginLeft = "50%"
       btn1.innerHTML = "-"
       btn2.innerHTML = "+"
        span.innerHTML = "1"
        article.append(btn1, span, btn2, btn3)
        div.append(article)

        btn3.addEventListener("click", function() {
            div.style.display = "none"
        })

        btn1.addEventListener("click", function(){
            --say
            if(say == -1) {
                say++
                alert("mehsulu sifirlamisiz")
            }
            else {
                span.innerHTML = say
            }
            console.log("sayin deyeri", say)
            })
            btn2.addEventListener("click", function() {
                say++
                span.innerHTML = say
                console.log("sayin deyeri", say)
        })
    })
    }
    name.value = ""
    price.value = ""
})