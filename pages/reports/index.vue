<template>
  <section id="reports">
      <hero-nav
      title="Reports"
      description="Analyse the performance, culture and operations of your your employees, their teams and the organization at large."
      :heroNavItems="heroNavItems"
      image="/images/icons/report.png" 
      >
    </hero-nav>

    <div class="padded">
      <div class="columns">
        <div class="column is-three-fifths">
          <company-goals />
        </div>
        <div class="column">
          <leaderboard />
        </div>
      </div>
      <div class="columns">
        <div class="column is-three-fifths">
          <cultural />
        </div>
        <div class="column">
          <onboarding />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .padded{
    max-width: 97%;
    margin: auto;
  }
</style>
  
<script>

import HeroNav from "~/components/general/HeroNav";
import Cultural from "~/components/reports/Cultural";
import Leaderboard from "~/components/reports/Leaderboard";
import Onboarding from "~/components/reports/Onboarding";
import CompanyGoals from "~/components/reports/CompanyGoals";

export default {
  components: {
      Cultural,
      Leaderboard,
      Onboarding,
      CompanyGoals,
      HeroNav
  },
  data() {
    return {
      heroNavItems:[
        {name:"General",target:"/reports",active:true},
        {name:"Team",target:"#"},
        {name:"Individual",target:"#"},
      ]
    };
  },
}


</script>