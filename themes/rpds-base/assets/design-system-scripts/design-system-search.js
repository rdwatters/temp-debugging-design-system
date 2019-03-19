var searchData;
var idx;
var indexLocation;
var searchInput = document.getElementById('design-system-search-input');
var indexLocation = "/index.json";

searchInput.addEventListener('keyup', lunrSearch, true);

var dsSearchReq = new XMLHttpRequest();
dsSearchReq.open('GET', indexLocation, true);
dsSearchReq.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        searchData = JSON.parse(this.response);
        idx = lunr(function () {
            this.field('id');
            this.field('url');
            this.field('title', {
                boost: 100 //title has the greatest taxonomic weight
            });
            this.field('section');
            this.field('tags', {
                boost: 100 //adds equally strong boost to tags
            });
            this.field('description');
            this.field('content', {
                boost: 10
            });
            searchData.forEach(function (obj, index) {
                this.add(obj);
            }, this);
        });
    } else {
        console.log("Can't find index.js.");
    }
};

dsSearchReq.onerror = function () {
    console.log("Error when attempting to load site content json file.");
}

dsSearchReq.send();

function lunrSearch(event) {
    var query = document.getElementById("design-system-search-input").value;
    var searchResults = document.getElementById("design-system-search-results");
    var resultsLength = document.getElementById('design-system-search-results-length');
    if (query.length < 3) {
        searchResults.innerHTML = '';
        resultsLength.innerHTML = '';
    }
    if (query.length > 2) {
        var matches = window.idx.search(query + '~1');
        displayResults(matches);
    }
}

function displayResults(results) {
    var searchResults = document.getElementById('design-system-search-results');
    var inputVal = document.getElementById('design-system-search-input').value;
    var resultsLength = document.getElementById('design-system-search-results-length');
    if (results.length) {
        searchResults.innerHTML = '';
        resultsLength.innerHTML = '';
        results.forEach(function (result) {
            var item = window.searchData[result.ref];
            var appendString = '<li class=\"design-system-search-result\"><a href=\"' + item.url + '\"><h3>' + item.title + '</h3></a>' + '<p>' + item.description + '</p></li>';
            searchResults.innerHTML += appendString;
        })
        if (results.length > 1) {
            resultsLength.innerHTML = '<strong>' + results.length + '</strong>' + ' results for <strong>' + inputVal + '</strong>';
        } else {
            resultsLength.innerHTML = '<strong>' + results.length + '</strong>' + ' result for <strong>\"' + inputVal + '\"</strong>';
        }
    } else {
        resultsLength.innerHTML = 'No results found for <span class=\"input-value\"><strong>' + inputVal + '</strong></span>. Please check spelling and spacing.</li>';
    }
}