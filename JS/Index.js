let ElList = document.querySelector('#OrderList')

function LocalStorageSet(){
    if (localStorage.length == 0){
        localStorage.setItem("CupcakeCount", 0)
        localStorage.setItem("LoadedFriesCount", 0)
        localStorage.setItem("CookieCount", 0)
        localStorage.setItem("SundaeCount", 0)
    }
}

LocalStorageSet()

let CupcakeCount = localStorage.getItem("CupcakeCount");
let LoadedFriesCount = localStorage.getItem("LoadedFriesCount");
let CookieCount = localStorage.getItem("CookieCount");
let SundaeCount = localStorage.getItem("SundaeCount");

function AddToList(){
    if (document.getElementById('CupcakeCount') == null){
        ElList.innerHTML += "<div class='OrderItem' id='CupcakeCount'><h2>Cupcake</h2><p>You currently have " + CupcakeCount + " \
        orders of cupcakes in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"CupcakeCount\")'>&#8722;\
        </button><button type='button' onclick='AddToOrderList(\"CupcakeCount\")'>&#43;</button></div>\
        </div>"
    }
    else{
        document.getElementById('CupcakeCount').innerHTML = "<h2>Cupcake</h2><p>You currently have " + CupcakeCount + " orders of \
        cupcakes in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"CupcakeCount\")'>&#8722;</button>\
        <button type='button' onclick='AddToOrderList(\"CupcakeCount\")'>&#43;</button></div>\
        "
    }
    if (document.getElementById('LoadedFriesCount') == null){
        ElList.innerHTML += "<div class='OrderItem' id='LoadedFriesCount'><h2>Loaded Fries</h2><p>You currently have\
        " + LoadedFriesCount + " orders of loaded fries in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList\
        (\"LoadedFriesCount\")'>&#8722;</button><button type='button' onclick='AddToOrderList(\"LoadedFriesCount\")'>\
        &#43;</button></div></div>"
    }
    else{
        document.getElementById('LoadedFriesCount').innerHTML = "<h2>Loaded Fries</h2><p>You currently have " + LoadedFriesCount + " \
        orders of loaded fries in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"LoadedFriesCount\")'>&#8722;</button>\
        <button type='button' onclick='AddToOrderList(\"LoadedFriesCount\")'>&#43;\
        </button></div>"
    }
    if (document.getElementById('CookieCount') == null){
        ElList.innerHTML += "<div class='OrderItem' id='CookieCount'><h2>Cookie</h2><p>You currently have " + CookieCount + " \
        orders of cookies in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"CookieCount\")'>&#8722;\
        </button><button type='button' onclick='AddToOrderList(\"CookieCount\")'>&#43;</button>\
        </div></div>"
    }
    else{
        document.getElementById('CookieCount').innerHTML = "<h2>Cookie</h2><p>You currently have " + CookieCount + " orders of \
        cookies in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"CookieCount\")'>&#8722;</button>\
        <button type='button' onclick='AddToOrderList(\"CookieCount\")' '>&#43;</button></div>"
    }
    if (document.getElementById('SundaeCount') == null){
        ElList.innerHTML += "<div class='OrderItem' id='SundaeCount'><h2>Sundae</h2><p>You currently have " + SundaeCount + " \
        orders of sundaes in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"SundaeCount\")'>&#8722;\
        </button><button type='button' onclick='AddToOrderList(\"SundaeCount\")'>&#43;</button>\
        </div></div>"
    }
    else{
        document.getElementById('SundaeCount').innerHTML = "<h2>Sundae</h2><p>You currently have " + SundaeCount + " orders of \
        sundaes in your basket</p><div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"SundaeCount\")'>&#8722;</button>\
        <button type='button' onclick='AddToOrderList(\"SundaeCount\")'>&#43;</button></div>"
    }
}

//Because out params don't exist in javascript, this just became 50x longer code
function OrderList(FoodItem){
    if("CupcakeCount" == FoodItem){
        CupcakeCount++;
    }
    if("LoadedFriesCount" == FoodItem){
        LoadedFriesCount++;
    }
    if("CookieCount" == FoodItem){
        CookieCount++;
    }
    if("SundaeCount" == FoodItem){
        SundaeCount++;
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)
}

function RemoveFromOrderList(FoodItem){
    if("CupcakeCount" == FoodItem){
        CupcakeCount--;
        if (CupcakeCount < 0){
            CupcakeCount = 0
        }
    }
    if("LoadedFriesCount" == FoodItem){
        LoadedFriesCount--;
        if (LoadedFriesCount < 0){
            LoadedFriesCount = 0
        }
    }
    if("CookieCount" == FoodItem){
        CookieCount--;
        if (CookieCount < 0){
            CookieCount = 0
        }
    }
    if("SundaeCount" == FoodItem){
        SundaeCount--;
        if (SundaeCount < 0){
            SundaeCount = 0
        }
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)

    AddToList()
}

function AddToOrderList(FoodItem){
    if("CupcakeCount" == FoodItem){
        CupcakeCount++;
    }
    if("LoadedFriesCount" == FoodItem){
        LoadedFriesCount++;
    }
    if("CookieCount" == FoodItem){
        CookieCount++;
    }
    if("SundaeCount" == FoodItem){
        SundaeCount++;
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)

    AddToList()
}

function ClickedACard(CardParent, Count, FoodItem){
    CardParent.querySelector('p').innerHTML = "You have ordered " + Count + " " + FoodItem
}