<template>
  <div class="about">
  <div class="heading">
</div>
<div class="container-about">
<section class="about">
  <div id="carouselExampleCaptions w-50" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators w-50">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/zDFsXvq0/20221210-172518.jpg" class="d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/Y99WGjJY/C12-Tara-Snell-2.jpg" class="d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
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
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore enim ducimus id placeat, et mollitia aspernatur? Nesciunt ab ea dolor similique et fugiat ullam dolorem natus. Modi debitis culpa saepe obcaecati corporis cumque dolorem voluptatem quis repellat nostrum. Officiis nisi eligendi perferendis culpa repudiandae in? A, amet neque aliquid officia consequuntur facilis numquam delectus, quis earum, reiciendis quasi perspiciatis autem modi expedita consectetur. Exercitationem libero id maiores temporibus incidunt necessitatibus adipisci repellendus consequuntur vitae sequi debitis ratione numquam, laborum inventore placeat fugiat porro eligendi commodi voluptate dicta? Porro quam aperiam quae asperiores architecto minus, maiores aliquid repudiandae laboriosam nulla corrupti?</p>
    
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
.d-block{
width: 60%;
}

text{color: white;}
</style>