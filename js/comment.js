/* // 1. add button event handler
document.getElementById('post-comment').addEventListener('click', function () {
    // 2. get user comment
    const commentBox = document.getElementById('comment-box');
    // 3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    // 4. append the comment
    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(newComment)
    // 5.clean the comment box
    commentBox.value = '';
}) */

// 2nd time

/* // 1. add button event handler 
document.getElementById('post-comment').addEventListener('click', function () {
    // 2. get user comment 
    const commentBox = document.getElementById('comment-box');
    // 3 create comment paragraph 
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    // 4. append the comment 
    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(newComment);
    // 5. clear the comment box 
    commentBox.value = '';
}) */

// 3rd time 

// 1. add button event handler 

document.getElementById('post-comment').addEventListener('click', function () {
    // 2. get user comment 
    const userComment = document.getElementById('comment-box')
    // 3. create new comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = userComment.value;

    // 4. append the comment
    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(newComment);
    // 5. clear the comment box
    userComment.value = '';
})