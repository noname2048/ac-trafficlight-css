# 신호등 만들기 CSS

## 서론

velog를 탐방하다가 gicomong (기코몽?) 님이 만드신 신호등이 신기해서 공부해보리고 했다.

## 출처
https://velog.io/@gicomong/css100-day10

## 신호등 만들기

- [x] css position: absolute는 static 속성을 가지고 있지 않은 가장 가까운 부모 노드의 위치를 기준으로 한다.
- [x] ::after 과 ::before는 자식으로 생기는 거다. 
  - 그런데, 신기한건 ::after로 생성된 자식은 position 속성이 static, relative 의 경우, 부모의 크기가 고정적이면, 큰 사이즈를 입력해도, 부모에 맞게 강제적으로 줄어드는 거 같다.
  - ::after로 생성된 자식은 absolute를 적용하는 순간 상자가 부모를 뚫고 나오는걸 볼 수 있었다.
  - 그냥 내가 입력한 static의 경우 뚫고 나온다.

![](presentation/스크린샷,%202021-05-21%2023-42-47.png) 

  - [x] 여기서 하늘색은 직접 요소로 추가해준 div, hi가 적혀있는 노란색은 ::before로 추가. 본래는 같은 크기 여야한다.
- [x] 결론: ::after 와 같은 요소는 크기조절을 위해 추가한 속성임을 알았다.
- [x] border-radius의 퍼센트로 적용할 경우 50% 가 max인것 같다.
- [x] border-radius의 퍼센트는 정사각형일 때만 유용하다.  
- [x] css calc 속성의 경우 px가 안에 같이 들어가야한다.

