# 페이지 데이터 수정 매뉴얼

*주의*

모든 데이터는 백업이 되어있지 않기 때문에 `삭제` 버튼을 클릭하여 오류가 발생하지 않도록 유의 바랍니다.

차례

- [클라우드 관리자 페이지 접속](https://github.com/UTA-CONNECT/Landing-page/blob/main/Manual.md#%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EA%B4%80%EB%A6%AC%EC%9E%90-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%91%EC%86%8D)
- [아티스트 데이터 수정](https://github.com/UTA-CONNECT/Landing-page/blob/main/Manual.md#%EC%95%84%ED%8B%B0%EC%8A%A4%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95)
- [티켓팅 안내 데이터 수정](https://github.com/UTA-CONNECT/Landing-page/blob/main/Manual.md#%ED%8B%B0%EC%BC%93%ED%8C%85-%EC%95%88%EB%82%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95)
- [기타 데이터 수정](https://github.com/UTA-CONNECT/Landing-page/blob/main/Manual.md#%EA%B8%B0%ED%83%80-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95)

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

## 티켓팅 안내 데이터 수정

<img width="503" alt="스크린샷 2021-08-06 오후 3 23 49" src="https://user-images.githubusercontent.com/16532326/128465671-c2c7108b-2592-4b34-b246-9f94e94e7490.png">

아티스트는 페이지 내용 중 위 사진의 영역을 가리킵니다.

![스크린샷 2021-08-06 오후 2 56 13](https://user-images.githubusercontent.com/16532326/128463319-c5a761d4-925c-4548-a340-cdc9659dd24d.png)

1. 클라우드 관리자 페이지 -> `Firestore Database` 접속이 되어 있는 상태에서 `데이터 탭` -> `page` -> `utaconne-landing` 을 차례로 클릭 합니다.

<img width="638" alt="스크린샷 2021-08-06 오후 3 09 14" src="https://user-images.githubusercontent.com/16532326/128464266-41f57ae0-955d-4208-bc86-b0451b53389c.png">

2. 이후 오른쪽 영역에 표시되어지는 값 중 수정할 내용을 클릭합니다.

<img width="665" alt="스크린샷 2021-08-06 오후 3 10 05" src="https://user-images.githubusercontent.com/16532326/128464326-d13d74b7-b409-4bf7-97ca-7b0d999c7a2c.png">

3. 수정은 `값` 의 영역안의 내용만 수정합니다. 완료는 `업데이트` 버튼을 눌러 마무리합니다.

`ticketInfo` 키 트리 이하 내용 수정

|수정 가능|인덱스|키|설명|비고|
|---|------|---|---|---|
|O|ticket1||`사전예매 - 99,999₩` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1buy||`사전 예매 하러가기 >` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1buyInfo||`추가 안내메시지.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1date||`2021. 8. 1. ~ 9. 1.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1info1||`환불 및 취소시 수수료가 발생할 수 있습니다.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1info2||`자세한 내용은 인터파크 티켓에서 확인해주세요.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket1vat||`(VAT 포함)` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket2||`현장 구매 - 40,000₩` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket2buy||`* 티켓의 개인간 거래를 금합니다. 적발시 법적 조치에 취해질 수 있습니다.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket2date||`공연 당일 (2021. 10. 1.)` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket2info1||`사전 예매로 매진시 현장 구매가 어려울 수 있습니다.` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||
|O|ticket2vat||`(VAT 포함)` 영역||
|O||color|폰트 색상|해쉬 값 칼라 코드 사용 권장 ex) `#333333`|
|O||font|폰트 종류|GmarketSansBold / GmarketSansMedium / GmarketSansLight|
|O||fontSize|폰트 크기||
|O||text|표시할 내용||
|O||x|표시할 내용 X좌표||
|O||y|표시할 내용 y좌표||

`ticketUrl` 키 내용 수정

|수정 가능|인덱스|키|설명|비고|
|---|------|---|---|---|
|O|ticketUrl|ticketUrl|티켓팅 안내 영역을 클릭하였을 시 이동할 웹 페이지 링크|ex) `http://example.com`|

---------------------------------------------------------

## 기타 데이터 수정

### 상단 날짜 / 장소 수정

<img width="351" alt="스크린샷 2021-08-06 오후 3 32 59" src="https://user-images.githubusercontent.com/16532326/128466597-b147278c-7af3-4fd1-bf02-abe4813270f6.png">

위 사진의 영역을 가리킵니다.

![스크린샷 2021-08-06 오후 2 56 13](https://user-images.githubusercontent.com/16532326/128463319-c5a761d4-925c-4548-a340-cdc9659dd24d.png)

1. 클라우드 관리자 페이지 -> `Firestore Database` 접속이 되어 있는 상태에서 `데이터 탭` -> `page` -> `utaconne-landing` 을 차례로 클릭 합니다.

<img width="638" alt="스크린샷 2021-08-06 오후 3 09 14" src="https://user-images.githubusercontent.com/16532326/128464266-41f57ae0-955d-4208-bc86-b0451b53389c.png">

2. 이후 오른쪽 영역에 표시되어지는 값 중 수정할 내용을 클릭합니다.

<img width="665" alt="스크린샷 2021-08-06 오후 3 10 05" src="https://user-images.githubusercontent.com/16532326/128464326-d13d74b7-b409-4bf7-97ca-7b0d999c7a2c.png">

3. 수정은 `값` 의 영역안의 내용만 수정합니다. 완료는 `업데이트` 버튼을 눌러 마무리합니다.

`top-title` 키 내용 수정

|수정 가능|인덱스|키|설명|비고|
|---|------|---|---|---|
|O|top-title|top-title|날짜/ 장소 혹은 원하는 정보|최대 25글자 권장 ex) `Wryyyyyyyyyyyyyyyy`|

---------------------------------------------------------
