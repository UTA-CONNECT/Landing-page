let artistDataList = [
    {
        type: 'title',
        ele: undefined,
        height: 0.11,
    },
    {
        type: 'offset',
        ele: undefined,
        height: 0.03,
    },
    {
        type: 'box',
        img: '',
        title: '???',
        desc: '섭외가 완료되었습니다.\n기대해주세요!',
        ele: undefined,
        height: 0.2,
        href: ''
    },
    {
        type: 'hr',
        ele: undefined,
        height: 0.1,
    },
    {
        type: 'box',
        img: '',
        title: '???',
        desc: '섭외가 완료되었습니다.\n기대해주세요!',
        ele: undefined,
        height: 0.2,
        href: ''
    },
    {
        type: 'hr',
        ele: undefined,
        height: 0.1,
    },
    {
        type: 'box',
        img: '',
        title: '???',
        desc: '섭외가 완료되었습니다.\n기대해주세요!',
        ele: undefined,
        height: 0.2,
        href: ''
    }
]

const artistEleDict = {
    title: undefined,
    offset: undefined,
    box: undefined,
    hr: undefined
}

window.addEventListener('resize', () => {
    responsiveBlockList();
})

function init() {
    artistEleDict.title = document.getElementById('artist_title');
    artistEleDict.offset = document.getElementById('artist_offset');
    artistEleDict.box = document.getElementById('artist_box');
    artistEleDict.hr = document.getElementById('artist_hr');

    artistDataList.forEach(artistItem => {
        const ele = artistEleDict[artistItem.type].cloneNode(true);
        artistItem.ele = ele;
        artistItem.ele.removeAttribute('hidden');
        document.querySelector('div.block2-body-container').appendChild(ele);

        if (artistItem.type === 'box') {
            console.log(artistItem.ele);
            artistItem.ele.querySelector('#name').textContent = artistItem.title;
            artistItem.ele.querySelector('#desc').textContent = artistItem.desc;
            artistItem.ele.querySelector('div.artist-img').style.backgroundImage = `url('${artistItem.img}')`
            artistItem.ele.querySelector('div.artist-img').setAttribute('data-url', artistItem.href);

            artistItem.ele.addEventListener('click', (e) => {
                const currentEle = artistItem.ele
                const url = currentEle.querySelector('div.artist-img').getAttribute('data-url')
                const artistName = currentEle.querySelector('#name').textContent
                if (artistName) {
                    analytics.logEvent('artist-clicked', {
                        status: 'ok',
                        artist: artistName
                    });
                } else {
                    analytics.logEvent('artist-clicked', {
                        status: 'warn',
                        artist: 'Undefined artist name'
                    });
                }
                if (url) {
                    window.open(url, '_blank');
                }
            })
        }
    })
}

function responsiveBlockList() {
    const rect = document.querySelector('div.block2-body-container').getBoundingClientRect();
    artistDataList.forEach(artistItem => {
        artistItem.ele.style.height = `${rect.height * artistItem.height}px`;
    })
}

firebase.firestore().collection("page").doc("utaconne-landing").get()
.then((snapshot) => {
    if (snapshot.exists && snapshot.data().artist && snapshot.data().artist.length === 7) {
        artistDataList = snapshot.data().artist
        artistDataList.forEach(item => {
            if (item.desc) {
                item.desc = item.desc.replace(/\\n/g, '\n');
            }
        })
    } else {
        analytics.logEvent('artist-init-list', {
            status: 'warn',
            message: 'Wrong artist data received.'
        });
    }
    init();
    responsiveBlockList();
})
.catch(err => {
    analytics.logEvent('artist-init-list', {
        status: 'fail',
        message: err.message
    });
})