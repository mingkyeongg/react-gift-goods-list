# 3주차 과제

## step 1

- [x] 첨부된 **`oas.yaml`** 파일을 토대로 Request, Response Type을 정의해요.
- [x] React Query를 사용하지 말고 axios 를 사용해서 구현해요.
- [x]첨부된 **`oas.yaml`** 파일과 목 API URL을 사용하여 API를 구현해요.
    -  [x] 메인 페이지 - Theme 카테고리 섹션
        - [x] **`/api/v1/themes`** API를 사용하여 Section을 구현해요.
        - [x] API는 Axios또는 React Query 등을 모두 활용해서 구현해도 좋아요.
    - [x] 메인 페이지 - 실시간 급상승 선물랭킹 섹션
        - [x] **`/api/v1/ranking/products`** API를 사용하여 Section을 구현해요. (Axios 사용 가능)
        -  [x] 필터 조건을 선택 하면 해당 조건에 맞게 API를 요청하여 보여지게 해요.
    - [x] Theme 페이지 - header
        - [x] url의 pathParams와 **`/api/v1/themes`** API를 사용하여 Section을 구현해요.
        -  [x] **`themeKey`**가 잘못 된 경우 메인 페이지로 연결해요.
    - [x] Theme 페이지 - 상품 목록 섹션
        -  [x] **`/api/v1/themes/{themeKey}/products`** API를 사용하여 상품 목록을 구현해요.
        -  [x] API 요청 시 한번에 20개의 상품 목록이 내려오도록 해요.

## step 2

- [x] 각 API에서 Loading 상태에 대한 UI 대응을 해요.
- [x] 데이터가 없는 경우에 대한 UI 대응을 해요.
- [x] Http Status에 따라 Error를 다르게 처리해요.

## step 3

- [x] 스크롤을 내리면 추가로 데이터를 요청하여 보여지게 해요.
- [x] 1단계에서 구현한 API를 react-query를 사용해서 구현해봐요.


---


# 질문

## 질문 1. CORS 에러는 무엇이고 언제 발생하는지 설명해주세요. 이를 해결할 수 있는 방법에 대해서도 설명해주세요.

### CORS란?
- Cross-Origin Resource Sharing의 줄임말로 교차-출처 리소스 공유라고도 한다.
- 한 도메인이 도메인 간의 요청을 가진 다른 도메인의 리소스에 액세스 할 수 있게 해주는 보안 매커니즘 
- 동일 출처 정책때문에 등장하게 되었음
- 개발을 하다보면 기능상 어쩔 수 없이 다른 출처 간의 상호작용을 해야 하는 케이스도 있으며, 실무적으로 다른 회사의 서버 API를 이용해야 하는 상황도 존재한다. 따라서 이와 같은 예외사항을 두기 위해 CORS 정책을 허용하는 리소스에 한해 다른 출처라도 받아들인다는 것

### 동일 출처 정책이란?
- 동일한 출처의 리소스에만 접근하도록 제한하는 정책
- 왜? 만약 동일 출처 정책이 없으면 서로 다른 두 애플리케이션이 마음대로 소통할 수 있는 환경이 된다 -> 다른 출처의 애플리케이션에서 악의적인 목적으로 사용자의 정보를 탈취하기가 너무나도 쉬워진다는 것
- 동일한 출처 : 프로토콜, 호스트명, 포트가 같다.
- 브라우저에서 자동으로 쿠키가 첨부된다는 특징에서 해당 부분이 보안상의 문제를 발생시킬 수 있겠다는 이슈로 생겨나게 되었고 이렇게 등장하게 된 동일 출처 정책으로 인해 CORS가 발생하게 되었다. 

### 그래서 CORS 에러는 무엇인가
- 웹 페이지가 한 서버에서 로드되었을 때, 다른 서버에 있는 데이터에 접근하려고 하면 브라우저가 이를 막아서 생기는 문제

### 언제 생기는가
- 다른 도메인에 요청할 때
- 다른 프로토콜에 요청할 때
- 다른 포트에 요청할 때
=> 동일 출처가 아닐 때
- 서버에서 CORS 헤더를 설정하지 않았을 때
- 브라우저에서 Preflight 요청이 실패할 때
    - `PUT` `DELETE` `PATCH` 같은 메서드나, 특정 헤더를 사용하는 경우 브라우저는 Preflight 요청을 보내 서버가 실제 요청을 허용하는지 확인한다. 이 Preflight 요청이 실패하면 CORS 에러가 발생

### 해결 방법
1. 서버에서 access-control-allow-origin 설정해주기
2. 프론트 프록시 서버 설정을 변경해주기
    - 프론트 프록시 서버에서 백엔드 서버간의 출처를 조율해준다.
    - 브라우저와 프론트 프록시 서버는 출처가 동일하므로 CORS ERROR가 발생하지 않는다.
3. CORS 기능 끄기
    - 서버의 설정을 기다릴 수 없어 당장 핫픽스 같은 개발을 진행해야 될 때 사용하면 유용함


## 질문 2. 비동기 처리 방법인 callback, promise, async await에 대해 각각 장단점과 함께 설명해주세요.

### callack 함수
- 함수의 인자로 전달되어 특정 작업이 완료되었을 때 호출되는 함수
- 장점
    - 단순해서 간단한 비동기 작업을 처리하기 쉽다.
    - 모든 자바스크립트 환경에서 사용 가능하다.
- 단점
    - 콜백 지옥: 여러 비동기 작업이 중첩되면 코드가 복잡해지고 가독성이 떨어진다.
    - 각 콜백마다 에러 핸들링 코드를 작성해야 하므로 에러 처리가 복잡해진다.

### promise
- 비동기 작접의 완료 또는 실패를 나타내는 객체
- 세 가지 상태 (pendin g, fulfilled, rejecte)를 가질 수 있으며, 작업이 성공하거나 실패했을 때, 각각 then 또는 catch 메서드를 통해 결과를 처리할 수 있다.
- 장점
    - 체이닝을 통해 콜백 지옥을 피하고 코드의 가독성을 높일 수 있다.
    - catch 메서드를 통해 일관된 방식으로 에러를 처리할 수 있다.
    - 여러 비동기 작업을 순차적으로 실행하거나 병렬로 실행하는 등의 복잡한 흐름 제어를 쉽게 할 수 있다.
- 단점
    - 체인 중간에서 발생하는 에러를 추적하기 어려울 수 있다. 

### async/await
- promise를 기반으로 한 비동기 코드 작성 방식을 개선한 문법
- async 키워드가 붙은 함수는 항상 promise를 반환하며, await 키워드를 사용하면 promise가 해결될 때까지 기다린 후 결과를 반환받을 수 있다.
- 장점
    - 비동기 코드를 마치 동기 코드 처럼 작성할 수 있어 가독성이 좋다.
    - 코드가 순차적으로 실행되므로 디버깅이 상대적으로 쉽다
    - try/catch 구문을 사용해 동기 코드처럼 에러를 처리할 수 있다. 
- 단점
    - 구형 브라우저에서는 지원하지 않으므로 트랜스파일링이 필요하다. 


## 질문 3. react query의 주요 특징에 대해 설명하고, queryKey는 어떤 역할을 하는지 설명해주세요.

### 리액트 쿼리란?
- 서버 상태를 관리하기 위한 라이브러리

### 특징
- 리액트 쿼리를 사용하면 서버에서 데이터를 가져오고, 이를 클라이언트 상태로 관리하는 과정을 간소화할 수 있다. -> 애플리케이션의 성능을 향상시키고, 코드의 복잡성을 줄이는데 도음이 된다.
- 데이터를 캐싱하여 재사용할 수 있게 하며, 백그라운드에서 데이터를 자동으로 업데이트할 수 있는 기능을 제공한다.

### 주요 기능
- `useQuery` 훅을 사용하여 서버로부터 데이터를 쉽게 가져올 수 있다.
    - 이 훅은 데이터를 가져오는 동안 로딩 상태를 관리하고, 에러 핸들링을 할 수 있게 해준다.
- `useMutation` 훅을 통해 서버의 데이터를 변경하는 작업을 간단하게 할 수 있다.
    - 데이터 변경 후 자동으로 관련 쿼리를 업데이트하여 일관된 상태를 유지할 수 있게 해준다.

### query key
-   특정 데이터 요청을 고유하게 식별하는 역할을 하는 문자열 또는 배열
- React query는 이를 통해 데이터를 먼저 캐시하고 쿼리의 의존성에 변화가 생기면 데이터를 다시 불러오기 때문에 꼭 필요하다.
- 필요에 따라 쿼리 캐시와 상호작용 가능하다.
    - ex) mutation 이후에 데이터를 업데이트 하거나 특정 쿼리를 수동으로 무효화 할 수 있다.

