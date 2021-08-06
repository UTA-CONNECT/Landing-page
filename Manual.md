# 페이지 데이터 수정 매뉴얼

차례

- 클라우드 관리자 페이지 접속
- 아티스트 데이터 수정
- 티켓팅 안내 데이터 수정
- 기타 데이터 수정

---------------------------------------------------------

## 클라우드 관리자 페이지 접속

1. [Firebase Console](https://firebase.google.com/) 접속

![스크린샷 2021-08-06 오후 2 44 11](https://user-images.githubusercontent.com/16532326/128462319-18bd9e39-2407-4a5c-9e69-d1a20caca716.png)

2. 우측 상단 `로그인` 버튼 클릭, 로그인 계정은 `utaconne.com` 계정 사용

![스크린샷 2021-08-06 오후 2 48 30](https://user-images.githubusercontent.com/16532326/128462477-a8407601-de82-4f3b-b95d-d4ffa54a4ed9.png)

3. 로그인 후, 우측 상단 `콘솔로 이동` 버튼 클릭

![스크린샷 2021-08-06 오후 2 49 55](https://user-images.githubusercontent.com/16532326/128462543-92eaee4a-a46d-44b6-9655-5fc89ebe36ce.png)

4. `uta-conne` 프로젝트 클릭

![스크린샷 2021-08-06 오후 2 51 08](https://user-images.githubusercontent.com/16532326/128462639-c8b849d2-4789-4853-b6df-58fd11831390.png)

5. 좌측 메뉴 리스트 중 `Firestore Database` 클릭

---------------------------------------------------------

## 아티스트 데이터 수정

![스크린샷 2021-08-06 오후 2 55 14](https://user-images.githubusercontent.com/16532326/128462979-fc4561a1-bdaf-48db-a638-af5cebc7f324.png)

아티스트는 페이지 내용 중 위 사진의 영역을 가리킵니다.

![스크린샷 2021-08-06 오후 2 56 13](https://user-images.githubusercontent.com/16532326/128463319-c5a761d4-925c-4548-a340-cdc9659dd24d.png)

1. 클라우드 관리자 페이지 -> `Firestore Database` 접속이 되어 있는 상태에서 `데이터 탭` -> `page` -> `utaconne-landing` 을 차례로 클릭 합니다.

<img width="638" alt="스크린샷 2021-08-06 오후 3 09 14" src="https://user-images.githubusercontent.com/16532326/128464266-41f57ae0-955d-4208-bc86-b0451b53389c.png">

2. 이후 오른쪽 영역에 표시되어지는 값 중 수정할 내용을 클릭합니다.

<img width="665" alt="스크린샷 2021-08-06 오후 3 10 05" src="https://user-images.githubusercontent.com/16532326/128464326-d13d74b7-b409-4bf7-97ca-7b0d999c7a2c.png">

3. 수정은 `값` 의 영역안의 내용만 수정합니다. 완료는 `업데이트` 버튼을 눌러 마무리합니다.

`artist` 키 트리 이하 내용 수정

|수정 가능|인덱스|키|설명|비고|
|---|------|---|---|---|
|X|0|height|차지할 높이 비율 값|0.11 == 11%|
|X||type|박스의 종류|title / offset / box / hr|
|X|1|height|차지할 높이 비율 값|0.11 == 11%|
|X||type|박스의 종류|title / offset / box / hr|
|O|2|desc|아티스트 정보 부가 설명란|엔터는 \n 기호를 사용할 것|
|O||height|차지할 높이 비율 값|0.11 == 11%|
|O||href|아티스트 클릭시 이동할 웹 페이지 링크|ex) `http://example.com` |
|O||img|아티스트 프로필 이미지 사진 링크|ex) `http://example.com/image.jpg` 비어있을 시 `?` 기호로 표시|
|O||title|아티스트 이름||
|X||type|박스의 종류|title / offset / box / hr|
|X|3|height|차지할 높이 비율 값|0.11 == 11%|
|X||type|박스의 종류|title / offset / box / hr|
|O|4|desc|아티스트 정보 부가 설명란|엔터는 \n 기호를 사용할 것|
|O||height|차지할 높이 비율 값|0.11 == 11%|
|O||href|아티스트 클릭시 이동할 웹 페이지 링크|ex) `http://example.com` |
|O||img|아티스트 프로필 이미지 사진 링크|ex) `http://example.com/image.jpg` 비어있을 시 `?` 기호로 표시|
|O||title|아티스트 이름||
|X||type|박스의 종류|title / offset / box / hr|
|X|5|height|차지할 높이 비율 값|0.11 == 11%|
|X||type|박스의 종류|title / offset / box / hr|
|O|6|desc|아티스트 정보 부가 설명란|엔터는 \n 기호를 사용할 것|
|O||height|차지할 높이 비율 값|0.11 == 11%|
|O||href|아티스트 클릭시 이동할 웹 페이지 링크|ex) `http://example.com` |
|O||img|아티스트 프로필 이미지 사진 링크|ex) `http://example.com/image.jpg` 비어있을 시 `?` 기호로 표시|
|O||title|아티스트 이름||
|X||type|박스의 종류|title / offset / box / hr|
