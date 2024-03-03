const allPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    console.log(data);
    allPostsDetails(data.posts);
}

const allPostsDetails = (data) => {
    const allPostsContainer = document.getElementById("all-posts-container");
    data.forEach(allPost => {
        console.log(data);
        
        const postDiv = document.createElement("div");
        postDiv.className = "rounded-3xl border border-[#12132D26] border-solid max-w-[740px] bg-white p-5 mb-4";

        postDiv.innerHTML = `
                    <div class="bg-[#F3F3F5]  rounded-lg flex gap-6 w-full border-2 p-12">
                        <div class="indicator">
                            <span class="indicator-item badge badge-success"></span>
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
                            <div class="flex justify-between font-inter text-[#12132D99] mt-6 ">
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <i class="fa-regular fa-comment-dots mr-3"></i>
                                        <span class="text-[#12132D99] mr-6">${allPost.comment_count}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fa-regular fa-eye mr-3"></i>
                                        <span class="text-[#12132D99] mr-6">${allPost.view_count}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fa-regular fa-clock mr-3"></i>
                                        <span class="text-[#12132D99] mr-6">${allPost.posted_time} <span>min</span></span>
                                    </div>
                                </div>
                                <div>
                                    <button onclick="console.log('clicked')">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <g clip-path="url(#clip0_57_425)">
                                                <path
                                                    d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z"
                                                    fill="#10B981" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_57_425">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        allPostsContainer.appendChild(postDiv);
    });
}

allPosts();