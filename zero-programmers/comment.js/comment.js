// 1. add button event listener

document.getElementById('post-button').addEventListener('click', function () {
    // 2. get the user comment
    const userComment = document.getElementById('comment-box')
    // 3. create comment paragraph 
    const newComment = document.createElement('p');
    newComment.innerText = userComment.value;

    // 4. append the comment 
    const commentContainer = document.getElementById('comment-container').appendChild(newComment)
    // commentContainer.appendChild(newComment)
    // 5. clear the comment box
    userComment.value = '';
})