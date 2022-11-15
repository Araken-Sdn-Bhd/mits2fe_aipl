<template>
  <div id="layoutSidenav">
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid px-4">
          <publicnav></publicnav>
          <div class="offline-title">
            <h1>Patient Screening and Appointment</h1>
          </div>
          <div class="card mb-4" id="results">
            <div
              class="result"

              style="background: #fff !important"
            >
              <div class="result-header">
                <h4>DEPRESSION, ANXIETY and STRESS Scale (DASS)</h4>
                <p class="text-center">
                  Thank you for reaching out to MENTARI Self Test
                  <br />
                  <small class="mt-1"
                    ><i
                      >Terima kasih kerana melayari ujian kendiri MENTARI.</i
                    ></small
                  >
                </p>
              </div>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="result-box">
                    <h4>Stress</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ StressScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Stress == 'Normal'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color2" v-if="Stress == 'Mild'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color3" v-if="Stress == 'Moderate'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color4" v-if="Stress == 'Severe'">
                            {{ Stress }}
                          </h3>
                          <h3 class="bg-color5" v-if="Stress == 'Extreme'">
                            {{ Stress }}
                          </h3>
                          <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="Stress == 'Normal'"></div>
                          <div class="progress" v-if="Stress == 'Normal'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="Stress == 'Mild'"></div>
                          <div class="progress" v-if="Stress == 'Mild'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="Stress == 'Moderate'"></div>
                          <div class="progress"  v-if="Stress == 'Moderate'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 70%; border-bottom-color: #ed7d31" v-if="Stress == 'Severe'"></div>
                          <div class="progress" v-if="Stress == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="Stress == 'Extreme'"></div>
                          <div class="progress" v-if="Stress == 'Extreme'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer" v-if="Stress == 'Normal' || Stress == 'Mild'">
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of stress. Recommended for you,
                          If you would like more information regarding mental
                          health issue, please go to MENTARI Portal or reaching
                          out to the nearest MENTARI in our directory.
                        </p>
                        <p>
                          Berdasarkan jawapan anda, anda sedang mengalami
                          tekanan yang rendah. Cadangan kepada anda, sekiranya
                          anda ingin mendapatkan maklumat lanjut berkaitan
                          masalah kesihatan mental, sila layari Portal MENTARI
                          atau menghubungi MENTARI yang terdekat melalui
                          direktori kami.
                        </p>
                      </div>
                      <div class="result-footer" v-if="Stress == 'Moderate' ||Stress == 'Severe'  ||Stress == 'Extreme' ">
                        <p>
                          Based on your responses, there is a chance that
                          you are currently experiencing stress. Please note,
                          this short questionnaire is just a guide and the
                          feelings you may be experiencing could be something
                          other than stress, anxiety or depression.We suggest
                          that you book an appointment with professionals, you
                          can go either to MENTARI Consultation Clinic, your GP
                          or Public Health Clinic to discuss these results with
                          them. Take a printed copy of this report with you and
                          book an appointment so you can discuss your current
                          symptoms and your future plan of management with them.
                        </p>
                        <p>
                          Berdasarkan jawapan anda, berkemungkinan anda sedang
                          mengalami tekanan. Cadangan kepada anda, sila dapatkan
                          temujanji bersama professional, anda boleh mendapatkannya
                          samaada di MENTARI, doktor (GP) anda atau di Klinik
                          Kesihatan yang berhampiran untuk membincangkan laporan
                          ujian ini. Dapatkan laporan ujian ini dan bawa semasa
                          temujanji anda untuk membincangkan gejala yang anda yang
                          terkini, dan membincangkan rawatan lanjut bersama mereka.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>Anxiety</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ AnxietyScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Anxiety == 'Normal'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color2" v-if="Anxiety == 'Mild'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color3" v-if="Anxiety == 'Moderate'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color4" v-if="Anxiety == 'Severe'">
                            {{ Anxiety }}
                          </h3>
                          <h3 class="bg-color5" v-if="Anxiety == 'Extreme'">
                            {{ Anxiety }}
                          </h3>
                           <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="Anxiety == 'Normal'"></div>
                          <div class="progress" v-if="Anxiety == 'Normal'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="Anxiety == 'Mild'"></div>
                          <div class="progress" v-if="Anxiety == 'Mild'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="Anxiety == 'Moderate'"></div>
                          <div class="progress"  v-if="Anxiety == 'Moderate'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 70%; border-bottom-color: #ed7d31" v-if="Anxiety == 'Severe'"></div>
                          <div class="progress" v-if="Anxiety == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="Anxiety == 'Extreme'"></div>
                          <div class="progress" v-if="Anxiety == 'Extreme'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer" v-if="Anxiety == 'Normal' ||Anxiety == 'Mild'">
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of anxiety. Recommended for
                          you, If you would like more information regarding
                          mental health issue, please go to MENTARI Portal or
                          reaching out to the nearest MENTARI in our directory.
                        </p>
                        <p>
                          Berdasarkan jawapan anda, anda sedang mengalami
                          kegelisahan yang rendah. Cadangan kepada anda,
                          sekiranya anda ingin mendapatkan maklumat lanjut
                          berkaitan masalah kesihatan mental, sila layari Portal
                          MENTARI atau menghubungi MENTARI yang terdekat melalui
                          direktori kami.
                        </p>
                      </div>
                      <div class="result-footer" v-if="Anxiety == 'Moderate' ||Anxiety == 'Severe' ||Anxiety == 'Extreme'">
                        <p>
                          Based on your responses, there is a chance that you are
                          currently experiencing anxiety. Please note, this short
                          questionnaire is just a guide and the feelings you may
                          be experiencing could be something other than stress,
                          anxiety or depression. We suggest that you book an appointment
                          with professionals, you can go either to MENTARI Consultation
                          Clinic, your GP or Public Health Clinic to discuss these
                          results with them. Take a printed copy of this report with
                          you and book an appointment so you can discuss your current
                          symptoms and your future plan of management with them.

                        </p>
                        <p>
                          Berdasarkan jawapan anda, berkemungkinan anda sedang mengalami
                          kegelisahan. Cadangan kepada anda, sila dapatkan temujanji
                          bersama professional, anda boleh mendapatkannya samaada di MENTARI,
                          doktor (GP) anda atau di Klinik Kesihatan yang berhampiran untuk
                          membincangkan laporan ujian ini. Dapatkan laporan ujian ini dan
                          bawa semasa temujanji anda untuk membincangkan gejala yang anda
                          yang terkini, dan membincangkan rawatan lanjut bersama mereka.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->

                  <div class="result-box">
                    <h4>Depression</h4>

                    <div class="result-body">
                      <div class="d-flex">
                        <div class="score">
                          <div class="text">
                            <h5>{{ DepressionScore }}</h5>
                            <span>SCORE</span>
                          </div>
                        </div>
                        <div class="result-info">
                          <h3 class="bg-color1" v-if="Depression == 'Normal'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color2" v-if="Depression == 'Mild'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color3" v-if="Depression == 'Moderate'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color4" v-if="Depression == 'Severe'">
                            {{ Depression }}
                          </h3>
                          <h3 class="bg-color5" v-if="Depression == 'Extreme'">
                            {{ Depression }}
                          </h3>
                          <div class="arrow" style="left: 25%; border-bottom-color: #8bdf25" v-if="Depression == 'Normal'"></div>
                          <div class="progress" v-if="Depression == 'Normal'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 45%; border-bottom-color: #e8e800" v-if="Depression == 'Mild'"></div>
                          <div class="progress" v-if="Depression == 'Mild'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 55%; border-bottom-color: #ffc000"  v-if="Depression == 'Moderate'"></div>
                          <div class="progress"  v-if="Depression == 'Moderate'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 70%; border-bottom-color: #ed7d31" v-if="Depression == 'Severe'"></div>
                          <div class="progress" v-if="Depression == 'Severe'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div class="arrow" style="left: 90%; border-bottom-color: #ff0000" v-if="Depression == 'Extreme'"></div>
                          <div class="progress" v-if="Depression == 'Extreme'">
                            <div
                              class="progress-bar bg-color bg-color1"
                              role="progressbar"
                              style="width: 40%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            <div
                              class="progress-bar bg-color bg-color2"
                              role="progressbar"
                              style="width: 9%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color3"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color4"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>

                            <div
                              class="progress-bar bg-color bg-color5"
                              role="progressbar"
                              style="width: 17%"
                              aria-valuenow=""
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="indicator">
                            <div class="dot">
                              <span class="bg-color1"></span>
                              <h5>Normal</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color2"></span>
                              <h5>Mild</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color3"></span>
                              <h5>Moderate</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color4"></span>
                              <h5>Severe</h5>
                            </div>
                            <div class="dot">
                              <span class="bg-color5"></span>
                              <h5>Extremely Severe</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="result-footer" v-if="Depression == 'Normal' ||Depression == 'Mild'">
                        <p>
                          Based on your responses, you are currently
                          experiencing low level of depression. Recommended for
                          you, If you would like more information regarding
                          mental health issue, please go to MENTARI Portal or
                          reaching out to the nearest MENTARI in our directory.
                        </p>
                         <p>
                          Berdasarkan jawapan anda, anda sedang mengalami
                          kemurungan yang rendah. Cadangan kepada anda,
                          sekiranya anda ingin mendapatkan maklumat lanjut
                          berkaitan masalah kesihatan mental, sila layari Portal
                          MENTARI atau menghubungi MENTARI yang terdekat melalui
                          direktori kami.
                        </p>
                      </div>
                      <div class="result-footer" v-if="Depression == 'Moderate' ||Depression == 'Severe' ||Depression == 'Extreme'">
                        <p>
                          Based on your responses, there is a chance that you are
                          currently experiencing depression. Please note, this short
                          questionnaire is just a guide and the feelings you may be
                          experiencing could be something other than stress, anxiety
                          or depression. We suggest that you book an appointment with
                          professionals, you can go either to MENTARI Consultation
                          Clinic, your GP or Public Health Clinic to discuss these
                          results with them. Take a printed copy of this report with
                          you and book an appointment so you can discuss your current
                          symptoms and your future plan of management with them.
                        </p>
                         <p>
                          Berdasarkan jawapan anda, berkemungkinan anda sedang mengalami
                          kemurungan. Cadangan kepada anda, sila dapatkan temujanji bersama
                          professional, anda boleh mendapatkannya samaada di MENTARI, doktor
                          (GP) anda atau di Klinik Kesihatan yang berhampiran untuk membincangkan
                          laporan ujian ini. Dapatkan laporan ujian ini dan bawa semasa temujanji
                          anda untuk membincangkan gejala yang anda yang terkini, dan membincangkan
                          rawatan lanjut bersama mereka.
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- result-box -->
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-sm-8">
                <div class="d-flex mt-3">
                  <button
                    type="button"
                    class="btn btn-secondary btn-text mr-auto"
                    @click="demoFromHTML"
                  >
                    <i class="fad fa-download"></i> Download Result
                  </button>
                  <a
                    href="/app/modules/Patient/public-request-appointment-form"
                    class="btn btn-success btn-text ml-auto"
                    ><i class="fad fa-calendar-day"></i> Request Appointment</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
#layoutSidenav #layoutSidenav_content{
  margin-left: 0px;
}
@media (max-width: 768px) {


.result-body .d-flex {
    flex-wrap: wrap;
    justify-content: center;
}
.result-info {
    margin-top: 20px;
}
.indicator {
    flex-wrap: wrap;
}
.indicator .dot{
  margin-bottom: 10px;
}
.result {
    padding: 0;
}
.arrow {

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #cded4a;
}
}

@media (max-width: 520px) {
.d-flex.mt-3 {
    flex-wrap: wrap;
}
.btn-text {
    width: 100%;
    margin-bottom: 10px;
}
}

</style>
<script>
import PatientLoginSidebar from "../../../components/Patient/PatientLoginSidebar.vue";
import PatientLoginHeader from "../../../components/Patient/PatientLogin_Header.vue";
export default {
  components: { PatientLoginSidebar, PatientLoginHeader },
  name: "dass-result",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/jquery-3.5.1.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
      {
        src: "https://html2canvas.hertzen.com/dist/html2canvas.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      userdetails: null,
      dassresult: null,
      StressScore: 0,
      AnxietyScore: 0,
      DepressionScore: 0,
      Stress: "",
      Anxiety: "",
      Depression: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.dassresult = JSON.parse(localStorage.getItem("dassresult"));
    console.log("my res", this.dassresult);
    if (this.dassresult) {
      this.Stress = this.dassresult.Stress;
      this.Anxiety = this.dassresult.Anxiety;
      this.Depression = this.dassresult.Depression;
      this.StressScore = this.dassresult.Stress_Value;
      this.AnxietyScore = this.dassresult.Anxiety_Value;
      this.DepressionScore = this.dassresult.Depression_Value;
    }
  },
  beforeDestroy() {
    localStorage.removeItem("dassresult");
  },
  methods: {
    demoFromHTML() {

    // const input = document.getElementById('results');
    // const divHeight = input.clientHeight
    // const divWidth = input.clientWidth+500
    // const ratio = divHeight / divWidth;
    // html2canvas(input, { scale: '1' }).then((canvas) => {
    //   const imgData = canvas.toDataURL('image/jpeg');
    //   const pdfDOC = new jsPDF(); //  use a4 for smaller page
    //   // const width = pdfDOC.internal.pageSize.getWidth();
    //   // let height = pdfDOC.internal.pageSize.getHeight();
    //   // height = ratio * width;
    //   pdfDOC.addImage(imgData, 'JPEG', 0, 0, 50, 280 );
    //   pdfDOC.save('summary.pdf');   //Download the rendered PDF.
    // });

      var HTML_Width = $("#results").width();
		var HTML_Height = $("#results").height();
		var top_left_margin = 15;
		var PDF_Width = HTML_Width+(top_left_margin*2);
		var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;

		var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;


		html2canvas($("#results")[0],{allowTaint:true}).then(function(canvas) {
			canvas.getContext('2d');

			console.log(canvas.height+"  "+canvas.width);


			var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
		    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);


			for (var i = 1; i <= totalPDFPages; i++) {
				pdf.addPage(PDF_Width, PDF_Height);
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}

		    pdf.save("HTML-Document.pdf");
        });

      // var pdf = new jsPDF("p", "mm", "a4");
      // $("html, body").scrollTop(0);
      // setTimeout(() => {
      // pdf.addHTML($("#results")[0], function () {
      //   pdf.save("Result.pdf");
      // });
      // }, 2000);
    },
  },
};
</script>
