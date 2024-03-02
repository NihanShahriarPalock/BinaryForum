
// latest Posts 
const latestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    latestPostsDetails(data);

}

const latestPostsDetails = (data) => {
    console.log(data); 

    
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
