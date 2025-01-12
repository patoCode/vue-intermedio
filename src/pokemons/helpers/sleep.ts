export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000))
}
