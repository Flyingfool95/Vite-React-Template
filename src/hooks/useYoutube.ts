export default function useYoutube() {

  const youtubeEmbedConverter = (url: string) => {
    return "https://www.youtube.com/embed/" + url.substring(url.indexOf("=") + 1)
  }

  return youtubeEmbedConverter;
}