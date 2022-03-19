function update() {
    let bill = parseInt(document.getElementById("yourBill").value) 
    let tipPercent = parseInt(document.getElementById("tipInput").value)
    let split = parseInt(document.getElementById("splitInput").value)
    
    bill = bill || 0
    let tip = bill * tipPercent/100

    let writePercent = document.getElementById("tipPercent")
    writePercent.innerText = `${tipPercent} %`

    let tipValue = document.getElementById("tipValue")
    tipValue.innerText = tip

    let totalWithTip = document.getElementById("totalWithTip")
    totalWithTip.innerText = bill + tip

    let splitValue = document.getElementById("splitValue")
    splitValue.innerText = `${split} person`

    let billEach = document.getElementById("billEach")
    billEach.innerText = (bill + tip)/split
    
    let tipEach = document.getElementById("tipEach")
    tipEach.innerText =tip/split
    
    console.log({bill, tipPercent, split})

}