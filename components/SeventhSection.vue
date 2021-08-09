<template>
  <div class="sixth-section-container">
    <div class="sixth-section-header">
      <h2>
        Acreditamos Que O Código do Sucesso Está na Capacitação do Nosso Time
      </h2>
    </div>

    <div class="all-posts">
      <div class="post">
        <div class="image">
          <img src="~assets/svg/post-1.svg" alt="" srcset="" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Título do post</h3>
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, natus.
            </p>
          </div>
          <div class="call-to-action">
            <Button />
          </div>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="~assets/svg/post-1.svg" alt="" srcset="" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Título do post</h3>
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, natus.
            </p>
          </div>
          <div class="call-to-action">
            <Button />
          </div>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="~assets/svg/post-1.svg" alt="" srcset="" />
        </div>
        <div class="content">
          <div class="title">
            <h3>Título do post</h3>
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, natus.
            </p>
          </div>
          <div class="call-to-action">
            <Button />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sixth-section-container {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 85%;
  margin: 20px auto;
}

.sixth-section-container h2 {
  font-size: 1.6rem;
  text-align: left;
  font-weight: 500;
}

.sixth-section-container h3 {
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
}

.all-posts {
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: space-between;
}

.all-posts img {
  width: 100%;
}

.post {
  min-width: 300px;
  max-width: 320px;
  background: var(--background);
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.title h3 {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
}

.description p {
  color: var(--gray-light);
  font-size: 0.8rem;
}
.call-to-action {
  margin-top: 10px;
}

.post .content {
  padding: 20px;
}
</style>