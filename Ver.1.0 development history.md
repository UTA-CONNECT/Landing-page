# Ver.1.0

[릴리즈](https://github.com/UTA-CONNECT/Landing-page/releases/tag/1.0) 결과물

혹은 [사이트 방문](https://utaconne.com)

## Preview 

- PC

<img src="https://user-images.githubusercontent.com/16532326/123370720-42b9b700-d5bb-11eb-9cf3-55997afc9ea4.png" width="640"/>

- Mobile

<img src="https://user-images.githubusercontent.com/16532326/123370763-5d8c2b80-d5bb-11eb-9929-e44f24d3a42f.png" width="320"/>


## 개발자

- [CT-1326](https://github.com/CT-1326) 

> 행사 소개, 제휴 단체 · 공연, 더 알아보기, Footer 파트 개발

- [stories2](https://github.com/stories2)

> 페이지 상단 캐릭터 배치, 아티스트, 티켓팅 안내 파트 개발

## 개발 기간

`2021.05.28 ~ 2021.06.25` 약 1달

## 협업 과정

### 개발자 <-> 기획자 (카카오톡, 디스코드)

<img width="640" alt="스크린샷 2021-06-25 오후 1 34 38" src="https://user-images.githubusercontent.com/16532326/123370256-51539e80-d5ba-11eb-9e2c-09d6b4bc7b21.png">

--------

### 개발자 <-> 디자이너 (zeplin)

<img src="https://user-images.githubusercontent.com/16532326/123369731-43e9e480-d5b9-11eb-9915-0c23d5521662.png" width="640"/>

--------

### 개발자 <-> 개발자 (github issue, pull request)

<img src="https://user-images.githubusercontent.com/16532326/123369838-80b5db80-d5b9-11eb-9419-208286d350b5.png" width="640"/>
<img src="https://user-images.githubusercontent.com/16532326/123369919-ae028980-d5b9-11eb-9c09-209bb0b8d419.png" width="640"/>

--------

## 기술 스택

### 라이브러리

<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social.png" width="320"/>

- [Bootstrap5.0.1](https://getbootstrap.com/)

<img src="https://firebase.google.com/images/social.png" width="320"/>

- [Firebase (Auth, Firestore, Hosting, Performance, Analytics)](https://firebase.google.com/)

### 커스텀 기능 개발

- [하나의 이미지가 다른 이미지의 뒤에서 앞으로 나오는 디자인 대응](https://github.com/UTA-CONNECT/Landing-page/blob/main/Ver.1.0%20development%20history.md#%ED%95%98%EB%82%98%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-%EB%8B%A4%EB%A5%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9D%98-%EB%92%A4%EC%97%90%EC%84%9C-%EC%95%9E%EC%9C%BC%EB%A1%9C-%EB%82%98%EC%98%A4%EB%8A%94-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%8C%80%EC%9D%91)

- [이미지를 회전 시켜도 양 끝에 하얀 여백이 생기지 않도록 대응](https://github.com/UTA-CONNECT/Landing-page/blob/main/Ver.1.0%20development%20history.md#%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%ED%9A%8C%EC%A0%84-%EC%8B%9C%EC%BC%9C%EB%8F%84-%EC%96%91-%EB%81%9D%EC%97%90-%ED%95%98%EC%96%80-%EC%97%AC%EB%B0%B1%EC%9D%B4-%EC%83%9D%EA%B8%B0%EC%A7%80-%EC%95%8A%EB%8F%84%EB%A1%9D-%EB%8C%80%EC%9D%91)

- [`Firebase Firestore`를 이용하여 변경가능성 있는 텍스트 내용 대응](https://github.com/UTA-CONNECT/Landing-page/blob/main/Ver.1.0%20development%20history.md#firebase-firestore%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B3%80%EA%B2%BD%EA%B0%80%EB%8A%A5%EC%84%B1-%EC%9E%88%EB%8A%94-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%82%B4%EC%9A%A9-%EB%8C%80%EC%9D%91)


## 하나의 이미지가 다른 이미지의 뒤에서 앞으로 나오는 디자인 대응

* [Pull request](https://github.com/UTA-CONNECT/Landing-page/pull/21)

![asdf](https://user-images.githubusercontent.com/16532326/121845730-d4eecf00-cd20-11eb-909f-191823174708.png)

오른쪽이 디자인상 배치도, 왼쪽이 개발을 이용하여 수정한 내용

![스크린샷 2021-06-25 오후 1 55 33](https://user-images.githubusercontent.com/16532326/123371592-05562900-d5bd-11eb-918d-01b9f855bf95.png)

디자인 원본으론 위와 같이 캐릭터가 포함되어있지 않고 투명으로 처리된 이미지와

![스크린샷 2021-06-25 오후 1 56 23](https://github.com/UTA-CONNECT/Landing-page/blob/main/public/assets/img/conne_chan_sparkle_eyes.png?raw=true)

투명이 포함된 캐릭터 이미지로 구성되어있습니다.

2장의 이미지가 제공되었지만 단순히 곂쳐 놓을 경우 캐릭터가 원형으로 뚤린 이미지로 부터 튀어나오는 느낌에 어색한 부분을 남길 수 있습니다. 

이를 해결하기 위해 이미지를 배치하였을 시 곂치는 영역의 픽셀값을 2장의 이미지로 부터 각각 가져옵니다.


![스크린샷 2021-06-25 오후 2 00 15](https://user-images.githubusercontent.com/16532326/123371983-b066e280-d5bd-11eb-9bdb-5a96cf3f2261.png)

작업할 이미지를 먼저 로드한 다음

![스크린샷 2021-06-25 오후 2 00 09](https://user-images.githubusercontent.com/16532326/123372039-ce344780-d5bd-11eb-9dd9-32023a411659.png)

`getImageData` 를 이용하여 `red, green, blue, alpha` 순서로 이루어진 일차원 배열을 원하는 크기 만큼만 로드 합니다.

![스크린샷 2021-06-25 오후 2 03 04](https://user-images.githubusercontent.com/16532326/123372187-13587980-d5be-11eb-9f4d-41cb0a1de74f.png)

다음으로 2장의 이미지 각각에서 가져온 필셀 중 원형 이미지에서 `비어있는 부분`일 경우엔 캐릭터 이미지의 픽셀 값으로 갱신시킵니다.

비어있는 부분이 아닐 경우엔 기존픽셀에서 약간의 가중치를 더하였는데 

![스크린샷 2021-06-25 오후 2 06 32](https://user-images.githubusercontent.com/16532326/123372469-8eba2b00-d5be-11eb-8ae9-7e80bd369f81.png)

그 이유는 캐릭터 디자인 주변으로 그림자 효과가 들어가 있었기 때문에 주변 색과 원본 색이 튀어 보이는 문제 점이 있었기 때문입니다.

## 이미지를 회전 시켜도 양 끝에 하얀 여백이 생기지 않도록 대응

* [Pull request](https://github.com/UTA-CONNECT/Landing-page/pull/27)

![스크린샷 2021-06-15 오후 5 00 16](https://user-images.githubusercontent.com/16532326/122018459-d7732680-cdfd-11eb-9778-caab91cc3104.png)

오른쪽이 단순 회전시 발생하는 문제, 왼쪽이 개발을 이용하여 수정한 내용


티켓팅 안내 이미지를 단순 회전 시키면 이미지가 렌더링 되어지는 가로 크기에 따라서 `가로 스크롤` 이 생기고, 양 끝에 `하얀색 여백`이 생겨지는 문제 존재합니다.

이 부분을 캔버스 렌더링 방식과 비율에 따른 자동 스케일링, 반응형 좌표 이동을 개발하여 해결하였습니다.

![스크린샷 2021-06-15 오후 10 44 31](https://user-images.githubusercontent.com/16532326/122063507-4ca92080-ce2b-11eb-98c1-5e34fac87032.png)

위 그림의 경우 회전하면 회전 각에 따라 양 끝점의 좌표가 y = ax + b 에 의해 대략적으로 예측 되어집니다.

![스크린샷 2021-06-15 오후 11 17 33](https://user-images.githubusercontent.com/16532326/122069153-ea9eea00-ce2f-11eb-9407-13c6c81c66f4.png)

예를들어 대략 3도 정도 기울였을시 `cos(3° * Math.PI / 180)` 로 x, 
`sin(3° * Math.PI / 180)` 로 y 값이 `(0.999, 0.0519)` 로 구해지면

![스크린샷 2021-06-25 오후 2 32 05](https://user-images.githubusercontent.com/16532326/123374514-2ec58380-d5c2-11eb-9c0a-b28260c8b10e.png)


원점을 지나는 일차 함수의 기울기를 구할 수 있습니다.

![스크린샷 2021-06-25 오후 2 33 44](https://user-images.githubusercontent.com/16532326/123374649-66ccc680-d5c2-11eb-94b4-51ddf0539439.png)

이를 이용하여 이미지가 렌더링 되어질 전체 높이 크기를 구한 다음 

![스크린샷 2021-06-15 오후 10 47 16](https://user-images.githubusercontent.com/16532326/122063945-ac073080-ce2b-11eb-97d1-2477c47cab9a.png)

![2021-06-25-23531](https://user-images.githubusercontent.com/16532326/123375043-13a74380-d5c3-11eb-8a27-fd431f54a5bb.gif)

그려질 캔버스 높이 크기와 비율을 계산하여 축소시킨 이미지로 렌더링 하였습니다.

![스크린샷 2021-06-15 오후 10 48 54](https://user-images.githubusercontent.com/16532326/122064143-de189280-ce2b-11eb-81ac-7d484625dc2a.png)

물론 브라우저 크기 변화에 따라 다시 렌더링해야 할 경우엔 이벤트 리스너 등록시켜서 렌더링 호출 시킵니다.

## `Firebase Firestore`를 이용하여 변경가능성 있는 텍스트 내용 대응

- Firestore 규칙 설정

![스크린샷 2021-06-25 오후 2 17 25](https://user-images.githubusercontent.com/16532326/123373282-17859680-d5c0-11eb-8f95-8f029c9de078.png)

나중을 위한 DB 쓰기 권한 개념을 설정 해놓았습니다.

위의 경우 등록되어진 계정 중 `admin` 권한을 부여한 계정만이 해당 페이지의 데이터 수정을 어플리케이션 단에서 접근이 가능합니다.

컨텐츠 중에서 변동 가능성이 높은 항목들이 존재합니다.

![스크린샷 2021-06-25 오후 2 20 17](https://user-images.githubusercontent.com/16532326/123373519-7ba85a80-d5c0-11eb-9a70-77e2357ddc99.png)

아티스트 목록의 경우 후보가 새로 등록되어지거나 삭제 될 수 있습니다.

![스크린샷 2021-06-25 오후 2 22 22](https://user-images.githubusercontent.com/16532326/123373694-c4f8aa00-d5c0-11eb-9b0e-215230c08cde.png)

Firestore 를 사용하였기 때문에 `/page/utaconne-landing` 의 `artist` 배열 타입의 필드에 해당 정보를 입력하였으며,

![스크린샷 2021-06-25 오후 2 23 55](https://user-images.githubusercontent.com/16532326/123373790-fb362980-d5c0-11eb-9470-63dff5d005c2.png)

페이지 초기화시 데이터를 읽어와 DOM 에 반영합니다.

![스크린샷 2021-06-25 오후 2 25 21](https://user-images.githubusercontent.com/16532326/123373902-2fa9e580-d5c1-11eb-979a-4420280cf10d.png)

티켓팅 안내의 경우에도 가격, 날짜, 안내사항이 수시로 변경될 수 있는 항목들이 존재합니다.

![스크린샷 2021-06-25 오후 2 26 49](https://user-images.githubusercontent.com/16532326/123374020-641da180-d5c1-11eb-94c5-3b72a2834e61.png)

같은 방식으로 DB에 데이터를 정의한 후

![스크린샷 2021-06-25 오후 2 27 41](https://user-images.githubusercontent.com/16532326/123374085-81eb0680-d5c1-11eb-9f33-bfbec2ebc0fc.png)

캔버스에 티켓팅 안내 렌더링을 할 시 텍스트 정보를 렌더링 시키는 방식으로 구현하였습니다.


