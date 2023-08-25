<template>
  <div class="about">
  <div class="heading">
</div>
<div class="container-about">
<section class="about">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/zDFsXvq0/20221210-172518.jpg" class="d-block w-auto" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Laeeq Majal</h5>
        <p>frontend</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/Y99WGjJY/C12-Tara-Snell-2.jpg" class="d-block w-auto" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Tara robin Snell</h5>
        <p>Backend</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="about-content">
    <h2>About Us</h2>
    <p>At BigEats, we believe that dining is a celebration of life, love, and laughter. Our mission is simple yet profound: to craft unforgettable moments through exceptional food, warm hospitality, and a vibrant ambiance. With a dedication to culinary creativity and an unwavering commitment to quality, we invite you to join us in savoring the artistry of flavors.
<br>
Cuisine:
Our diverse menu reflects our passion for embracing a world of cuisines. From hearty classics that evoke nostalgia to innovative creations that push the boundaries of taste, BigEats offers a harmonious blend of global influences. Whether you're craving a perfectly seared steak, a delicate sushi roll, or a comforting bowl of pasta, our menu is a symphony of options that cater to every palate.
<br>
Ambiance:
Step into a realm of contemporary elegance at BigEats. Our thoughtfully designed interiors blend modern aesthetics with cozy elements, creating an atmosphere that's equally suited for intimate gatherings and lively celebrations. The dimmed lighting, soothing colors, and welcoming décor set the stage for an exceptional dining experience, whatever the occasion.
<br>
Service:
Our team at BigEats takes pride in providing service that's as remarkable as the cuisine we serve. From the moment you step through our doors, you'll be greeted with genuine warmth and professionalism. Our knowledgeable staff is always ready to guide you through the menu, recommend wine pairings, or tailor the experience to your preferences, ensuring that your visit is nothing short of extraordinary.
<br>
Community and Sustainability:
Beyond the plates and glasses, BigEats is committed to making a positive impact on both the community and the environment. We partner with local farmers and suppliers to source the freshest, sustainable ingredients for our dishes. By doing so, we support local economies and contribute to the well-being of our environment, all while serving you the finest fare.
</p>
    
  </div>
</section>
</div>
</div>
</template>

<script>
export default{
  
}
</script>

<style scoped>
.container-about {
width: 90% !important;
margin: 0 auto !important;
padding: 10px 20px !important;
}
.about {
display: flex !important;
justify-content: space-between !important;
flex-wrap: wrap !important;
align-items: center !important;
line-height: 26px;
}
.about-content {
flex: 1 !important;
}
.about-content h2 {
font-size: 25px !important;
margin-bottom: 40px !important;
}
.about-content p {
font-size: 18px !important;
text-align: start !important;
line-height: 2;
}
.about-content {
display: inline-block !important;
font-size: 20px !important;
padding: 7px !important;
text-decoration: none !important;
border-radius: 20px !important;
transition: 0.3s ease !important;
background-color: #DD7230 !important;
color: white !important;
margin: 1rem !important;
text-align: start !important;
}
.about-content .read-more:hover {
box-shadow: 4px 4px 10px #CCC5B9, -4px -4px 10px#CCC5B9 !important;
}
@media screen and (max-width: 300px) {
.heading {
  padding: 0px 20px !important;
}
.heading p {
  font-size: 15px !important;
  margin-bottom: 0px !important;
}
.about {
  padding: 15px !important;
  flex-direction: column !important;
}
.about-image {
  margin: 0px !important;
margin-bottom: 15px !important;
}
.about-content {
  padding: 0px !important;
  font-size: 12px !important;
}
.about-content .read-more {
  font-size: 15px !important;
}
}
#body-admin {
justify-content: center;
display: flex;
}

* {
box-sizing: border-box;
padding: 0 !important;
margin: 0 !important;
}
/* body {
font: 16px / 24px "Rubik", sans-serif !important;
color:#2b2d42 !important;
background-color:#e5e5e5 !important;
margin: 50px 0;
} */
h2 {
font-size: 32px !important;
margin-bottom: 1em !important;
}
h2,
h3 {
font-weight: 700 !important;
}


text{color: white;}
</style>