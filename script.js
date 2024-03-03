




// latest Posts 
const latestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    latestPostsDetails(data);

}

const latestPostsDetails = (data) => {
    // console.log(data); 

    data.forEach(post => {

        const latestPostsContainer = document.getElementById("latest-posts-container");
        const postDiv = document.createElement("div");
        postDiv.className = "rounded-3xl border border-[#12132D26] border-solid bg-white p-5 mb-4";

        postDiv.innerHTML = `
            <div class=" mb-6 w-full h-48">
                <img class="rounded-3xl w-full h-full" src="${post.cover_image}" alt="">
            </div>
            <div>
                <i class="fa-regular fa-calendar mr-2"></i>
                <span class="text-[#12132D99]">${post?.author?.posted_date || "No publish date"}</span>
                <h1 class="my-3 font-extrabold text-lg">${post.title}</h1>
                <p class="text-[#12132D99]">${post.description}</p>
            </div>
            <div class="flex gap-4 mt-4">
                <div class="border rounded-full w-12 h-12 overflow-hidden">
                    <img src="${post.profile_image}" alt="">
                </div>
                <div>
                    <h1 class="font-bold ">${post.author.name}</h1>
                    <p class="text-sm text-[#12132D99] mt-1">${post?.author?.designation || "Unknown"}</p>
                </div>
            </div>
        `;

        latestPostsContainer.appendChild(postDiv);
    });
}

latestPosts();


// Lets Discuss Data 

const allPosts = async (searchText) => {

    console.log(searchText);
    let res = await (searchText ?
        fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`) :
        fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    );

    const data = await res.json();
    // console.log(data);
    allPostsDetails(data.posts);

}
allPosts();

const allPostsDetails = (data) => {

    const postContainer = document.getElementById("all-posts-container");
    postContainer.textContent = "";


    const allPostsContainer = document.getElementById("all-posts-container");
    data.forEach(allPost => {
        // console.log(data);
        const indicatorStatus = allPost.isActive;
        // console.log(indicatorStatus);
        let indicateColor = indicatorStatus ? "success" : "error";

        const postDiv = document.createElement("div");
        postDiv.className = "rounded-3xl max-w-[740px] mb-10";

        postDiv.innerHTML = `
                 <div class="bg-[#F3F3F5]  rounded-3xl flex gap-3 lg:gap-6 w-full border-2  p-2 lg:p-12">
                     <div class="indicator">
                         <span class="indicator-item badge badge-${indicateColor}"></span>
                         <div class="grid w-32 h-32 bg-base-300 place-items-center rounded-3xl overflow-hidden">
                             <img class="" src="${allPost.image}" alt="">
                         </div>
                     </div>
                     <div class="w-full">
                         <div class="flex items-center font-medium mb-4 gap-5 text-[#12132DCC]">
                             <p class=""># <span>${allPost.category}</span> </p>
                             <p class="">Author : <span>${allPost.author.name}</span> </p>
                         </div>
                         <h2 class="text-black font-bold text-xl mb-2">${allPost.title}</h2>
                         <p class="text-gray-600 ">${allPost.description}</p>
                         <div class="my-5 divide-y-2 divide-dashed divider-[#12132D40]">
                             <div></div>
                             <div></div>
                             <div></div>
                         </div>
                      <div class="flex justify-center lg:justify-between font-inter text-[#12132D99] mt-6 ">
                             <div class="flex items-center">
                                 <div class="flex items-center">
                        <i class="fa-regular fa-comment-dots mr-1 lg:mr-3"></i>
                        <span class="text-[#12132D99] mr-3 lg:mr-6">${allPost.comment_count}</span>
                                    </div>
                    <div class="flex items-center">
                        <i class="fa-regular fa-eye mr-1 lg:mr-3"></i>
                        <span class="text-[#12132D99] mr-3 lg:mr-6">${allPost.view_count}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fa-regular fa-clock mr-1 lg:mr-3"></i>
                        <span class="text-[#12132D99] mr-3 lg:mr-6">${allPost.posted_time} <span>min</span></span>
                    </div>
                </div>
                <div>
                    <button id="read-button" onclick="titleDataPass({title: '${allPost.title}', view_count:  ${allPost.view_count}})">
                   <img src="./images/email.svg" alt="">
                    </button>
                </div>
                            </div>
                        </div>
                    </div>
                `;

        allPostsContainer.appendChild(postDiv);
    });
    loadingSpinner(false);
}

// Search Start

const searchButton = document.getElementById("search-button").addEventListener("click", function () {
    const searchInput = document.getElementById("input-field");
    const searchText = searchInput.value;
    searchInput.value = "";
    document.getElementById("all-post").classList.add("hidden")  
    loadingSpinner(true); 
    setTimeout(function () {   
        document.getElementById("all-post").classList.remove("hidden")                     
        allPosts(searchText);
    }, 2000); 
    
});


const loadingSpinner = (isLoading) => {
    const loading = document.getElementById("loading-spinner");
    if (isLoading) {
        loading.classList.remove("hidden");
    } else {
        loading.classList.add("hidden");
    }
}

















// Count Function
let countNumber = 0;
function readButton() {
    countNumber++;
    const readCountNumber = document.getElementById("read-count").innerText = countNumber;

}

const titleDataPass = (titleData) => {
    readButton();
    console.log(titleData);
    const titlePostsContainer = document.getElementById("title-container"); // Corrected id

    const postDiv = document.createElement("div");
    postDiv.className = "bg-white mx-6 my-4 p-4 rounded-3xl flex flex-row";

    postDiv.innerHTML = `  
        <div>
            <h2 class="font-semibold w-64">${titleData.title}</h2>
        </div>
        <div class="ml-1 flex justify-center items-center text-center text-[#12132D99]">
            <i class="mr-2 fa-regular fa-eye"></i>
            <p>${titleData.view_count}</p>
        </div>
    `;

    titlePostsContainer.appendChild(postDiv);
}


