import React from 'react';
import "../about.css"

import imageTo from "../asset/top_image.jpg"

const LandingPage = () => {
  return (
    // <div  className="landing-page">
     <div className="main">
  <div className="header">
    <div className="header_resize">
    
      <div class="clr"></div>
     
      <div class="clr"></div>
      <div class="header_img"> <img src={imageTo} alt="" width="960" height="326" /></div>
    </div>
  </div>
  <div class="clr"></div>
  <div class="content">
    <div class="content_resize">
      <div class="mainbar">
        <div class="article">
          <h2><span>About </span></h2>
          <div class="clr"></div>
          <p><strong>Welcome to PicMopher - Where Words Become Images!</strong></p>
          <p>At PicMopher, we believe in the power of visual expression. We've crafted an extraordinary app that transforms your words into captivating images, 
            giving life to your thoughts and making your messages truly unforgettable.</p>
        </div>
        <div class="article">
          <h2><span>Our</span> Mission</h2>
          <div class="clr"></div>
          <p><strong>Turning Text into Art</strong></p>
          <p>In a world saturated with text, we recognize the need for a fresh and creative approach o communication. PicMopher is not just an app; it's a revolution in expression. Our  mission is to empower you to go beyond words and turn your ideas into stunning visual masterpieces.</p>
          

        </div>


        <div class="article">
          <h2><span>why</span> Pic Morpher</h2>
          <div class="clr"></div>
          <p><strong>Infinite Creativity at Your Fingertips:</strong></p>
          <p>Say goodbye to mundane text messages. With PicMopher, you're the artist, and the canvas is your imagination. Unleash your creativity and transform any text into a vibrant and eye-catching image</p>
          <p><strong>Express Yourself Like Never Before</strong></p>
          <p>Whether it's a quote that inspires you, a personal mantra, or a simple greeting, PicMopher elevates your messages to a whole new level. Your words take on a visual form that resonates with emotion and impact.</p>


        </div>
      </div>
  
      <div class="clr"></div>
    </div>
  </div>
  <div class="fbg">
    <div class="fbg_resize">
      <div class="col c1">
        <h2><span>Image Gallery</span></h2>
        <a href="#"><img src="asset/gallery_1.jpg" width="58" height="58" alt="" /></a> <a href="#"><img src="asset/gallery_2.jpg" width="58" height="58" alt="" /></a> <a href="#"><img src="asset/gallery_3.jpg" width="58" height="58" alt="" /></a> <a href="#"><img src="asset/gallery_4.jpg" width="58" height="58" alt="" /></a> <a href="#"><img src="asset/gallery_5.jpg" width="58" height="58" alt="" /></a> <a href="#"><img src="asset/gallery_6.jpg" width="58" height="58" alt="" /></a> </div>
    
      
      <div class="clr"></div>
    </div>
    <div class="footer">
      <p class="lr">Copyright &copy; 2024 <a href="#">Domain Name</a> - All Rights Reserved</p>
     
      <div class="clr"></div>
    </div>
  </div>
</div>
    // </div>
  );
};

export default LandingPage