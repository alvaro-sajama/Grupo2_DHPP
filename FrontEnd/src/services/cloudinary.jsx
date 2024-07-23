/* eslint-disable react/prop-types */
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';

export const CloudinaryImage = ({ publicID = 'userDefault' }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'diwsgcixk' } });
  // Use this sample image or upload your own via the Media Explorer
  
  const img = cld
  .image(publicID || 'cld-sample-5')
  .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
  .quality('auto')
  .resize(auto().gravity('center').width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};
