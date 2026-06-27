import type { UserConfigExport } from '@tarojs/cli'

export default {
  mini: {},
  h5: {
    miniCssExtractPluginOption: {
      ignoreOrder: true,
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    },
  },
} satisfies UserConfigExport<'vite'>
