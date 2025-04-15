import { getDownloadLink } from '@/apis/game'

export function useDownload() {

    const donwload = () => {
        getDownloadLink().then((res: any) => {
          // 直接打开下载链接不行，需要用a标签来触发下载
          if (res.downloadLink) {
            const a = document.createElement('a')
            a.href = res.downloadLink
            a.target = '_blank'
            document.body.appendChild(a) // 添加到文档中以确保可以被点击
            a.click()
            document.body.removeChild(a) // 完成后移除
          } else {
            console.error('Download link is undefined or invalid.')
          }
        })
      }
      return {
        donwload
      }
}