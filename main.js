// ?per_page
// ?page 
const upload = document.querySelector("#download");
const posts_list = document.querySelector("#posts_list")
const post_URL = "https://6acbba18ef37b15040782799.mockapi.io"
let page = 1;

function create_request(page) {
    let params = new URLSearchParams({
    limit: 5,
    page: page
});

   return fetch(`${post_URL}/posts?${params}`).then((response) => {
    if(!response.ok) {
        throw new Error(response.status)
    };
    return response.json()
}).then((data) => {
    markupHTML(data)
});
};

create_request(page)
upload.addEventListener("click", (e) => {
    page+=1
    create_request(page)
});

function markupHTML(data) {
    
    const html = data.map(({id, body, title}) => {
        return `<li class="posts_list_item" id="${id}"><h2 class="posts_list_item_title">${title}</h2>
    <p class="posts_list_item_body">${body}</p></li>`
    }).join(" ");

    posts_list.innerHTML = html
}