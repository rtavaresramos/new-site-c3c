<template>
  <div class="third-section-container">
    <div class="third-section-header">
      <h2>Quais Benefícios Essas Soluções Trazem?</h2>
    </div>

    <div class="solutions-results-container background-white">
      <div class="solutions-results-context">
        <h3>Métricas Gerais</h3>

        <h4>
          Métricas médias de sucesso do cliente obtidas após a implementação de
          Salesforce
        </h4>
      </div>
      <div class="solutions-results background-white">
        <SolutionChartOne />
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
  padding-top: 20px;
  padding-bottom: 20px;
  width: 85%;
  margin: 20px auto;
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
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-height: 400px;
  margin: 20px auto;
  border-radius: 8px;
}

.background-white {
  background: var(--background);
}

.solutions-results {
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  margin: 0 auto;
}

.solutions-results-context {
  min-width: 280px;
  margin: 20px auto;
}
</style>