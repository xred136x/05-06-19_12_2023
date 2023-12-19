generateHeader('SiteName', ['empty', 'empty', 'empty'], 'blue', 'white');

function generateHeader(title, navitems, bgcolor, foncolor){
    let arr = '';
    if(Array.isArray(navitems))
    for(let el of navitems){
         arr += `<a style="margin-left: 10px; padding: 4px 8px; border: 3px solid white; font-size: 14px; text-decoration: none; color: white">${el}</a>`;        
    }
    else if(typeof(navitems)==='number')
        arr += `<a style="margin-left: 10px; padding: 4px 8px; border: 3px solid white; font-size: 14px; text-decoration: none; color: white">empty</a>`;
    var headerBox = document.getElementById("body");
    headerBox.innerHTML = (`<header style="padding: 0 8px; display: flex; justify-content: space-between; background-color: ${bgcolor};">
    <h1 style="color: ${foncolor};">${title}</h1>
    <nav style="display: flex; align-items: center;">` +
    `${arr}`+
    `</nav>
    </header>`);
}