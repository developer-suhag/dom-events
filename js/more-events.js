document
    .getElementById("delete-btn")
    .addEventListener("click", function () {
        document.getElementById("secret-info").style.display = "none";
        const deleteFiled = document.getElementById('delete-confirm')
        deleteFiled.value = '';
    });
// focus
document.getElementById('delete-confirm').addEventListener('focus', function () {
    document.body.style.backgroundColor = '#fd79a8';
})
// blur
document.getElementById('delete-confirm').addEventListener('blur', function () {
    document.body.style.backgroundColor = '#dff9fb';
})

// keydown 
/* 
document.getElementById('delete-confirm').addEventListener('keydown', function () {
    const deleteConfrim = document.getElementById('delete-confirm')
    console.log(deleteConfrim.value);
}); */

// keypress 
/* document.getElementById('delete-confirm').addEventListener('keypress', function () {
    const deleteFlied = document.getElementById('delete-confirm');
    console.log(deleteFlied.value);
}) */

// keyup
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    // const deleteFiled = document.getElementById('delete-confirm');
    const disabledBtn = document.getElementById('delete-btn');
    // console.log(deleteFiled);
    // console.log(event);
    if (event.target.value == 'delete') {
        disabledBtn.removeAttribute('disabled')
    } else {
        disabledBtn.setAttribute('disabled', true)
    }
})
// change 
document.getElementById('delete-confirm').addEventListener('change', function () {
    const deleteFlied = document.getElementById('delete-confirm').value;
    // console.log(deleteFlied);
})

/* function toggleDeleteButton(event) {
    const deleteBtn = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleteBtn.removeAttribute('disabled')
    } else {
        deleteBtn.setAttribute('disabled', true)
    }
}
document.getElementById('delete-confirm').addEventListener('keyup', toggleDeleteButton);
addEventListener('change', toggleDeleteButton) */