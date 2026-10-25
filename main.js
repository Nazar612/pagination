// ?per_page
// ?page 
const upload = document.querySelector("#download");
const posts_list = document.querySelector("#posts_list");
const trigger = document.querySelector("#observer");
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
    markup_data_HTML(data)
});
};

create_request(page)
upload.addEventListener("click", (e) => {
    page+=1
    create_request(page)
});

function markup_data_HTML(data) {

    const html = data.map(({id, body, title}) => {
        return `<li class="posts_list_item" id="${id}"><h2 class="posts_list_item_title">${title}</h2>
    <p class="posts_list_item_body">${body}</p></li>`
    }).join(" ");

    posts_list.insertAdjacentHTML("beforeend", html)
};

// const interObserver = new IntersectionObserver((element) => {
//     if(!element[0].isIntersecting) {
//         return
//     };
//     interObserver.unobserve(trigger)
//     page++;
//     create_request(page)
// }, {
//     rootMargin:"0px 0px 500px 0px"
// });

// interObserver.observe(trigger)