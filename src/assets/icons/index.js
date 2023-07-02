const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));//同样的 ../assets/icons 这是图片目录
} catch (error) {
  console.log(error);
}