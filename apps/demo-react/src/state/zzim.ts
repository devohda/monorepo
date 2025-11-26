import { createMachine } from "xstate";

export const zzimFolderMachine = createMachine({
	id: "zzim-folder",
	initial: "empty",
	states: {
		// 폴더 생성
		createFolder: {
			on: {
				"": {
					target: "empty",
				},
			},
		},
		// 폴더 수정 (이름 수정)
		editFolder: {
			on: {
				"": {
					target: "empty",
				},
			},
		},
		// 폴더 목록 관리
		manageFolderList: {
			on: {
				"": {
					target: "empty",
				},
			},
		},
		// 상품 넣을 폴더 선택
		selectFolder: {
			on: {
				"": {
					target: "empty",
				},
			},
		},
		empty: {
			on: {
				"": {
					target: "createFolder",
				},
			},
		},
	},
});
