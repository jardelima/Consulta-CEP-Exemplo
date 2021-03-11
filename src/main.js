const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}

cep.addEventListener("blur", (event) => {
    let search = cep.value.replace("-", "");
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then((response) => {
            response.json()
                .then((data) => showData(data))
        })
        .catch((event) => console.log("Deu erro: " + event, message))
})