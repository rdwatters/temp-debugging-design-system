var getPtInfo = new XMLHttpRequest();
var thisPath = window.location.pathname;
getPtInfo.open("GET", "../index.json", true);
getPtInfo.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        ptData = JSON.parse(this.response);
        for ( var i = 0; i < ptData.length; i++ ){
            if(ptData[i].url == thisPath){
                createPageTemplateInfo(ptData[i]);
            }
        }
    } else {
        console.log("Can't find index.json for page templates.");
    }
};
getPtInfo.send();

function createPageTemplateInfo(obj){

    var homepage = document.location.origin;
    console.log(homepage);

    // Define Page Info Title Hero
    var hero = document.createElement('header');
    hero.className = "design-system-hero";

    // Define Page Template Info Title
    var title = document.createElement('h1');
    title.className = "page-title";
    title.innerHTML = obj.title;

    // Define Page Template Info Description
    var desc = document.createElement('p');
    desc.className = "design-system-lead-paragraph";
    desc.innerText = obj.description;

    var close = document.createElement('a');
    close.id = "design-system-page-template-info-close";
    close.href = "#";
    close.innerHTML = "Close";

    // Define Page Template Info Body Copy
    var content = document.createElement('div');
    content.className = "design-system-page-template-info-content";
    content.innerHTML = obj.content;

    //Append Title, Description, and Close to Hero
    hero.appendChild(close);
    hero.appendChild(title);
    hero.appendChild(desc);

    //Create Outer Wrapper
    var pageTemplateInfoWrapper = document.createElement('div');
    pageTemplateInfoWrapper.className = "design-system-page-template-info-wrapper";
    pageTemplateInfoWrapper.id = "design-system-page-template-info";

    //Create Internal Wrapper
    var pageTemplateInfoInterior = document.createElement('div');
    pageTemplateInfoInterior.className = "design-system-page-template-info-interior";

    //Append Hero to Interior
    pageTemplateInfoInterior.appendChild(hero);
    pageTemplateInfoInterior.appendChild(content);

    //Append Interior to Wrapper
    pageTemplateInfoWrapper.appendChild(pageTemplateInfoInterior);


    //Add full div to to the top of the document body
    document.body.insertBefore(pageTemplateInfoWrapper,document.body.firstChild);

    createPageTemplateInfoToggle(pageTemplateInfoWrapper);
    close.addEventListener('click',closeDesignSystemPageTemplateInfo,false);
}

function createPageTemplateInfoToggle(){
    var svgToggleLink = document.createElement('a');
    svgToggleLink.href = "#";
    svgToggleLink.id = "design-system-page-template-info-toggle";
    var svgToggleIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" width="30px" height="30px" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M16.5,16.5C-2,35-2,65,16.5,83.5C35,102,65,102,83.5,83.5C102,65,102,35,83.5,16.5C65-2,35-2,16.5,16.5z M51.9,22.5  c4,0,7.2,3.3,7.2,7.3c0,4-3.3,7.3-7.2,7.3c-4,0-7.3-3.3-7.3-7.4C44.6,25.7,47.9,22.5,51.9,22.5z M62.2,71.4c-0.2,0.6-0.6,1.3-1,1.7  c-2.6,2.7-5.8,4.3-9.6,4.3c-1.8,0-3.5,0-5.3-0.3c-2.9-0.4-6.6-4-6.1-7.8c0.4-2.6,0.8-5.2,1.2-7.8c0.8-4.5,1.6-9.1,2.4-13.6  c0-0.3,0.1-0.6,0.1-0.9c0-1.9-0.6-2.6-2.5-2.8c-0.8-0.1-1.6-0.2-2.4-0.4c-0.9-0.3-1.4-1.1-1.3-1.8c0.1-0.8,0.6-1.3,1.6-1.5  c0.5-0.1,1.1-0.1,1.7-0.1c2.2,0,4.4,0,6.7,0c2.4,0,4.7,0,7.1,0c1.7,0,2.7,0.8,2.7,2.5c0,1.4-0.2,2.8-0.5,4.2  c-0.9,5.2-1.9,10.3-2.8,15.5c-0.3,1.7-0.7,3.4-0.9,5.1c-0.1,0.8,0,1.7,0.2,2.5c0.3,1.1,1.1,1.7,2.2,1.6c0.9-0.1,1.8-0.4,2.7-0.8  c0.7-0.3,1.3-0.8,2-1C61.6,69.6,62.5,70.3,62.2,71.4z"/></svg>';
    svgToggleLink.innerHTML = svgToggleIcon;
    document.body.appendChild(svgToggleLink);
    svgToggleLink.addEventListener('click',toggleDesignSystemPageTemplateInfo,false);
}

function toggleDesignSystemPageTemplateInfo(evt){
    evt.preventDefault();
    var pageInfo = document.getElementById('design-system-page-template-info');
    pageInfo.classList.toggle("design-system-page-template-info-wrapper--open");
}

function closeDesignSystemPageTemplateInfo(evt) {
    evt.preventDefault();
    document.getElementById("design-system-page-template-info").classList.remove('design-system-page-template-info-wrapper--open');
}