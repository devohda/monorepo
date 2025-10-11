import { defineConfig } from "vite";
// import rollupAnalyzer from "rollup-plugin-analyzer";
import react from "@vitejs/plugin-react";
// import { writeFileSync } from "fs";
// import { join } from "path";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
	build: {
		// sourcemap: true, // 소스맵 생성
		rollupOptions: {
			plugins: [
				// rollupAnalyzer({
				// 	summaryOnly: false,
				// 	limit: 20,
				// 	hideDeps: false,
				// 	showExports: true,
				// 	writeTo: (analysis: string) => {
				// 		// dist 폴더에 bundle-analysis.txt 파일로 저장
				// 		const outputPath = join(
				// 			process.cwd(),
				// 			"dist",
				// 			"bundle-analysis.txt"
				// 		);
				// 		writeFileSync(outputPath, analysis, "utf8");
				// 		console.log(`📊 Bundle analysis saved to: ${outputPath}`);
				// 	},
				// }),
				// visualizer({
				// 	open: true,
				// 	filename: "bundle-stats.html",
				// }),
			],
		},
	},
	plugins: [react()],
});
