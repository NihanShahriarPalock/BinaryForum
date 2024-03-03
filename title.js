// Function to handle the click event of the "read" button
const readButton = (event) => {
    const postTitle = event.target.closest('.post-container').querySelector('.post-title').innerText;
    const titleContainer = document.getElementById("title-container");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = postTitle;
    titleContainer.appendChild(titleDiv);
}

// Function to create post elements and attach click event listener to "read" button
const createPostElements = (allPost) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post-container bg-[#F3F3F5] rounded-3xl flex gap-6 w-full border-2 p-12 mb-10";

    postDiv.innerHTML = `
        <div class="w-full">
            <p class="text-gray-600 post-title">${allPost.title}</p>         
            <div class="flex justify-between font-inter text-[#12132D99] mt-6">
                <div>
                    <button class="read-button">
                        <img src="./images/email.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    `;

    // Attach event listener to the "read" button
    postDiv.querySelector('.read-button').addEventListener('click', readButton);

    return postDiv;
}

// Function to fetch all posts and append them to the all-posts-container
const fetchAndDisplayPosts = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await res.json();

        const allPostsContainer = document.getElementById("all-posts-container");
        data.posts.forEach(allPost => {
            const postElement = createPostElements(allPost);
            allPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Call the function to fetch and display posts
fetchAndDisplayPosts();
