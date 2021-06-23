firebase.firestore().collection("page").doc("utaconne-landing").get()
    .then((snapshot) => {
        if (snapshot.exists && snapshot.data()['top-title']) {
            document.querySelector('div.date-place-info-small').textContent = snapshot.data()['top-title']
            document.querySelector('div.date-place-info').textContent = snapshot.data()['top-title']
        } else {
            analytics.logEvent('top-title-text', {
                status: 'warn',
                message: 'Empty top title string received.'
            });
        }
    })
    .catch(err => {
        analytics.logEvent('top-title-text', {
            status: 'fail',
            message: err.message
        });
    })