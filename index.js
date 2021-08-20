function submitData(userName, userEmail) {
    const userData = {
        name: `${userName}`,
        email: `${userEmail}`
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(object => {
           document.body.innerHTML = object.id}

        )
        .catch(error => {
            document.body.innerHTML = error.message;
        })

    };



