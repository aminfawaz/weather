async function main() {

    var address = document.getElementById("sb").value
    var apiurl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+address+'?unitGroup=metric&key=7UY8UG89JJKQDAMN4VHEDXK6R&contentType=json'

    var sbt = document.getElementById("sbt")
    sbt.addEventListener("click", main)

    try {
        const response =await fetch(apiurl)
        const data = await response.json()
    
        document.getElementById("ads").innerText = data["resolvedAddress"]
        document.getElementById("ads2").innerText = data["resolvedAddress"]

        function wdy (idx, day, dy, tempmx, tempmn, precipprb) {
            if (data["days"][idx]["icon"] == "rain") {
                var img = document.createElement("img")
                img.src = "icons/rain.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }else if (data["days"][idx]["icon"] == "clear-day") {
                var img = document.createElement("img")
                img.src = "icons/clear day.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }else if (data["days"][idx]["icon"] == "partly-cloudy-day") {
                var img = document.createElement("img")
                img.src = "icons/partly cloudy.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }else if (data["days"][idx]["icon"] == "cloudy") {
                var img = document.createElement("img")
                img.src = "icons/cloudy.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }else if (data["days"][idx]["icon"] == "snow") {
                var img = document.createElement("img")
                img.src = "icons/snow.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }else if (data["days"][idx]["icon"] == "wind") {
                var img = document.createElement("img")
                img.src = "icons/windy.png"
                img.id = "imgt"
                var d = document.getElementById(day)
                var td = document.getElementById(dy)
                d.insertBefore(img, td.nextSibling)
            }

            var tempmax =document.getElementById(tempmx)
            tempmax.innerText = Math.round(data["days"][idx]["tempmax"]) + "°C"

            var tempmin =document.getElementById(tempmn)
            tempmin.innerText = Math.round(data["days"][idx]["tempmin"])+ "°C"

            var precipprob =document.getElementById(precipprb)
            precipprob.innerText = Math.round(data["days"][idx]["precipprob"]) + "%"

            function dlt() {
                    img.remove()
                    tempmax.innerText= ""
                    tempmin.innerText= ""
                    precipprob.innerText= ""
                }

            sbt.addEventListener("click", dlt)

            var aftertommorow =document.getElementById("at")
            aftertommorow.innerText = data["days"][2]["datetime"]

            var afterthreetommorow =document.getElementById("df")
            afterthreetommorow.innerText = data["days"][3]["datetime"]

            var aftertommorow =document.getElementById("dfv")
            aftertommorow.innerText = data["days"][4]["datetime"]

            var afterthreetommorow =document.getElementById("ds")
            afterthreetommorow.innerText = data["days"][5]["datetime"]

            var aftertommorow =document.getElementById("dsv")
            aftertommorow.innerText = data["days"][6]["datetime"]

            var afterthreetommorow =document.getElementById("de")
            afterthreetommorow.innerText = data["days"][7]["datetime"]

        }

        wdy(0, "today", "td", "tempmax", "tempmin", "precipprob")
        wdy(1, "tommorrow", "tm", "tempmax2", "tempmin2", "precipprob2")
        wdy(2, "aftertommorrow", "at", "tempmax3", "tempmin3", "precipprob3")
        wdy(3, "dayfour", "df", "tempmax4", "tempmin4", "precipprob4")
        wdy(4, "dayfive", "dfv", "tempmax5", "tempmin5", "precipprob5")
        wdy(5, "daysix", "ds", "tempmax6", "tempmin6", "precipprob6")
        wdy(6, "dayseven", "dsv", "tempmax7", "tempmin7", "precipprob7")
        wdy(7, "dayeight", "de", "tempmax8", "tempmin8", "precipprob8")

    }
    
    catch (err){
        var errmsg = document.getElementById("errmsg")
        errmsg.innerHTML = "Error, Something went wrong. please try again later."
    }

    function dlt() {
        var errmsg = document.getElementById("errmsg")
        if (errmsg.innerHTML != ""){
        errmsg.innerHTML = ""
        }
    }

    sbt.addEventListener("click", dlt)

}
main()

function info() {
    window.location = "info/info.html"
}
var infobtn = document.getElementById("infobtn")
infobtn.addEventListener("click", info)

function tdy() {
    window.location = "days/today/today.html"
}
var todaybtn = document.getElementById("today")
todaybtn.addEventListener("click", tdy)

function tommorrow() {
    window.location = "days/tommorrow/tommorrow.html"
}
var tommorrowbtn = document.getElementById("tommorrow")
tommorrowbtn.addEventListener("click", tommorrow)

function aftertommorrow() {
    window.location = "days/aftertommorrow/aftertommorrow.html"
}
var aftertommorrowbtn = document.getElementById("aftertommorrow")
aftertommorrowbtn.addEventListener("click", aftertommorrow)
