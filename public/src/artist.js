const artistDataList = [
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
        desc: '섭외가 완료되었습니다\n기대해주세요!',
        ele: undefined,
        height: 0.2,
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
        desc: '섭외가 완료되었습니다\n기대해주세요!',
        ele: undefined,
        height: 0.2,
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
        desc: '섭외가 완료되었습니다\n기대해주세요!',
        ele: undefined,
        height: 0.2,
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
    })
}

function responsiveBlockList() {
    const rect = document.querySelector('div.block2-body-container').getBoundingClientRect();
    artistDataList.forEach(artistItem => {
        artistItem.ele.style.height = `${rect.height * artistItem.height}px`;
    })
}

init();
responsiveBlockList();