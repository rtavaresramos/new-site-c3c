<template>
  <div class="third-section-container">
    <div class="third-section-header">
      <h2>Quais Benefícios Essas Soluções Trazem?</h2>
    </div>

    <div class="solutions-results-container shadow background-white">
      <div class="solutions-results shadow background-white">
        <SolutionChartOne />
      </div>
      <div class="solutions-results-context">
        <h3>Controle da Organização</h3>

        <h4>
          Através de um ambiente Salesforce customizado de acordo com o que a
          sua companhia precisa, você pode ter acesso a diversos gráficos e
          números que facilitarão o controle organizacional e a tomada de
          decisão
        </h4>
      </div>
    </div>

    <div class="solutions-results-container">
      <div class="solutions-results-context">
        <h3>Todos os processos ao seu alcance</h3>

        <h4>
          Nossos clientes conseguem através de nossas soluções acompanhar vários
          indicadores importante em todo seu planejamento estratégico. Podendo
          otimizar seus ganhos e realizar conteções nas suas despesas de forma
          mais eficiente. Os dados acessíveis com atualizações em tempo real,
          tudo para facilitar ainda mais a escalar o seu produto.
        </h4>
      </div>
      <div class="solutions-results"><SolutionChartTwo /></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.third-section-container {
  width: 85%;
  margin: 50px auto;
}

.third-section-container h2 {
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
}

.third-section-container h4 {
  color: var(--gray-light);
  width: 80%;
  margin: 20px auto;
  font-size: 1.2rem;
  text-align: center;
}

.third-section-container h3 {
  width: 100%;
  font-size: 1.4rem;
  text-align: center;
}

.solutions-results-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  min-height: 400px;
  margin: 20px auto;
  border-radius: 8px;
}

.background-white {
  background: var(--background);
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.solutions-results {
  width: 50%;
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
}

.solutions-results-context {
  width: 50%;
  min-width: 300px;
}
</style>