<template>
  <div id="quem-somos" class="first-section-container">
    <!-- <div class="first-section-header">
      
    </div> -->
    <div class="first-section-main">
      <aside>
        <div class="comand-circles">
          <div class="circle close"></div>
          <div class="circle minimize"></div>
          <div class="circle maximize"></div>
        </div>

        <div class="folders-buttons">
          <div class="button" @click.prevent="bullet = 0">
            <Folder :active="context[bullet].name === 'Criação'" />
            <h3>Criação</h3>
          </div>
          <div class="button" @click.prevent="bullet = 1">
            <Folder :active="context[bullet].name === 'Capacitação'" />
            <h3>Capacitação</h3>
          </div>
          <div class="button" @click.prevent="bullet = 2">
            <Folder :active="context[bullet].name === 'Consultoria'" />
            <h3>Consultoria</h3>
          </div>
        </div>
      </aside>
      <main>
        <h2>Somos a C3C</h2>
        <h4>
          Um time focado em facilitar as soluções da sua empresa . Desenvolvida
          por especialistas no mercado salesforce, nossos C's constituem nossa
          missão.
        </h4>
        <div class="main-content">
          <h2>{{ context[bullet].name }}</h2>
          <h4>
            {{ context[bullet].content }}
          </h4>
        </div>
        <div class="main-bullets">
          <div class="bullets">
            <div class="first-col">
              <div v-for="i in 3" :key="i" class="bullet-option">
                <Checked v-if="context[bullet].bullets[i - 1]" />
                <h3 v-if="context[bullet].bullets[i - 1]">
                  {{ context[bullet].bullets[i - 1] }}
                </h3>
              </div>
            </div>
            <div class="second-col">
              <div v-for="i in 3" :key="i" class="bullet-option">
                <Checked v-if="context[bullet].bullets[i - 1 + 3]" />
                <h3 v-if="context[bullet].bullets[i - 1 + 3]">
                  {{ context[bullet].bullets[i - 1 + 3] }}
                </h3>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Checked from "./Checked.vue";
export default {
  data() {
    return {
      bullet: 0,
      context: [
        {
          name: "Criação",
          content: `Fábrica de softwares através de soluções Salesforce ou aplicações
            Web e Mobile, com altos padrões de qualidade e performance, para
            resolver problemas reais que o crescimento da sua empresa pode
            enfrentar.`,
          bullets: [
            "Qualidade",
            "Inovação",
            "Consistência",
            "Especialistas em mercado Salesforce",
            "Atendimento diferenciado",
            "Foco no cliente",
          ],
        },
        {
          name: "Capacitação",
          content: `Equipe de alto padrão constantemente treinada e fornecimento de capacitação para equipes externas. 
        Sempre buscando pelo que há de mais atual no mercado.`,
          bullets: [
            "Didática Construtiva",
            "Treinadores Qualificados",
            "Certificados",
            "Aulas Práticas e Teóricas",
            "Grupo de Tira Dúvidas",
          ],
        },
        {
          name: "Consultoria",
          content: `Acompanhamento efetivo na implantação e manutençnao 
        de soluções em Salesforce para a sua empresa. Visando colher o maior rendimento possível de todas
        as ferramentas as quais disponibilizamos de especialistas`,
          bullets: [
            "Profissionais Exclusivos",
            "Inovação",
            "Consistência",
            "Especialistas em mercado Salesforce",
            "Atendimento diferenciado",
            "Foco no cliente",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.first-section-container {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 85%;
  margin: 20px auto;
}

.first-section-container h2 {
  font-size: 1.6rem;
  text-align: right;
}

.first-section-container h4 {
  color: var(--gray-light);
  width: 80%;
  margin: 20px auto;
  font-size: 1.2rem;
  text-align: center;
}

.first-section-container h3 {
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
}

.first-section-main {
  display: flex;
  width: 90%;
  min-height: 400px;
  margin: 30px auto;
  background: var(--background);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;
  overflow: hidden;
}

.first-section-main aside {
  flex: 0.6;
  background: var(--secundary);
}

.first-section-main main {
  flex: 1.4;
  height: 100%;
}

.comand-circles {
  display: flex;
  padding: 10px;
}

.circle {
  width: 14px;
  height: 14px;
  margin: 0 4px;
  border-radius: 50%;
}

.circle.maximize {
  background: var(--svg-maximize);
}

.circle.minimize {
  background: var(--svg-minimize);
}

.circle.close {
  background: var(--svg-close);
}

.folders-buttons {
  padding-top: 30px;
  height: 90%;
}

.folders-buttons .button {
  display: flex;
  align-items: center;
  width: 80%;
  height: 60px;
  background: var(--background);
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;
  cursor: pointer;
}

main {
  position: relative;
  padding: 14px;
}

main .main-content h2 {
  /* position: absolute;
  top: -28px;
  left: 20px; */
  text-align: left;
  font-weight: 500;
}

main .main-content {
  position: relative;
  margin: 20px;
  padding: 10px;
  border-radius: 12px;
  background: var(--secundary);
  transform: translateY(10px);
}

main .main-content h4 {
  width: 100%;
}

main .main-bullets {
  display: flex;
  margin-left: 30px;
  margin-bottom: 30px;
}

main .bullets {
  display: flex;
  flex-wrap: wrap;
  /* width: 80%; */
}

main .bullet-option {
  display: flex;
  align-items: center;
  margin: 20px 10px;
}
main .bullet-option h3 {
  font-size: 1rem;
  text-align: left;
}

main .button {
  position: absolute;
  right: 0;
  bottom: 10px;
  width: 40%;
}
</style>