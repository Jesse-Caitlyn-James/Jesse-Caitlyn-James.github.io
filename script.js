/*Navigation*/
const nav = document.querySelector("nav"),
    navList = nav.querySelectorAll("li"),
    totNavList = navList.length,
    sect = document.querySelectorAll(".section"),
    totSect = sect.length
    for(let i=0; i<totNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            assignActive(this);
        })
    }
    startNav = document.querySelector(".start-buttons")
    startNavList = startNav.querySelectorAll("li")
    totStartNavList = startNavList.length
    for(let i=0; i<totStartNavList; i++)
    {
        const b = startNavList[i].querySelector("a");
        b.addEventListener("click", function()
        {
            assignActive(this);
        })
    }
    function assignActive(element)
    {
        for(let i=0; i<totSect; i++)
        {
            sect[i].classList.remove("inactive")
        }
        for(let j=0; j<totSect; j++)
        {
            if(sect[j].classList.contains("active"))
            {
                sect[j].classList.remove("active")
                sect[j].classList.add("inactive")
            }
        }
        label = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + label).classList.add("active")
    }