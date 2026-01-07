# 스크립트 
코멧의 템플릿에서 사용하는 블록코딩 형태의 실행 명령입니다.
스크립트를 활용하면 더욱 다양하고 창의적인 기능을 제작할 수 있습니다.

## 데이터 블록

**상수** 값을 선언하는 블록입니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-const.webp" style="height: 60px">

**지역변수** 값을 불러오는 블록입니다. 스크립트 차원에서 전역으로 관리됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-local.webp" style="height: 60px">

**전역 변수** 또는 **시스템 변수** 값을 불러오는 블록입니다. 세션 차원에서 전역으로 관리됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-global.webp" style="height: 60px">

Javascript의 `Date.now()` 값을 불러옵니다. 세션 차원에서 전역으로 관리됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-timer.webp" style="height: 60px">

주어진 값의 **길이**를 반환합니다. 문자열이 아닐 경우 1을 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-length.webp" style="height: 60px">

두 값의 **연산 결과**를 반환합니다. 참값은 **1**, 거짓값은 **0**으로 취급됩니다.
지원 연산자: `+, -, ×, ÷`
나눗셈의 경우 소수점 두 번째 자리에서 반올림됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-calc.webp" style="height: 60px">

두 값을 합친 **문자열**을 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-join.webp" style="height: 60px">

주어진 값의 **함수값**을 반환합니다.
데이터 타입이 올바르지 않을 경우 원본 값을 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-func.webp" style="height: 60px">

| 함수명 | 설명 |
| :-: | :- |
| **sin** | 사인값을 반환합니다. 단위는 육십분법입니다. |
| **cos** | 코사인값을 반환합니다. 단위는 육십분법입니다. |
| **round** | 반올림값을 반환합니다. |
| **sqrt** | 제곱근 값을 반환합니다. |

**이미지 스토리지** 및 **오디오 스토리지**의 키에 따른 원본 URL을 반환합니다.
키가 올바르지 않을 시 빈 문자열을 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-storage.png" style="height: 100px">

**지역변수** 값을 설정합니다. 스크립트 차원에서 전역으로 관리됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-setlocal.webp" style="height: 60px">

**시스템 변수** 값을 설정해요. 세션 차원에서 전역으로 관리됩니다.
**action** 스크립트에서만 사용 가능합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/data-setglobal.webp" style="height: 60px">

:::details 지역변수와 전역변수의 차이
지역변수는 스크립트가 **실행될 때 생성**되고, **종료되면 삭제**됩니다.
반면 시스템 변수는 스크립트와 관계없이 별도로 저장됩니다.

따라서 지역변수 값은 설정해도 다른 스크립트에선 불러올 수 없습니다.
반면 시스템 변수 값을 설정하면 다른 스크립트에서 변경된 값을 참조하게 됩니다.
:::


## 조건 블록

**참, 거짓** 값을 가져옵니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/cond-const.webp" style="height: 90px">

**두 값의 비교 결과**를 반환합니다.
Javascript의 weak comparison이 적용됩니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/cond-compare.webp" style="height: 50px">

두 조건에 대한 **연산 결과**를 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/cond-and.webp" style="height: 50px">

조건의 **반대 결과**를 반환합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/cond-not.webp" style="height: 50px">


## 흐름 블록

조건 값이 **true**면 내부 스크립트를 실행합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/flow-if.webp" style="height: 120px">

조건 값이 **true**면 첫 번째 내부 스크립트를 실행합니다.
그렇지 않으면 두 번째 내부 스크립트를 실행합니다.
<img src="https://image.comet-talk.ai/guide/tutorial/template/flow-else.webp" style="height: 190px">


## 진행 블록
:::warning ⚠️ 안내사항
**action** 스크립트에서만 사용 가능한 블록입니다.
:::

<img src="https://image.comet-talk.ai/guide/tutorial/template/log-go.webp" style="height: 90px">

| **되감기** | 가장 최근 로그를 취소합니다. |
| :-: | :- |
| **진행하기** | 바로 다음 로그를 실행합니다. |


<img src="https://image.comet-talk.ai/guide/tutorial/template/play-node.png" style="height: 120px">

| **오디오 재생** | 주어진 값을 **원본 URL**로 사용하여 음원을 재생합니다.<br>스토리지 오디오 사용 시 오디오 스토리지 블록과 함께 사용해야 합니다. |
| :-: | :- |
| **모든 오디오 중단** | 모든 실행 중이던 오디오를 중단합니다. |
| **볼륨 조절** | 볼륨 크기를 조절합니다.<br>일반적으로 **0~100** 사이의 값을 권장합니다. |


## 상태 블록
:::warning ⚠️ 안내사항
**state** 스크립트에서만 사용 가능한 블록입니다.
:::


<img src="https://image.comet-talk.ai/guide/tutorial/template/state-vis.webp" style="height: 90px">

| **보이기** | 렌더링을 활성화합니다. |
| :-: | :- |
| **숨기기** | 렌더링을 비활성화합니다.<br>숨겨질 경우 **action** 스크립트는 작동하지 않습니다. |


<img src="https://image.comet-talk.ai/guide/tutorial/template/state-default.webp" style="height: 190px">


| **x, y 좌표 설정** | 오브젝트의 왼쪽 위 꼭짓점 좌표를 설정합니다. |
| :-: | :- |
| **가로 길이, 세로 길이 설정** | 오브젝트의 가로 길이, 세로 길이를 설정합니다. |
| **불투명도 설정** | 오브젝트의 불투명도를 설정합니다.<br>0에 가까울수록 투명해지고, 1에 가까울수록 불투명해집니다. |