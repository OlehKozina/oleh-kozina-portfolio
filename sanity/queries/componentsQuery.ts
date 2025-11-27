const cardQuery = `{
  _key,
  name,
  "image": image.asset->url,
  content,
  link,
  githubLink
}`;

const projectsQuery = `
  _type == "projects" => {
    "_id": navLink->_id,
    heading,
    projectCards[] ${cardQuery}
  }
`;
const mediaWithTextQuery = `
    _type == "mediaWithText" =>{
      "_id": navLink->_id,
      heading, 
      content,
      skills,
      "pdf": pdf.asset->url,
      "image": image.asset->url,
      "horizontalImage": image.asset->url,
    }
`;
const galleryQuery = `
  _type == "gallery" =>{
    heading,
    images[]{
      _key,
      "url": asset->url
    }
  }
`;
const sliderQuery = `
    _type == "slider" =>{
      "_id": navLink->_id,
      heading,
      slides[]${cardQuery}
    }
`;
const sliderVerticalQuery = `
    _type == "sliderVertical" =>{
      "_id": navLink->_id,
      heading,
      slides[]${cardQuery}
    }
`;

const marqueeQuery = `
    _type == "marquee" =>{
      projects[]{
        "image": image.asset->url,
        link
      } 
    }
`;

const mediaGridWithTextQuery = `
    _type == "mediaGridWithText" =>{
      "_id": navLink->_id,
      heading,
      "videoTop": videoTop.asset->url,
      "videoBottom": videoBottom.asset->url,
      "image": image.asset->url,
      text
    }
`;
const contactQuery = `
    _type == "contact" =>{
      "_id": navLink->_id,
      heading,
      direction,
    }
`;

const queries = [
  projectsQuery,
  mediaWithTextQuery,
  sliderQuery,
  sliderVerticalQuery,
  mediaGridWithTextQuery,
  contactQuery,
  marqueeQuery,
  galleryQuery,
].join(",");

export const componentsQuery = `
  components[] {
    ...,
    ${queries}
  }
`;
