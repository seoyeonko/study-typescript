# 제네릭 자세히 살펴보기

제네릭 유형("Generics")은 꽤 까다로울 수 있습니다.

그러나 실제로 우리는 항상 그들과 함께 일하고 있습니다. 가장 두드러진 예 중 하나는 배열입니다.

다음 예제 배열을 보시죠:

```
let numbers = [1, 2, 3];
```

여기서 유형이 유추되지만 명시적으로 할당하면 다음과 같이 할 수 있습니다:

```
let numbers: number[] = [1, 2, 3];
```

number[] 는 TypeScript 표기법으로써 "이것은 숫자의 배열입니다" 라고 정의하는 것입니다.

그러나 실제로, number[]는 문법적 설탕입니다.

실제 유형은 Array입니다. 모든 배열은 Array 유형입니다.

그러나 배열 유형은 배열의 항목 유형도 설명하는 경우에만 의미가 있으므로 Array 은 실제로는 제네릭 유형입니다.

위의 예를 다음과 같이 작성할 수도 있습니다:

```
let numbers: Array<number> = [1, 2, 3];
```

여기에 다시 꺾쇠 괄호(<>)가 있습니다! 그러나 이번에는 (이전 강의에서 했던 것처럼) 우리 자신의 유형을 만드는 것이 아니라 TypeScript에 실제 유형이 "generic type placeholder"에 사용되야 한다고 하는 것입니다 (T, 이전 강의에서).

지난 강의에서 본 것처럼 TypeScript는 이것을 추론할 수도 있습니다. 우리는 다음과 같이 작성할 때 그것에 의존합니다:

```
let numbers = [1, 2, 3];
```

그러나 명시적으로 유형을 설정하려면 다음과 같이 할 수 있습니다:

```
let numbers: Array<number> = [1, 2, 3];
```

물론 이 길고 투박한 유형을 작성하는 것은 약간 성가실 수 있습니다. 그래서 배열에 대해 다음과 같은 대안(문법적 설탕)이 있습니다:

```
let numbers: number[] = [1, 2, 3];
```

이전 강의의 예를 들면 자리 표시자에 대한 구체적인 유형을 설정할 수도 있습니다. T명시적으로:

```
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
```

따라서 꺾쇠 괄호를 사용하여 제네릭 유형을 정의할 수 있을 뿐만 아니라 제네릭 유형을 사용하고 사용해야 하는 자리 표시자 유형을 명시적으로 설정할 수도 있습니다. 때로는 TypeScript가 (올바른) 유형을 유추할 수 없는 경우에 필요합니다. 이 과정 섹션의 뒷부분에서 살펴보겠습니다!
