# ESLint Config React

React 애플리케이션을 위한 ESLint 설정 패키지입니다.

## 개요

이 패키지는 React 프로젝트에서 TypeScript와 함께 사용할 수 있는 ESLint 설정을 제공합니다. 코드 품질 향상과 일관된 코딩 스타일을 유지하는 데 도움이 됩니다.

## 주요 기능

### 1. TypeScript 지원

- `typescript-eslint`를 통한 TypeScript 코드 검사
- TypeScript 권장 설정 적용

### 2. React 관련 규칙

- **React Hooks**: `eslint-plugin-react-hooks`를 통한 Hooks 규칙 검사
  - Hooks의 호출 순서 보장
  - 조건부 Hooks 호출 방지
  - 의존성 배열 검사
- **React Refresh**: `eslint-plugin-react-refresh`를 통한 Fast Refresh 지원
  - Vite 환경에서의 Hot Module Replacement 최적화

### 3. JavaScript 기본 규칙

- ESLint JavaScript 권장 설정 적용
- 코드 품질 및 잠재적 오류 검사

### 4. 커스텀 규칙

- **세미콜론 필수**: `semi: "error"`
- **const 선호**: `prefer-const: "error"`

## 사용 방법

### 1. 패키지 설치 (Workspace 환경)

`package.json`에 직접 의존성을 추가합니다:

```json
{
	"devDependencies": {
		"eslint-config-react": "workspace:*"
	}
}
```

그 후 루트 디렉토리에서 의존성을 설치합니다:

```bash
npm install
```

### 2. ESLint 설정 파일에서 사용

```javascript
// eslint.config.js
import reactConfig from "eslint-config-react";

export default reactConfig;
```

또는 추가 커스텀 설정과 함께 사용:

```javascript
// eslint.config.js
import reactConfig from "eslint-config-react";

export default [
	...reactConfig,
	// 추가 커스텀 설정
];
```

### 3. package.json에서 스크립트 설정

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts,.tsx",
		"lint:fix": "eslint . --ext .ts,.tsx --fix"
	}
}
```

## 적용되는 파일

- `**/*.ts` - TypeScript 파일
- `**/*.tsx` - TypeScript React 컴포넌트 파일

## 제외되는 디렉토리

- `dist/` - 빌드 결과물 디렉토리

## 규칙 상세

### 세미콜론 필수 (semi: "error")

```typescript
// ❌ 잘못된 예시
const name = "John";
const greeting = "Hello";

// ✅ 올바른 예시
const name = "John";
const greeting = "Hello";
```

### const 선호 (prefer-const: "error")

```typescript
// ❌ 잘못된 예시
let name = "John";
let age = 25;

// ✅ 올바른 예시
const name = "John";
const age = 25;
```

## React Hooks 규칙

### 1. Hooks는 최상위에서만 호출

```typescript
// ❌ 잘못된 예시
function MyComponent() {
	if (condition) {
		useEffect(() => {
			// ...
		});
	}
}

// ✅ 올바른 예시
function MyComponent() {
	useEffect(() => {
		if (condition) {
			// ...
		}
	});
}
```

### 2. 의존성 배열 검사

```typescript
// ❌ 잘못된 예시
useEffect(() => {
	console.log(count);
}, []); // count가 의존성 배열에 없음

// ✅ 올바른 예시
useEffect(() => {
	console.log(count);
}, [count]);
```

## 개발 환경 설정

### VS Code 설정

`.vscode/settings.json`에 다음 설정을 추가하여 저장 시 자동 린팅을 활성화할 수 있습니다:

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"eslint.validate": [
		"javascript",
		"typescript",
		"javascriptreact",
		"typescriptreact"
	]
}
```

## 문제 해결

### 일반적인 문제들

1. **TypeScript 오류가 ESLint에서 감지되지 않는 경우**

   - `tsconfig.json`이 올바르게 설정되어 있는지 확인
   - TypeScript 버전이 호환되는지 확인

2. **React Hooks 규칙이 작동하지 않는 경우**

   - React 버전이 16.8 이상인지 확인
   - `eslint-plugin-react-hooks`가 올바르게 설치되어 있는지 확인

3. **Workspace 패키지를 찾을 수 없는 경우**
   - 루트 디렉토리에서 `npm install` 실행
   - `package.json`의 의존성이 `workspace:*`로 올바르게 설정되어 있는지 확인
   - Workspace 설정이 올바른지 확인

## 라이센스

MIT License
