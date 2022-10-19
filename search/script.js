const options = {
    method: 'GET',
    headers: {
        'Accept-Language': 'pl',
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '631147a32cmsh3ddee0650df535fp168592jsn23f579588f47',
        'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
    }
};

const search = async (query) => {
    const url = `https://bing-web-search1.p.rapidapi.com/search?q=${query}`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value;
    const data = await search(query);
    searchResults.innerHTML = '';
    data.webPages.value.forEach(result => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div style="background-color: rgba(255, 255, 255, 0.1); padding-left: 20px; padding-right: 20px;">
            <a href="${result.url}" target="_blank" style="color: #fe7f00;">${result.name}</a>
            <p style="color: white; margin-bottom: 20px;">${result.snippet}</p>
        </div>
        `;
        searchResults.appendChild(div);
    });
}
);

