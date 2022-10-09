# please-ice-pack-front

## 💁‍♂️ 프로젝트 개요

**Please-Ice-Pack**은 **AI**를 활용한 패킹 전후 상품 검수와 최적 포장제 추천 솔루션입니다.
패킹은 센터 상품 출고 전 마지막 작업입니다.
패킹 단계를 강화해 오피킹을 검수하고 포장 효율을 높일 수 있습니다.

## 🌱 서비스 주요기능

- 주문 상품과 실제 상품 매칭
- 상품을 매칭한 결과로 포장제 추천
- 향후 AI 모델 정확도 향상을 위한 오류 데이터 적재

## 📦 페이지

![KakaoTalk_Image_2022-08-24-17-52-57](https://user-images.githubusercontent.com/66551410/186375256-258398a9-2d43-49cc-85f5-de4ce753818a.jpeg)

## 🔨 기술스택

|                        Front                                |
| :----------------------------------------------------------: |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Typescript](	https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![ant-design](https://img.shields.io/badge/ant%20design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)  ![Netlify](	https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) ![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![react-query](https://img.shields.io/badge/react%20query-E97b40?style=for-the-badge&logo=reactquery&logoColor=white)|

## ✨ 사용한 기술

- Typescript

  - 컴파일 단계에서 오류를 포착할 수 있게 하고 명시적인 정적타입 지정으로 의도를 명확하게 코드로 기술함
  - 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅을 쉽게 하기 위해 사용


- Suspense, ErrorBoundary

  - 선언적 프로그래밍을 통해 로딩과 에러 상태 처리를 Suspense와 ErrorBoundary로 위임함으로써 뷰단과 비즈니스 로직단을 분리
  - 불필요한 분기 처리 코드를 줄이고, 확장성과 유지 보수성을 높임
  

- react-query

  - 서버 상태 관리 및 동기화 
  - 캐싱 기능을 통해 불필요한 요청을 방지하여 성능을 높임


- msw

  - API 요청을 Service Worker단에서 Catch하여 임의로 만든 mockup API Response를 전달받아 사용
  - API 완성 및 배포 전까지 사용 후 완성 후에는 실제 API와 연동하여 사용


- ant design

  - 완성도 높은 UX/UI를 제공해주는 UI Framework
  - Design의 일관성을 지키고, Form state를 효율적으로 관리하기 위해 사용

  
- styled-components

  - 짧은 길이의 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화의 장점이 있음
  - javascript와 css 사이의 상수와 함수를 쉽게 공유 할 수 있음으로써 props를 활용한 조건부 스타일링을 사용


- Netlify

  - 계정 연동 및 정적 서버로 쉬운 호스팅을 제공하는 서비스
  - 지속적인 배포(Continuous Deployment), One-Click HTTPS, CDN 등 다양한 서비스를 이용하기 위해 사용



## 🛠 Deploy Site 
https://pip-kulry.netlify.app/

## 🕍 아키텍쳐

### Client Architecture

![image](https://user-images.githubusercontent.com/43962775/194743689-bcb31c72-e2cb-4436-9337-87f850a26242.png)

## 💁‍♂️ Additional Repositories

- [Server](https://github.com/Please-Ice-Pack/please-ice-pack-server)
- [ML](https://github.com/Please-Ice-Pack/please-ice-pack-ml)
