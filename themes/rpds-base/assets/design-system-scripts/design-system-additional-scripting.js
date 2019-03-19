// GLOBAL SEARCH TOGGLE
(function() {
    var designSystemOpenSearch = document.getElementById('design-system-search-toggle'),
        designSystemSearch = document.getElementById('design-system-search'),
        designSystemSearchInput = document.getElementById('design-system-search-input'),
        designSystemCloseSearch = document.getElementById('design-system-close-search');
    designSystemOpenSearch.addEventListener('click',
        function(evt) {
            evt.preventDefault();
            openDsSearch();
        }, false);
    designSystemCloseSearch.addEventListener('click',
        function(evt) {
            evt.preventDefault();
            closeDsSearch();
        }, false);
    document.addEventListener('keyup', function(evt) {
        if (evt.keyCode == 83 && !(designSystemSearch.classList.contains('design-system-search-wrapper--open'))) {
            openDsSearch();
        } else if (evt.keyCode == 27 && (designSystemSearch.classList.contains('design-system-search-wrapper--open'))) {
            closeDsSearch();
        }
    }, false)

    function openDsSearch() {
        designSystemSearch.classList.add('design-system-search-wrapper--open');
        // Give focus a small delay to account for iOS Safari bug that places cursor above viewport
        setTimeout(function(){ 
            designSystemSearchInput.focus();    
        }, 700);
    }

    function closeDsSearch() {
        document.querySelectorAll('#design-system-search-results,#design-system-search-results-length').forEach(function(item) {
            item.innerHTML = '';
        });
        designSystemSearch.classList.remove('design-system-search-wrapper--open');
        designSystemSearchInput.blur();
    }
})();

//GLOBAL NAVIGATION TOGGLE

(function() {
    var designSystemNavOpen = document.getElementById('design-system-global-navigation-open-nav'),
        designSystemNavClose = document.getElementById('design-system-global-navigation-close-nav');
        // designSystemNavWrapper = document.getElementById('design-system-global-navigation--wrapper-inner');
    designSystemNavOpen.addEventListener("click",
        function(evt) {
            evt.preventDefault();
            document.getElementById('design-system-global-navigation').classList.add('design-system-global-navigation--open');
            // designSystemNavWrapper.focus();
        }, false);
    designSystemNavClose.addEventListener('click',
        function(evt) {
            evt.preventDefault();
            closeDsNav();
        }, false);
    document.addEventListener('keyup', function(evt) {
        var designSystemGlobalNavigation = document.getElementById('design-system-global-navigation');
        if (evt.keyCode == 27 && (designSystemGlobalNavigation.classList.contains('design-system-global-navigation--open'))) {
            closeDsNav();
        }
    }, false);
    document.getElementById('design-system-content').addEventListener('click', function() {
        var designSystemGlobalNavigation = document.getElementById('design-system-global-navigation');
        if (designSystemGlobalNavigation.classList.contains('design-system-global-navigation--open')) {
            closeDsNav();
        }
    }, false);

    function closeDsNav() {
        document.getElementById('design-system-global-navigation').classList.remove('design-system-global-navigation--open');
    }
})();



// COPYABLE CODE BLOCKS

var dsClipboard = new ClipboardJS('.button--design-system-copy-code');
dsClipboard.on('success', function(evt) {
    evt.clearSelection();
    showTooltip(evt.trigger, 'Copied!');
});

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'button button--medium button--design-system-copy-code ds-tooltipped');
    elem.setAttribute('data-dstooltip', msg);
}

var dsCopyButtons = document.querySelectorAll('.button--design-system-copy-code');
for (var i = 0; i < dsCopyButtons.length; i++) {
    dsCopyButtons[i].addEventListener('mouseleave', clearTooltip);
    dsCopyButtons[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
    e.currentTarget.setAttribute('class', 'button button--medium button--design-system-copy-code');
    e.currentTarget.removeAttribute('data-dstooltip');
}

//Init Highlight.js for Code Highlighting
hljs.initHighlightingOnLoad();
