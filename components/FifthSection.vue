<template>
  <div class="fifth-section-container">
    <div class="fifth-section-header">
      <h2>Porque a C3C produz software <br />com tanta qualidade?</h2>
      <h3>Quem trabalha nesse time conta!</h3>
      <h4>
        Com o foco de realizar sempre as melhores entregas, nosso time é formado
        por especialistas e a troca de conhecimento, além da capacitação
        constante, dentro da equipe são pontos positivos em nosso ambiente de
        trabalho. Conheça um pouco mais do nosso DNA através de nossos
        colaboradores.
      </h4>
    </div>

    <div class="shadow-comments">
      <div class="all-comments">
        <div v-for="i in 8" :key="i" class="comment-container">
          <div class="comment-header">
            <div class="profile-img">
              <img
                src="https://avatars.githubusercontent.com/u/22183253?v=4"
                alt=""
                srcset=""
              />
            </div>
            <div class="profile-info">
              <h3 class="name">Rodrigo Tavares</h3>
              <h4 class="mention-contact">@rtavaresramos</h4>
            </div>
          </div>
          <div class="comment-content">
            <h4 class="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate illum et mollitia beatae consequatur corrupti? Ad
              officia dignissimos porro, neque optio amet esse.
            </h4>
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
.fifth-section-container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 50px auto;
}

.fifth-section-header {
  flex: 1;
  min-width: 300px;
}
.fifth-section-header h2 {
  font-size: 1.6rem;
  text-align: left;
}

.fifth-section-header h4 {
  color: var(--gray-light);
  width: 90%;
  margin: 20px auto 0 0;
  font-size: 1.1rem;
  text-align: left;
}

.fifth-section-header h3 {
  color: var(--gray-dark);
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
}

.all-comments {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.all-comments::-webkit-scrollbar {
  display: none;
}

.comment-container {
  width: 300px;
  height: 150px;
  margin: 20px 10px;
  background: var(--secundary);
  border-radius: 12px;
  padding: 10px;
}

.comment-header {
  display: flex;
  margin-bottom: 10px;
}

.comment-header h3.name {
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;
}

.comment-header h4.mention-contact {
  color: var(--gray-light);
  font-weight: 700;
}

.shadow-comments {
  flex: 1;
  position: relative;
}

.shadow-comments::after {
  position: absolute;
  top: 0;
  left: -20px;
  content: "";
  height: 100%;
  width: 40px;
  background: linear-gradient(
    to right,
    var(--background-default) 0%,
    var(--background-default) 50%,
    transparent 100%
  );
}
.shadow-comments::before {
  position: absolute;
  top: 0;
  right: -20px;
  content: "";
  height: 100%;
  width: 40px;
  background: linear-gradient(
    to left,
    var(--background-default) 0%,
    var(--background-default) 50%,
    transparent 100%
  );
}

.comment-content h4.content {
  color: var(--gray-light);
  font-size: 0.8rem;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px 0;
}
</style>