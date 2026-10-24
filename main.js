// ?per_page
// ?page 
const upload = document.querySelector("#download")
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
    console.log(data);
});
};

create_request(page)
upload.addEventListener("click", (e) => {
    page+=1
    create_request(page)
});