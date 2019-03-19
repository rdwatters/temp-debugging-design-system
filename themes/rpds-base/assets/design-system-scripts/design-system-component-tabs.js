window.addEventListener("load", function () {
    // store tabs variable
    var dsComponentTabs = document.querySelectorAll("ul.design-system-tabs--nav > li");
    var windowHash = window.location.hash.substr(1);
    var dsComponentContentPanes = document.querySelectorAll(".design-system-tabs-content--pane");
    //if page is refreshed use is linked directly to hash, make corresponding tab and pane active/visible
    if (windowHash.length > 0) {
        for (var i = 0; i < dsComponentTabs.length; i++) {
            dsComponentTabs[i].classList.remove("design-system-tab--active");
            if (dsComponentTabs[i].firstElementChild.getAttribute('href').substr(1) == windowHash) {
                dsComponentTabs[i].classList.add("design-system-tab--active");
            }
        }
        for (i = 0; i < dsComponentContentPanes.length; i++) {
            dsComponentContentPanes[i].classList.remove("design-system-tab-content--active");
        }
        document.getElementById(windowHash).classList.add("design-system-tab-content--active")
    }

    function myTabClicks(dsTabClickEvent) {
        for (var i = 0; i < dsComponentTabs.length; i++) {
            dsComponentTabs[i].classList.remove("design-system-tab--active");
        }
        var dsComponentclickedTab = dsTabClickEvent.currentTarget;
        dsComponentclickedTab.classList.add("design-system-tab--active");
        dsTabClickEvent.preventDefault();
        for (i = 0; i < dsComponentContentPanes.length; i++) {
            dsComponentContentPanes[i].classList.remove("design-system-tab-content--active");
        }
        var anchorReference = dsTabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        window.location.hash = activePaneId;
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("design-system-tab-content--active");
    }
    for (i = 0; i < dsComponentTabs.length; i++) {
        dsComponentTabs[i].addEventListener("click", myTabClicks)
    }
});