let ElList = document.querySelector('#OrderList')

function LocalStorageSet(){
    if (localStorage.length == 0){
        localStorage.setItem("CupcakeCount", 0)
        localStorage.setItem("LoadedFriesCount", 0)
        localStorage.setItem("CookieCount", 0)
        localStorage.setItem("SundaeCount", 0)
        localStorage.setItem("FunnelCakeCount", 0)
        localStorage.setItem("MilkshakeCount", 0)
        localStorage.setItem("CandyCount", 0)
    }
}

LocalStorageSet()

let CupcakeCount = localStorage.getItem("CupcakeCount");
let LoadedFriesCount = localStorage.getItem("LoadedFriesCount");
let CookieCount = localStorage.getItem("CookieCount");
let SundaeCount = localStorage.getItem("SundaeCount");
let FunnelCakeCount = localStorage.getItem("FunnelCakeCount");
let MilkshakeCount = localStorage.getItem("MilkshakeCount");
let CandyCount = localStorage.getItem("CandyCount");

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
    if("FunnelCakeCount" == FoodItem){
        FunnelCakeCount++;
    }
    if("MilkshakeCount" == FoodItem){
        MilkshakeCount++;
    }
    if("CandyCount" == FoodItem){
        CandyCount++;
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)
    localStorage.setItem("FunnelCakeCount", FunnelCakeCount)
    localStorage.setItem("MilkshakeCount", MilkshakeCount)
    localStorage.setItem("CandyCount", CandyCount)
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
    if("FunnelCakeCount" == FoodItem){
        FunnelCakeCount--;
        if (FunnelCakeCount < 0){
            FunnelCakeCount = 0
        }
    }
    if("MilkshakeCount" == FoodItem){
        MilkshakeCount--;
        if (MilkshakeCount < 0){
            MilkshakeCount = 0
        }
    }
    if("CandyCount" == FoodItem){
        CandyCount--;
        if (CandyCount < 0){
            CandyCount = 0
        }
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)
    localStorage.setItem("FunnelCakeCount", FunnelCakeCount)
    localStorage.setItem("MilkshakeCount", MilkshakeCount)
    localStorage.setItem("CandyCount", CandyCount)

    UpdateCardText('CupcakeCount', CupcakeCount, 'Cupcake')
    UpdateCardText('LoadedFriesCount', LoadedFriesCount, 'Loaded Fries')
    UpdateCardText('CookieCount', CookieCount, 'Cookie')
    UpdateCardText('SundaeCount', SundaeCount, 'Sundae')
    UpdateCardText('FunnelCakeCount', FunnelCakeCount, 'Funnel Cake')
    UpdateCardText('MilkshakeCount', MilkshakeCount, 'Milkshake')
    UpdateCardText('CandyCount', CandyCount, 'Candy')
    // AddToList()
}

function AddToOrderList(FoodItem){
    //AddToOrderList('CupcakeCount')
    if('CupcakeCount' == FoodItem){
        CupcakeCount++;
    }
    if('LoadedFriesCount' == FoodItem){
        LoadedFriesCount++;
    }
    if("CookieCount" == FoodItem){
        CookieCount++;
    }
    if("SundaeCount" == FoodItem){
        SundaeCount++;
    }
    if("FunnelCakeCount" == FoodItem){
        FunnelCakeCount++;
    }
    if("MilkshakeCount" == FoodItem){
        MilkshakeCount++;
    }
    if("CandyCount" == FoodItem){
        CandyCount++;
    }
    
    localStorage.setItem("CupcakeCount", CupcakeCount)
    localStorage.setItem("LoadedFriesCount", LoadedFriesCount)
    localStorage.setItem("CookieCount", CookieCount)
    localStorage.setItem("SundaeCount", SundaeCount)
    localStorage.setItem("FunnelCakeCount", FunnelCakeCount)
    localStorage.setItem("MilkshakeCount", MilkshakeCount)
    localStorage.setItem("CandyCount", CandyCount)

    UpdateCardText('CupcakeCount', CupcakeCount, 'Cupcake')
    UpdateCardText('LoadedFriesCount', LoadedFriesCount, 'Loaded Fries')
    UpdateCardText('CookieCount', CookieCount, 'Cookie')
    UpdateCardText('SundaeCount', SundaeCount, 'Sundae')
    UpdateCardText('FunnelCakeCount', FunnelCakeCount, 'Funnel Cake')
    UpdateCardText('MilkshakeCount', MilkshakeCount, 'Milkshake')
    UpdateCardText('CandyCount', CandyCount, 'Candy')
}

function ClickedACard(CardParent, Count, FoodItem){
    CardParent.querySelector('p').innerHTML = "You have ordered " + Count + " " + FoodItem
}

function UpdateCardText(CardParent, Count, FoodItem){
    ElList.querySelector("#" + CardParent).innerHTML = "<h2>"+ FoodItem +"</h2><p>You currently have " + Count + " orders of " + FoodItem.toLowerCase() + " in your basket</p>\
    <div class='ButtonContainer'><button type='button' onclick='RemoveFromOrderList(\"" + CardParent + "\")'>&#8722;</button>\
    <button type='button' onclick='AddToOrderList(\"" + CardParent + "\")''>&#43;</button></div>"
}