<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <Loader v-if="loader" />
          <div class="page-title">
            <h1>Patient Screening and Appointment</h1>
          </div>
          <div class="card mb-4">
            <div class="card-header bg-transparent">
              <h4>
                World Health Organization Disability Assessment Schedule 2.0
              </h4>
            </div>
            <div class="card-body">
              <nav>
                <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="nav-tab1"
                      data-bs-toggle="tab"
                      href="#nav1"
                      role="tab"
                      aria-controls="nav1"
                      aria-selected="true"
                      ref="tab1"
                      title="Understanding & Communicating"
                    >
                      1:{{this.tab1 == 1 ? "Understanding & Communicating" : "U & C"}}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab2"
                      data-bs-toggle="tab"
                      href="#nav2"
                      role="tab"
                      aria-controls="nav2"
                      aria-selected="false"
                      ref="tab2"
                      title="Getting Around"

                    >
                      2: {{ this.tab2 == 1 ? "Getting Around" : "GA" }}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab3"
                      data-bs-toggle="tab"
                      href="#nav3"
                      role="tab"
                      aria-controls="nav3"
                      aria-selected="false"
                      ref="tab3"
                      title="Self Care"
                    >
                      3: {{ this.tab3 == 1 ? "Self Care" : "SC" }}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab4"
                      data-bs-toggle="tab"
                      href="#nav4"
                      role="tab"
                      aria-controls="nav4"
                      aria-selected="false"
                      ref="tab4"
                      title="Getting Along With People"
                    >
                      4:{{this.tab4 == 1 ? "Getting Along With People" : "GAWP"}}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab5"
                      data-bs-toggle="tab"
                      href="#nav5"
                      role="tab"
                      aria-controls="nav5"
                      aria-selected="false"
                      ref="tab5"
                      title="Life Activities - Household"
                    >
                      5: {{this.tab5 == 1 ? "Life Activities - Household" : "LA-H"}}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab6"
                      data-bs-toggle="tab"
                      href="#nav6"
                      role="tab"
                      aria-controls="nav6"
                      aria-selected="false"
                      ref="tab6"
                      title="Life Activities - School/Work"
                    >
                      6: {{ this.tab6 == 1 ? "Life Activities - School/Work" : "LA-S/W"}}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="nav-tab7"
                      data-bs-toggle="tab"
                      href="#nav7"
                      role="tab"
                      aria-controls="nav7"
                      aria-selected="false"
                      ref="tab7"
                      title="Participation In Society"
                    >
                      7:{{ this.tab7 == 1 ? " Participation In Society" : "PIS" }}
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav1"
                  role="tabpanel"
                  aria-labelledby="nav-tab1"
                  ref="navdiv1"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>UNDERSTANDING AND COMMUNICATING</h5>
                      <!-- <p>
                        [1: None 2: Mild 3: Moderate 4: Severe 5: Extreme or
                        cannot do ]
                      </p> -->
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            None
                            <i> tiada</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Mild
                            <i>Ringan </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Moderate
                            <i>Sederhana </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Severe
                            <i>Teruk </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Extreme or cannot do
                            <i>Melampau atau tidak boleh buat</i>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb' + index"
                                value="1"
                                @change="ontabchange(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb' + index"
                                @change="ontabchange(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb' + index"
                                @change="ontabchange(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb' + index"
                                @change="ontabchange(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb' + index"
                                @change="ontabchange(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        class="btn btn-success next-btn ml-auto"
                        title="Next Page"
                        @click="gototab2"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav2"
                  role="tabpanel"
                  aria-labelledby="nav-tab2"
                  ref="navdiv2"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>GETTING AROUND</h5>
                      <!-- <p>
                        [1 : Always/Vey High Degree] [2 : Often/To a High
                        Degree] [3 : Sometimes/Somewhat] [4 : Seldom/Low Degree]
                        [5 : Never/Almost Never/Very Low Degree]
                      </p> -->
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list1" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb1' + index"
                                value="1"
                                @change="ontabchange1(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb1' + index"
                                @change="ontabchange1(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb1' + index"
                                @change="ontabchange1(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb1' + index"
                                @change="ontabchange1(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb1' + index"
                                @change="ontabchange1(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        @click="Backtab1"
                        title="Previous Page"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="gototab3"
                        title="Next Page"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav3"
                  role="tabpanel"
                  aria-labelledby="nav-tab3"
                  ref="navdiv3"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>SELF CARE</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list2" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb2' + index"
                                value="1"
                                @change="ontabchange2(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb2' + index"
                                @change="ontabchange2(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb2' + index"
                                @change="ontabchange2(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb2' + index"
                                @change="ontabchange2(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb2' + index"
                                @change="ontabchange2(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        @click="Backtab2"
                        title="Previous Page"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="gototab4"
                        title="Next Page"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav4"
                  role="tabpanel"
                  aria-labelledby="nav-tab4"
                  ref="navdiv4"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>GETTING ALONG WITH PEOPLE</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list3" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb3' + index"
                                value="1"
                                @change="ontabchange3(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb3' + index"
                                @change="ontabchange3(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb3' + index"
                                @change="ontabchange3(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb3' + index"
                                @change="ontabchange3(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb3' + index"
                                @change="ontabchange3(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        @click="Backtab3"
                        title="Previous Page"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="gototab5"
                        title="Next Page"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav5"
                  role="tabpanel"
                  aria-labelledby="nav-tab5"
                  ref="navdiv5"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>LIFE ACTIVITIES - HOUSEHOLD</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list4" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb4' + index"
                                value="1"
                                @change="ontabchange4(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb4' + index"
                                @change="ontabchange4(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb4' + index"
                                @change="ontabchange4(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb4' + index"
                                @change="ontabchange4(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb4' + index"
                                @change="ontabchange4(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        @click="Backtab4"
                        title="Previous Page"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="gototab6"
                        title="Next Page"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav6"
                  role="tabpanel"
                  aria-labelledby="nav-tab6"
                  ref="navdiv6"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>LIFE ACTIVITIES - SCHOOL/WORK</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            Always / Very High Degree
                            <i> Sentiasa / Tahap yang Sangat Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Often / High Degree
                            <i>Kerap kali / Tahap tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Sometimes / Somewhat High
                            <i> Kadang / Tahap Agak Tinggi</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Seldom / Low Degree
                            <i> Jarang / Tahap Rendah</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Never / Almost Never / Very Low Degree
                            <i>
                              Tidak Pernah / Hampir Tidak Pernah / Tahap Sangat
                              Rendah</i
                            >
                          </span>
                        </li>
                      </ul>
                      <h6>
                        Note: If you work (paid, non-paid, self-employed) or go
                        to school complete Question 5.5 - 5.8. otherwise, skip
                        to 6.1.
                      </h6>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list5" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb5' + index"
                                value="1"
                                @change="ontabchange5(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb5' + index"
                                @change="ontabchange5(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb5' + index"
                                @change="ontabchange5(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb5' + index"
                                @change="ontabchange5(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb5' + index"
                                @change="ontabchange5(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        @click="Backtab5"
                        title="Previous Page"
                        class="prev-1 btn btn-success mr-auto"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="gototab7"
                        title="Next Page"
                        class="btn btn-success next-btn ml-auto"
                      >
                        Next <i class="fad fa-arrow-to-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade show"
                  id="nav7"
                  role="tabpanel"
                  aria-labelledby="nav-tab7"
                  ref="navdiv7"
                >
                  <div class="content-subtab">
                    <div class="form-title">
                      <h5>PARTICIPATION IN SOCIETY</h5>
                      <ul class="instruction">
                        <li>
                          <span class="no">1</span>
                          <span class="text">
                            None
                            <i> tiada</i>
                          </span>
                        </li>
                        <li>
                          <span class="no">2</span>
                          <span class="text">
                            Mild
                            <i>Ringan </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">3</span>
                          <span class="text">
                            Moderate
                            <i>Sederhana </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">4</span>
                          <span class="text">
                            Severe
                            <i>Teruk </i>
                          </span>
                        </li>
                        <li>
                          <span class="no">5</span>
                          <span class="text">
                            Extreme or cannot do
                            <i>Melampau atau tidak boleh buat</i>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <table class="form-table" id="personaltable">
                      <thead>
                        <tr>
                          <th width="50%"></th>
                          <th width="50%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(pb, index) in list6" :key="index">
                          <td>
                            {{ pb.Question }}<span class="red-span">*</span>
                            <i>{{ pb.question_ml }}</i>
                          </td>
                          <td>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-bind:name="'pb6' + index"
                                value="1"
                                @change="ontabchange6(pb.id, 1)"
                              />
                              <label class="form-check-label" for="1">{{
                                pb.Answer1
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="2"
                                v-bind:name="'pb6' + index"
                                @change="ontabchange6(pb.id, 2)"
                              />
                              <label class="form-check-label" for="2">{{
                                pb.Answer2
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="3"
                                v-bind:name="'pb6' + index"
                                @change="ontabchange6(pb.id, 3)"
                              />
                              <label class="form-check-label" for="3">{{
                                pb.Answer3
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="4"
                                v-bind:name="'pb6' + index"
                                @change="ontabchange6(pb.id, 4)"
                              />
                              <label class="form-check-label" for="4">{{
                                pb.Answer4
                              }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="5"
                                v-bind:name="'pb6' + index"
                                @change="ontabchange6(pb.id, 5)"
                              />
                              <label class="form-check-label" for="5">{{
                                pb.Answer5
                              }}</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br><br>
                    <div class="d-flex align-items-center mt-2">
                      <button
                        type="submit"
                        class="prev-1 btn btn-success mr-auto"
                        @click="Backtab6"
                        title="Previous Page"
                      >
                        <i class="fad fa-arrow-to-left"></i> Previous
                      </button>

                      <button
                        type="submit"
                        @click="OnTestSubmit"
                        title="Submit"
                        class="btn btn-success ml-auto"
                      >
                        <i class="fad fa-paper-plane"></i> Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "cbi",
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
    ],
  },
  data() {
    return {
      userdetails: null,
      loader: false,
      tab1: 1,
      tab2: 0,
      tab3: 0,
      tab4: 0,
      tab5: 0,
      tab6: 0,
      tab7: 0,
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      checkedList: {},
      checkedList1: {},
      checkedList2: {},
      checkedList3: {},
      checkedList4: {},
      checkedList5: {},
      checkedList6: {},
      Ipaddress: "",
      userId: 0,
      token: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
    this.GetUserIpAddress();
    if (this.userdetails) {
      this.userId = this.userdetails.user.id;
      this.token = this.userdetails.access_token;
    }
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (!this.Id) {
      this.Id = 0;
    }
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "Understanding & Communication" },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
      const response1 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "GA" },
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.list1 = response1.data.list;
      } else {
        this.list1 = [];
      }
      const response2 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "SC" },
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.list2 = response2.data.list;
      } else {
        this.list2 = [];
      }
      const response3 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "GAWP" },
        { headers }
      );
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.list3 = response3.data.list;
      } else {
        this.list3 = [];
      }
      const response4 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "LA-H" },
        { headers }
      );
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.list4 = response4.data.list;
      } else {
        this.list4 = [];
      }
      const response5 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "LA-S/W" },
        { headers }
      );

      if (response5.data.code == 200 || response5.data.code == "200") {
        this.list5 = response5.data.list;
        console.log('6 list',this.list5);
      } else {
        this.list5 = [];
      }
      const response6 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "PIS" },
        { headers }
      );
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.list6 = response6.data.list;
      } else {
        this.list6 = [];
      }
    },
    ontabchange(ind, val) {
      this.checkedList[ind] = val;
    },
    ontabchange1(ind, val) {
      this.checkedList1[ind] = val;
    },
    ontabchange2(ind, val) {
      this.checkedList2[ind] = val;
    },
    ontabchange3(ind, val) {
      this.checkedList3[ind] = val;
    },
    ontabchange4(ind, val) {
      this.checkedList4[ind] = val;
    },
    ontabchange5(ind, val) {
      this.checkedList5[ind] = val;
    },
    ontabchange6(ind, val) {
      this.checkedList6[ind] = val;
    },
    gototab2() {
      if (this.list.length == Object.values(this.checkedList).length) {
        this.$refs.tab2.classList.add("active");
        this.$refs.tab1.classList.remove("active");
        this.$refs.navdiv1.classList.remove("active");
        this.$refs.navdiv1.classList.remove("show");
        this.$refs.navdiv2.classList.add("active");
        this.$refs.navdiv2.classList.add("show");
        this.ChangeTextofNav(2);
      } else {
        window.alert("Please attempt all question");
      }
    },
    gototab3() {
      if (this.list1.length == Object.values(this.checkedList1).length) {
        this.$refs.tab3.classList.add("active");
        this.$refs.tab2.classList.remove("active");
        this.$refs.navdiv2.classList.remove("active");
        this.$refs.navdiv2.classList.remove("show");
        this.$refs.navdiv3.classList.add("active");
        this.$refs.navdiv3.classList.add("show");
        this.ChangeTextofNav(3);
      } else {
        window.alert("Please attempt all question");
      }
    },
    gototab4() {
      if (this.list2.length == Object.values(this.checkedList2).length) {
        this.$refs.tab4.classList.add("active");
        this.$refs.tab3.classList.remove("active");
        this.$refs.navdiv3.classList.remove("active");
        this.$refs.navdiv3.classList.remove("show");
        this.$refs.navdiv4.classList.add("active");
        this.$refs.navdiv4.classList.add("show");
        this.ChangeTextofNav(4);
      } else {
        window.alert("Please attempt all question");
      }
    },
    gototab5() {
      if (this.list3.length == Object.values(this.checkedList3).length) {
        this.$refs.tab5.classList.add("active");
        this.$refs.tab4.classList.remove("active");
        this.$refs.navdiv4.classList.remove("active");
        this.$refs.navdiv4.classList.remove("show");
        this.$refs.navdiv5.classList.add("active");
        this.$refs.navdiv5.classList.add("show");
        this.ChangeTextofNav(5);
      } else {
        window.alert("Please attempt all question");
      }
    },
    gototab6() {
      if (this.list4.length == Object.values(this.checkedList4).length) {
        this.$refs.tab6.classList.add("active");
        this.$refs.tab5.classList.remove("active");
        this.$refs.navdiv5.classList.remove("active");
        this.$refs.navdiv5.classList.remove("show");
        this.$refs.navdiv6.classList.add("active");
        this.$refs.navdiv6.classList.add("show");
        this.ChangeTextofNav(6);
      } else {
        window.alert("Please attempt all question");
      }
    },
    gototab7() {
      if (this.list5.length == Object.values(this.checkedList5).length) {
        this.$refs.tab7.classList.add("active");
        this.$refs.tab6.classList.remove("active");
        this.$refs.navdiv6.classList.remove("active");
        this.$refs.navdiv6.classList.remove("show");
        this.$refs.navdiv7.classList.add("active");
        this.$refs.navdiv7.classList.add("show");
        this.ChangeTextofNav(7);
      } else {
        window.alert("Please attempt all question");
      }
    },
    Backtab1() {
      this.ChangeTextofNav(1);
      this.$refs.tab2.classList.remove("active");
      this.$refs.tab1.classList.add("active");
      this.$refs.navdiv1.classList.add("active");
      this.$refs.navdiv1.classList.add("show");
      this.$refs.navdiv2.classList.remove("active");
      this.$refs.navdiv2.classList.remove("show");
    },
    Backtab2() {
      this.ChangeTextofNav(2);
      this.$refs.tab3.classList.remove("active");
      this.$refs.tab2.classList.add("active");
      this.$refs.navdiv2.classList.add("active");
      this.$refs.navdiv2.classList.add("show");
      this.$refs.navdiv3.classList.remove("active");
      this.$refs.navdiv3.classList.remove("show");
    },
    Backtab3() {
      this.ChangeTextofNav(3);
      this.$refs.tab4.classList.remove("active");
      this.$refs.tab3.classList.add("active");
      this.$refs.navdiv3.classList.add("active");
      this.$refs.navdiv3.classList.add("show");
      this.$refs.navdiv4.classList.remove("active");
      this.$refs.navdiv4.classList.remove("show");
    },
    Backtab4() {
      this.ChangeTextofNav(4);
      this.$refs.tab5.classList.remove("active");
      this.$refs.tab4.classList.add("active");
      this.$refs.navdiv4.classList.add("active");
      this.$refs.navdiv4.classList.add("show");
      this.$refs.navdiv5.classList.remove("active");
      this.$refs.navdiv5.classList.remove("show");
    },
    Backtab5() {
      this.ChangeTextofNav(5);
      this.$refs.tab6.classList.remove("active");
      this.$refs.tab5.classList.add("active");
      this.$refs.navdiv5.classList.add("active");
      this.$refs.navdiv5.classList.add("show");
      this.$refs.navdiv6.classList.remove("active");
      this.$refs.navdiv6.classList.remove("show");
    },
    Backtab6() {
      this.ChangeTextofNav(6);
      this.$refs.tab7.classList.remove("active");
      this.$refs.tab6.classList.add("active");
      this.$refs.navdiv6.classList.add("active");
      this.$refs.navdiv6.classList.add("show");
      this.$refs.navdiv7.classList.remove("active");
      this.$refs.navdiv7.classList.remove("show");
    },
    ChangeTextofNav(tabval) {
      this.resetTabNav();
      switch (tabval) {
        case 1:
          this.tab1 = 1;
          break;
        case 2:
          this.tab2 = 1;
          break;
        case 3:
          this.tab3 = 1;
          break;
        case 4:
          this.tab4 = 1;
          break;
        case 5:
          this.tab5 = 1;
          break;
        case 6:
          this.tab6 = 1;
          break;
        case 7:
          this.tab7 = 1;
      }
    },
    resetTabNav() {
      this.tab1 = 0;
      this.tab2 = 0;
      this.tab3 = 0;
      this.tab4 = 0;
      this.tab5 = 0;
      this.tab6 = 0;
      this.tab7 = 0;
    },
    async OnTestSubmit() {
      if (confirm("Are you sure you want to submit this entry")) {
      if (
        this.list.length == Object.values(this.checkedList).length &&
        this.list1.length == Object.values(this.checkedList1).length &&
        this.list2.length == Object.values(this.checkedList2).length &&
        this.list3.length == Object.values(this.checkedList3).length &&
        this.list4.length == Object.values(this.checkedList4).length &&
        this.list5.length == Object.values(this.checkedList5).length &&
        this.list6.length == Object.values(this.checkedList6).length
      ) {
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userId,
              patient_id: this.Id,
              test_name: "whodas",
              test_section_name: "WHODAS",
              result: JSON.stringify([
                { UC: this.checkedList },
                { GA: this.checkedList1 },
                { SC: this.checkedList2 },
                { GAWP: this.checkedList3 },
                { LAH: this.checkedList4 },
                { LASW: this.checkedList5 },
                { PIS: this.checkedList6 },
              ]),
              user_ip_address: this.Ipaddress,
            },
            { headers }
          );
          console.log("my response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            localStorage.setItem(
              "whodasresult",
              JSON.stringify(response.data.result)
            );

            this.$router.push({
              path: "/modules/Intervention/whodas-result",
              query: { id: this.Id },
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        } catch (e) {
          this.loader = false;
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } else {
        window.alert("Please check All Module and attempt all question");
      }
    }
    },
    async GetUserIpAddress() {
      const {
        data: { ip },
      } = await this.$axios.get("https://www.cloudflare.com/cdn-cgi/trace", {
        responseType: "text",
        transformResponse: (data) =>
          Object.fromEntries(
            data
              .trim()
              .split("\n")
              .map((line) => line.split("="))
          ),
      });
      this.Ipaddress = ip;
    },
  },
};
</script>
