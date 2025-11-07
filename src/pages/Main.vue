<template>
  <div>
    <div class="text-white" :style="{ backgroundImage: `linear-gradient(90deg, rgba(22, 25, 44, 0.8), rgba(47, 55, 75, 0.8)), url(${require('@/assets/main-bg.jpg')})`}">
      <b-container class="p-0">
        <div class="d-flex align-items-center vh-100">
          <div>
            <h1>Enter the World of Lineage 2</h1>
            <div class="mt-4">Experience the ultimate MMORPG adventure with enhanced graphics, balanced gameplay and an active community</div>
            <div class="mt-5">
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
          <div 
          :style="{ backgroundImage: `url(${require('@/assets/main-promo.jpg')})`}"
          style="
            width: 100%;
            height: 400px;
            background-size: cover;
            background-position: 50%;
            box-shadow: 2px 2px 10px black;
            border-radius: 8px;
          "></div>
        </div>
      </b-container>
    </div>

    <div class="text-white" style="background-color: #23283a;">
      <b-container class="p-0">
        <div class="d-flex align-items-center vh-100">
          <div class="w-100">
            <h2 class="text-center">Server status</h2>
            <div class="text-center text-white-50">Real-time server information and player statistics</div>
            <b-card-group class="mt-4" deck>
              <b-card style="background-color: #393f54;">
                <div class="d-flex justify-content-between">
                  <div>Server status</div>
                  <div class="text-success font-weight-bold">
                    <b-icon-circle-fill variant="success" />
                    <span class="ml-2">Online</span>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Ping</div>
                  <div>12ms</div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Version</div>
                  <div>alpha</div>
                </div>
              </b-card>
              <b-card style="background-color: #393f54;">
                <div class="d-flex justify-content-between">
                  <div>Online</div>
                  <div class="text-success font-weight-bold">
                    <b-icon-people-fill />
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Characters</div>
                  <div>0</div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Bots</div>
                  <div>0</div>
                </div>
              </b-card>
              <b-card style="background-color: #393f54;">
                <div class="d-flex justify-content-between">
                  <div>Server info</div>
                  <div class="text-success font-weight-bold">
                    <b-icon-hdd-stack-fill variant="success" />
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Chronicle</div>
                  <div>C1</div>
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="text-white-50">Rates</div>
                  <div>x1</div>
                </div>
              </b-card>
            </b-card-group>
          </div>
        </div>
      </b-container>
    </div>

    <div class="text-white" style="background-color: #131529;">
      <b-container class="p-0">
        <div class="d-flex align-items-center vh-100">
          <div class="w-100">
            <h2 class="text-center">Download & Updates</h2>
            <div class="text-center text-white-50">Get the latest client and patches to start your adventure</div>
            <b-card-group class="mt-4" deck>
              <b-card style="background-color: #23283a;">
                <div class="text-center">
                  <b-iconstack font-scale="3">
                    <b-icon stacked icon="circle-fill" variant="success"></b-icon>
                    <b-icon stacked icon="download" variant="light" scale="0.5"></b-icon>
                  </b-iconstack>
                </div>
                <h3 class="text-center mt-3">Game client</h3>
                <div class="mt-3">
                  <div class="d-flex justify-content-between">
                    <div class="text-white-50">Size</div>
                    <div>1 GB</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="text-white-50">Version</div>
                    <div>1.0</div>
                  </div>
                </div>
                <b-button block variant="primary" class="mt-3">
                  <b-icon-download />
                  <span class="ml-2">Download client</span>
                </b-button>
              </b-card>
              <b-card style="background-color: #23283a;">
                <div class="text-center">
                  <b-iconstack font-scale="3">
                    <b-icon stacked icon="circle-fill" variant="success"></b-icon>
                    <b-icon stacked icon="download" variant="light" scale="0.5"></b-icon>
                  </b-iconstack>
                </div>
                <h3 class="text-center mt-3">Latest patch</h3>
                <div class="mt-3">
                  <div class="d-flex justify-content-between">
                    <div class="text-white-50">Size</div>
                    <div>1 MB</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="text-white-50">Version</div>
                    <div>0.1</div>
                  </div>
                </div>
                <b-button block variant="primary" class="mt-3">
                  <b-icon-download />
                  <span class="ml-2">Download patch</span>
                </b-button>
              </b-card>
            </b-card-group>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Main extends Vue {
  
}
</script>