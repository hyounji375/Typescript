let title = document.querySelector("#title");
title.innerHTML = "반갑습니다.";
//title은 유니언 타입으로 element의 타입을 갖거나 null일 수도 있다.
//id명을 틀렸을 때 그에 맞는 태그를 가져올 수 없으므로 null이 오며, 제대로 가져왔을 때는 element.

let h4 = document.querySelector("#title");
if (h4 !== null) {
  h4.innerHTML = "반갑습니다.";
}
//if문을 사용해서 narrowing을 해준다.
//유니언 타입이기 때문에 이것이 null인지 아닌지 확인하는 코드가 필요하다.

let h4 = document.querySelector("#title");
if (h4 instanceof Element) {
  h4.innerHTML = "반갑습니다.";
}
//instanceof를 사용해서 narrowing 하기.
//object instanceof 클래스명 => object가 오른쪽에 있는 class의 자식인지 확인하고 맞다면 true 반환.

let h4 = document.querySelector("#title") as Element;
//as를 사용해서 narrowing 하기.
//왼쪽의 요소가 오른쪽의 타입이라고 간주. 그래서 id명을 잘못 쳐서 null이 들어와도 Element 타입으로 간주됨.

let h4 = document.querySelector("#title");
if (h4?.innerHTML !== undefined) {
  h4.innerHTML = "반갑습니다.";
}
//h4?.innerHTML => h4에 innerHTML이 있으면 출력, 없으면 undefined.

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}
//Element로 비교하면 href를 쓸 수 없기 때문에 HTMLAnchorElement로 비교해줘야 한다.
//각 태그마다 타입이 정해져 있기 때문에 그에 맞는 타입을 써야 속성을 바꿀 수 있다.

let button = document.querySelector("#button");
button?.addEventListener("click", function () {});
//?가 narrowing 역할을 해줌. 버튼에 addEventListener가 가능하면 하고 안 되면 undefined.
