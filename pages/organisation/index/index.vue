<template>
    <div class="container" v-if="organisation.name">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Organisation details
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p><b>Name:</b>&nbsp;{{ organisation.name }}</p>
                <p><b>Website:</b>&nbsp;{{ organisation.website }}</p>
                <p>
                  <b>Branches:</b>&nbsp;
                  <span v-if="organisation.branches">
                    Has Branches
                  </span>
                  <span v-if="!organisation.branches">
                    No Branches
                  </span>
                  </p>
                <p><b>Continous Review Frequency:</b>&nbsp;Every {{ organisation.cfFrequency }} days</p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Edit</a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Organisation levels
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p v-for="level in organisation.levelSet"  :key="level.number">
                  <b>Level {{level.number}}:</b>&nbsp;{{level.label}}
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Edit</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["organisation"],
}
</script>