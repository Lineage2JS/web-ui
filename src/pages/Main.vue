<template>
  <div>
    <div class="d-flex align-items-center mt-5">
      <div>
        <h1>Enter the World of Lineage 2</h1>
        <div class="mt-3">Experience the ultimate MMORPG adventure with enhanced graphics, balanced gameplay and an active community</div>
        <div class="mt-3">
          <b-button variant="primary" class="pt-2 pb-2 pr-4 pl-4 mr-3">
            <b-icon-download />
            <span class="ml-2">Download</span>
          </b-button>
          <b-button variant="success" class="pt-2 pb-2 pr-4 pl-4">
            <b-icon-play-fill />
            <span class="ml-2">Start game</span>
          </b-button>
        </div>
      </div>
      <div style="
        background-color: rgb(237 237 237);
        width: 100%;
        height: 400px;
      "></div>
    </div>

    <hr class="mt-5">

    <h2 class="text-center mt-5">Server status</h2>
    <div class="text-center">Real-time server information and player statistics</div>
    <b-card-group class="mt-4" deck>
      <b-card>
        <div class="d-flex justify-content-between">
          <div>Server status</div>
          <div class="text-success font-weight-bold">
            <b-icon-circle-fill variant="success" />
            <span class="ml-2">Online</span>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <div>Ping</div>
          <div>12ms</div>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <div>Version</div>
          <div>0.0.1</div>
        </div>
      </b-card>
      <b-card>
        <div class="d-flex justify-content-between">
          <div>Players online</div>
          <div class="text-success font-weight-bold">
            <b-icon-people-fill />
          </div>
        </div>
        <h3 class="text-center mt-2">0</h3>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 0%"></div>
        </div>
      </b-card>
      <b-card>
        <div class="d-flex justify-content-between">
          <div>Server info</div>
          <div class="text-success font-weight-bold">
            <b-icon-hdd-stack-fill variant="success" />
          </div>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <div>Chronicle</div>
          <div>C1</div>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <div>Rates</div>
          <div>x1</div>
        </div>
      </b-card>
    </b-card-group>

    <hr class="mt-5">

    <h2 class="text-center mt-5">Download & Updates</h2>
    <div class="text-center">Get the latest client and patches to start your adventure</div>
    <b-card-group class="mt-4" deck>
      <b-card>
        <div class="text-center">
          <b-iconstack font-scale="3">
            <b-icon stacked icon="circle-fill" variant="success"></b-icon>
            <b-icon stacked icon="download" variant="light" scale="0.5"></b-icon>
          </b-iconstack>
        </div>
        <h3 class="text-center mt-3">Game client</h3>
        <div class="text-center">Full game client</div>
        <div class="mt-3">
          <div class="d-flex justify-content-between">
            <div>Size</div>
            <div class="font-weight-bold">1 GB</div>
          </div>
          <div class="d-flex justify-content-between">
            <div>Version</div>
            <div class="font-weight-bold">1.0</div>
          </div>
        </div>
        <b-button block variant="primary" class="mt-3">
          <b-icon-download />
          <span class="ml-2">Download client</span>
        </b-button>
      </b-card>
      <b-card>
        <div class="text-center">
          <b-iconstack font-scale="3">
            <b-icon stacked icon="circle-fill" variant="success"></b-icon>
            <b-icon stacked icon="download" variant="light" scale="0.5"></b-icon>
          </b-iconstack>
        </div>
        <h3 class="text-center mt-3">Latest patch</h3>
        <div class="text-center">Full game patch</div>
        <div class="mt-3">
          <div class="d-flex justify-content-between">
            <div>Size</div>
            <div class="font-weight-bold">1 MB</div>
          </div>
          <div class="d-flex justify-content-between">
            <div>Version</div>
            <div class="font-weight-bold">0.1</div>
          </div>
        </div>
        <b-button block variant="primary" class="mt-3">
          <b-icon-download />
          <span class="ml-2">Download patch</span>
        </b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Main extends Vue {
  
}
</script>