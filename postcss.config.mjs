console.log('postcss.config.mjs')
export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-px-to-viewport': {
			viewportWidth: 1920, // 设计稿的宽度
			unitPrecision: 5, // 保留几位小数
			viewportUnit: 'vw', // 转换成的视口单位
			selectorBlackList: ['.ignore', '.hairlines'], // 忽略的类
			minPixelValue: 1, // 小于或等于 1px 不转换为视口单位
			mediaQuery: false, // 允许在媒体查询中转换px
		},
	},
}
