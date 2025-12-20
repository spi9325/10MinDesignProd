export function getUrl(whichUrl?:string) {
  if (typeof window === "undefined") {
    //for ssr url
    if (process.env.DOCKER == "true") {
      return process.env.SSR_BACKEND_URL;
    }else if (whichUrl == "authenv"){ 
      return process.env.NODE_ENV;
    }else {
      return process.env.NEXT_PUBLIC_Backend_URL;
    }
  } else {
    // client url
    return process.env.NEXT_PUBLIC_Backend_URL;
  }
}
