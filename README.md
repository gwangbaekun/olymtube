# Olymtube Project Front-end/Back-end 소개

### 동영상 스트리밍 서비스 제공 사이트 YOUTUBE 클론 프로젝트

## 📍 프로젝트 소개

동영상 스트리밍 서비스 제공 사이트 YOUTUBE를 클론 코딩하였습니다.
사이트에서 인식한 문제점을 코드로 개선하려고 노력하였습니다.
클라우드 서버를 이용하지 않고 동영상 파일을 저장하였습니다.

# FLIX Project Front-end/Back-end 소개

### OTT 서비스 제공 사이트 NETFLIX 클론 프로젝트

## 📍 개발 인원 및 기간

개발기간 : 2022.02.18 - 2022.02.24
개발 인원 : 프론트엔드 2명, 백엔드 3명
개발자

- FE: 정소영, 백제열
- BE: 홍하빈, 고영빈, 진동녁

## 📍 기술스택

- Javascript (ES6+)
- React with Hooks
- React Router Dom
- redux
- redux-thunk
- redux-actions
- react-player
- axios
- immer
- image-thumbnail
<!-- - connected-react-router 사용하지 않았음 react-router-dom v6로 충분히 대체 가능-->
- react-youtube

### 협업도구

- Slack
- Git & Github
<!-- - Trello -->
- POSTMAN

## 📍 시연 영상

<a href="">시연 영상 보러가기</a>

##### Reference

- 이 프로젝트는 [YOUTUBE](https://www.youtube.com) 사이트를 참조하여 학습목적으로 만들었습니다
- 학습수준의 프로젝트로 만들었기 때문에 이 코드 및 데모영상을 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다

<br>

## 📍 Teammate

<div id=teammate>
  <h4> Front-End </h4>
  <table style="text-align:center;">
    <tr>
      <th><a href="https://github.com/gwangbaekun">백제열</a></th>
    </tr>
    <tr>
      <td>
        - 스크린 사이즈에 따라 비디오 플레이어 크기가 달라지는 것 구현<br>
        - Portal을 통한 Modal 구현<br>
        - 페이지, Carousel, Modal component 간 라우팅 연결
      </td>
      <td>
        - scroll에 따라 스타일링이 변화하는 nav bar, footer 구현<br>
        - 메인페이지 비디오 스트리밍 구현<br>
        - 페이지, Carousel, Modal component 간 라우팅 연결
      </td>
      <td>
        - 유효성 검사를 포함한 회원가입 기능 구현<br>
        - 유효성 검사 및 token을 부여하는 로그인 기능 구현<br>
        - kakao, google 소셜 로그인 기능 구현<br>
        - modal 내의 하트 아이콘 클릭을 통한 '찜하기' 기능 및 찜하기 리스트 기능 구현
      </td>
    </tr>
  </table>
  <br>
  <h4> Back-End </h4>
  <table style="text-align:center;">
    <tr>
      <th><a href="https://github.com/jay95ko">고준영</a></th>
      <th><a href="https://github.com/flow2lime">김장호</a></th>
    </tr>
    <tr>
      <td>
        - StreamingHttpResponse 와 S3를 이용한 스트리밍 서비스<br>
        - jwt토큰과 이를통한 얻어진 권한을 활용한 찜하기 기능 구현<br>
        - Docker, EC2, RDS, S3를 활용한 배포
      </td>
      <td><br>
      </td>
    </tr>       
  </table>
  <br>
</div>
