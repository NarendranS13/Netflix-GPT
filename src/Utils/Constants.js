

export const logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const userAvatar = 'https://avatars.githubusercontent.com/u/108397072?v=4';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY ,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const streamflix_logo = 'https://www.canva.com/design/DAGEdDz041o/nsvazmGMaRRsrQGLbwPg3w/edit?utm_content=DAGEdDz041o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const SUPPORTED_LANGUAGES = [
{identifier: "en", name: "English"},
{identifier: "hindi", name: "Hindi"},
{identifier: "spanish", name: "Spanish"}
]


export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY;
;
// console.log(process.env.REACT_APP_OPENAI_KEY);