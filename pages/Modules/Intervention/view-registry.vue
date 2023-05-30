<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
         <Loader v-if="loader" />
        <div class="container-fluid px-4 shharp">
          <div class="page-title">
            <h1>SHHARP REGISTRATION</h1>
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="risk-factors-tab"
                data-bs-toggle="tab"
                href="#risk-factors"
                role="tab"
                aria-controls="risk-factors"
                aria-selected="true"
                >Risk Factors</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="protective-tab"
                data-bs-toggle="tab"
                href="#protective"
                role="tab"
                aria-controls="protective"
                aria-selected="false"
                >Protective Factors</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="selfharm-tab"
                data-bs-toggle="tab"
                href="#selfharm"
                role="tab"
                aria-controls="selfharm"
                aria-selected="false"
                >Self Harm</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="suicide-tab"
                data-bs-toggle="tab"
                href="#suicide"
                role="tab"
                aria-controls="suicide"
                aria-selected="false"
                >Suicide Risk</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="hospital-management-tab"
                data-bs-toggle="tab"
                href="#hospital-management"
                role="tab"
                aria-controls="hospital-management"
                aria-selected="false"
                >Hospital Management</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="data-producer-tab"
                data-bs-toggle="tab"
                href="#data-producer"
                role="tab"
                aria-controls="data-producer"
                aria-selected="false"
                >Data Producer</a
              >
            </li>
          </ul>
          <div class="tab-content shharp" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="risk-factors"
              role="tabpanel"
              aria-labelledby="risk-factors-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>Risk Factors</h4>
                    <p>Instruction : Please Tick (/) In The Box Provided</p>
                  </div>

                    <div class="row mb-3">
                      <!-- 1. -->
                      <label class="col-sm-5 col-form-label"><span>1</span>Presence of psychiatric disorder</label>
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box">
                        <input class="form-check-input radio" type="radio" id="no" value="No" name="Presence of psychiatric disorder"
                         v-model="first" disabled/>
                        <label class="form-check-label label" for="no">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box">
                        <input class="form-check-input radio" type="radio" id="yes" name="Presence of psychiatric disorder"
                         value="Yes" v-model="first" disabled/>
                        <label class="form-check-label label" for="yes">YES</label>
                        </div>
                         <div class="step-form-box1 box-01" v-show="first=='Yes'">
                          <select id="firstbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" disabled style="width:100%">
                            <option
                              v-for="catcode in diagonisislist"
                              v-bind:key="catcode.id"
                              v-bind:value="catcode.id">
                            {{ catcode.icd_code }} {{catcode.icd_name}}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"><span>2</span>Hopelessness or despair</label>
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no1"
                            name="Hopelessness or Despair" value="No" v-model="second"
                            disabled
                          />
                          <label class="form-check-label" for="no1">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes1"
                            name="Hopelessness or Despair" value="Yes" v-model="second"
                            disabled
                          />
                          <label class="form-check-label" for="yes1">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>3</span>Previous suicide attempts</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box1">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no2"
                            name="Previous suicide attempts"  value="No" v-model="third"
                            disabled
                          />
                          <label class="form-check-label" for="no2">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box1">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes2"
                            name="Previous suicide attempts"   value="Yes" v-model="third"
                            disabled
                          />
                          <label class="form-check-label" for="yes2">YES</label>
                        </div>
                        <div class="step-form-box2 box-02" v-if="third == 'Yes'">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Please Specify (times)" v-model="thirdbox"
                            disabled style="width:100%"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>4</span>Presence of substance use/abuse</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box2">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no3"
                            name="Prresence os substance use/abuse" value="No" v-model="fourth"
                            disabled
                          />
                          <label class="form-check-label" for="no3">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box2">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes3"
                            name="Prresence os substance use/abuse" value="Yes" v-model="fourth"
                            disabled
                          />
                          <label class="form-check-label" for="yes3">YES</label>
                        </div>
                        <div class="step-form-box4 box-4" v-show="fourth=='Yes'">
                          <select id="fourthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" disabled style="width:100%"
                          >
                           <option
                              v-for="catcode in typesofsubstance"
                              v-bind:key="catcode.id"
                              v-bind:value="catcode.id"
                            >
                              {{ catcode.section_value }}
                            </option>
                            <option v-for="other in riskfourthother" selected
                              v-bind:key="other"
                              v-bind:value="other"
                              >{{ other }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>5</span>Family history of suicidal
                        behavior</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no4"
                            name="family history of suicidal behavior" value="No" v-model="fifth"
                            disabled
                          />
                          <label class="form-check-label" for="no4">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes4"
                            name="family history of suicidal behavior" value="Yes" v-model="fifth"
                            disabled
                          />
                          <label class="form-check-label" for="yes4">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>6</span>Family history of psychiatric
                        disorders</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box3">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no5"
                            name="family history of psychiatric disorders"  value="No" v-model="sixth" disabled
                          />
                          <label class="form-check-label" for="no5">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box3">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes5"
                            name="family history of psychiatric disorders" value="Yes" v-model="sixth" disabled
                          />
                          <label class="form-check-label" for="yes5">YES</label>
                        </div>
                        <div class="step-form-box6 box-6" v-show="sixth=='Yes'">
                          <select id="sixthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" disabled style="width:100%">
                         <option
                            v-for="catcode in diagonisislist"
                            v-bind:key="catcode.id"
                            v-bind:value="catcode.id"
                          >
                          {{ catcode.icd_code }} {{catcode.icd_name}}
                          </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>7</span>Family history of substance abuse</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box4">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no6"
                            name="family history of substance abuse" value="No" v-model="seventh" disabled
                          />
                          <label class="form-check-label" for="no6">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box4">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes6"
                            name="family history of substance abuse" value="Yes" v-model="seventh" disabled
                          />
                          <label class="form-check-label" for="yes6">YES</label>
                        </div>
                        <div class="step-form-box7 box-7" v-show="seventh=='Yes'">
                          <select id="seventhbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" disabled style="width:100%"
                          >
                           <option
                              v-for="catcode in typesofsubstance"
                              v-bind:key="catcode.id"
                              v-bind:value="catcode.id"
                            >
                              {{ catcode.section_value }}
                            </option>
                            <option v-for="other in riskseventhother" selected
                              v-bind:key="other"
                              v-bind:value="other"
                              >{{ other }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>8</span>Stressful life events or loss</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box5">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no7"
                            name="stressful life events or loss" value="No" v-model="eight" disabled
                          />
                          <label class="form-check-label" for="no7">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box5">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes7"
                            name="stressful life events or loss"  value="Yes" v-model="eight" disabled
                          />
                          <label class="form-check-label" for="yes7">YES</label>
                        </div>
                        <div class="step-form-box8 box-8" v-show="eight=='Yes'">
                          <select id="eightbox"
                            class="form-select multiselect select2-accessible" multiple="multiple" disabled style="width:100%"

                          >
                           <option
                              v-for="catcode in stresslist"
                              v-bind:key="catcode.id"
                              v-bind:value="catcode.id"
                            >
                              {{ catcode.section_value }}
                            </option>
                            <option v-for="other in riskeightother" selected
                              v-bind:key="other"
                              v-bind:value="other"
                              >{{ other }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>9</span>Isolation, rejection or feelings of
                        shame</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no8" value="No" v-model="nine"
                            name="Isolation, rejection or feelings of shame"
                            disabled
                          />
                          <label class="form-check-label" for="no8">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes8" value="Yes" v-model="nine"
                            name="Isolation, rejection or feelings of shame"
                            disabled
                          />
                          <label class="form-check-label" for="yes8">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>10</span>chronic physical illness or
                        condition</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box6">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no9" value="No" v-model="tenth"
                            name="chronic physical illness or condition"
                            disabled
                          />
                          <label class="form-check-label" for="no9">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box6">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes9" value="Yes" v-model="tenth"
                            name="chronic physical illness or condition"
                            disabled
                          />
                          <label class="form-check-label" for="yes9">YES</label>
                        </div>
                        <div class="step-form-box10 box10" v-if="tenth=='Yes'">
                          <input
                            type="text"
                            class="form-control" v-model="tenthbox"
                            placeholder="Please Specify (times)"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>11</span>History of physical , sexual or
                        emotional abuse</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no10" value="No" v-model="eleven"
                            name="History of physical , sexual or emotional abuse"
                            disabled
                          />
                          <label class="form-check-label" for="no10">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes10" value="Yes" v-model="eleven"
                            name="History of physical , sexual or emotional abuse"
                            disabled
                          />
                          <label class="form-check-label" for="yes10"
                            >YES</label
                          >
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>12</span>Access to lethal methods/weapons</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="no11" value="No" v-model="twelth"
                            name="access to lethal methods/weapons"
                            disabled
                          />
                          <label class="form-check-label" for="no11">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes11" value="Yes" v-model="twelth"
                            name="access to lethal methods/weapons"
                            disabled
                          />
                          <label class="form-check-label" for="yes11"
                            >YES</label
                          >
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                     <Error :message="error" v-if="error" />
                     <br><br>
                    <div class="d-flex">
                      <div class=" mr-auto">
                        <button class="nexttab btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>

                    </div>
                  <!-- </form> -->
                </div>
              </div>
              <!-- card -->
            </div>
            <!-- tab-close -->
            <div
              class="tab-pane fade"
              id="protective"
              role="tabpanel"
              aria-labelledby="protective-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>Protective Factors</h4>
                    <p>Instruction : Please Tick (/) In The Box Provided</p>
                  </div>

                    <div
                      class="row mb-3 align-items-center"
                      v-for="(pro, index) in protectivefactorlist"
                      :key="index"
                    >
                      <label class="col-sm-5 col-form-label"
                        ><span>{{ index+1 }}</span
                        >{{ pro.Question_detail[0].Question }}</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="No" value="No"
                             v-bind:name="'pro' + index" v-model="pro.answer"
                             disabled

                          />
                          <label class="form-check-label" for="no">{{
                            pro.Question_detail[0].Options1
                          }}</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            id="yes"
                             v-bind:name="'pro' + index"
                            value="Yes"  v-model="pro.answer"
                            disabled
                          />
                          <label class="form-check-label" for="yes">{{
                            pro.Question_detail[0].Options2
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <br><br>
                     <div class="d-flex">
                          <button class="pre-1 btn btn-success mr-auto"><i class="fad fa-arrow-to-left"></i> Back</button>
                          <div class="ml-auto">
                              <button class="nex-1 btn btn-success next-btn">Next <i class="fad fa-arrow-alt-to-right"></i></button>
                          </div>
                      </div>

                </div>
              </div>
            </div>

           <!-- start self -->
            <!-- tab-close -->
            <div
              class="tab-pane fade"
              id="selfharm"
              role="tabpanel"
              aria-labelledby="selfharm-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>The Self-Harm Act &amp; Suicidal Intent</h4>
                    <p>please fill the below form</p>
                  </div>
                  <!-- <form class="step-form accordion-form"> -->
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div class="text-capitalize">
                              Section A: Current Self-Harm Act
                              <small
                                >(within past 2 weeks from time of
                                presentation)</small
                              >
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                          style=""
                        >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-sm-4">
                                <label class="form-label">Date</label>
                                <input type="date" class="form-control" v-model="Sdate" disabled/>
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label">Time</label>
                                <input type="time" class="form-control" v-model="Stime" disabled/>
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label"
                                  >Place of Occurrence</label
                                >
                                <select disabled class="form-select" @change="OnchangePlace($event)" v-model="place_id">
                                  <option value="0">Please Select</option>
                                 <option
                        v-for="slt in placelist"
                        v-bind:key="slt.section_value"
                        v-bind:value="slt.section_value"
                      >
                        {{ slt.section_value }}
                      </option>

                                </select>
                                <!-- SHOW_DIV -->
                              <div class="col-sm-120" v-if="place_id=='Other specified areas'">
                                    <div class="mb-3">
                                      <br>
                                      <input disabled
                                        type="text"
                                        class="form-control" v-model="place_other"
                                        placeholder="Please Specify"
                                      />
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                          <div class="text-capitalize">Section B: Method of Self-Harm</div>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                          style=""
                        >
                          <div class="accordion-body">
                            <p>
                              INSTRUCTION : PLEASE TICK (/) IN THE BOX PROVIDED
                            </p>
                            <div class="row mt-3">
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input overdose-poisoning radio"
                                    type="checkbox"
                                    value="Overdose/Poisoning"
                                    id="1" v-model="overdose"
                                    disabled
                                  />
                                  <label class="form-check-label" for="1">
                                    Overdose/Poisoning
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div v-if="overdose==true"
                                  class="
                                    col-sm-12
                                    overdose-poisoning-div
                                    mt-3
                                  "
                                >
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                      <input
                                        type="text"
                                        class="form-control" v-model="Overdosespecify"
                                        placeholder="Please Specify"
                                        disabled
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Hanging/Suffocation"
                                    id="2" v-model="hanging"
                                    disabled
                                  />
                                  <label class="form-check-label" for="2">
                                    Hanging/Suffocation
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Drowning"
                                    id="3" v-model="drowning"
                                    disabled
                                  />
                                  <label class="form-check-label" for="3">
                                    Drowning
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Firearms or explosives"
                                    id="4" v-model="firearmsorexplosives"
                                    disabled
                                  />
                                  <label class="form-check-label" for="4">
                                    Firearms or explosives
                                  </label>
                                </div>
                                <!-- checkbox -->
                              </div>
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Fire/flames"
                                    id="5"   v-model="fire_flames"
                                    disabled
                                  />
                                  <label class="form-check-label" for="5">
                                    Fire/flames
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Cutting or Piercing"
                                    id="6"  v-model="cuttingorpiercing"
                                    disabled

                                  />
                                  <label class="form-check-label" for="6">
                                    Cutting or Piercing
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Jumping from height"
                                    id="7"  v-model="jumpingfromheight"
                                    disabled
                                  />
                                  <label class="form-check-label" for="7">
                                    Jumping from height
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input selfharm-other radio"
                                    type="checkbox"
                                    value="Other" v-model="other_sh"
                                    id="8"
                                    disabled
                                  />
                                  <label class="form-check-label" for="8">
                                    Others
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div v-if="other_sh==true"
                                  class="col-sm-12 selfharm-other-div mt-3"
                                >
                                  <div class="mb-3" >
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="selfharm_other"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                          <div class="text-capitalize">Section C: How did Patient Get Idea about Method</div>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                          style=""
                        >
                          <div class="accordion-body">
                            <p>
                              INSTRUCTION : PLEASE TICK (/) IN THE BOX PROVIDED
                            </p>
                            <div class="row mt-3">
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Family, friends, peer group"
                                    id="1.1" v-model="family"
                                    disabled
                                  />
                                  <label class="form-check-label" for="1.1">
                                    Family, friends, peer group
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Internet (website, social media platform,app, blogs, forum, video/photosharing)"
                                    id="2.2" v-model="internet"
                                    disabled
                                  />
                                  <label class="form-check-label" for="2.2">
                                    Internet (website, social media platform,
                                    app, blogs, forum, video/photosharing)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Printed media (newspaper, books, magazine, etc)"
                                    id="3.3" v-model="printed"
                                    disabled
                                  />
                                  <label class="form-check-label" for="3.3">
                                    Printed media (newspaper, books, magazine,
                                    etc)
                                  </label>
                                </div>
                                <!-- checkbox -->
                              </div>
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Broadcast media (television, radio)"
                                    id="5.5" v-model="broadcast"
                                    disabled
                                  />
                                  <label class="form-check-label" for="5.5">
                                    Broadcast media (television, radio)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    value="Own ideas"
                                    id="4.4" v-model="ideas"
                                    disabled
                                  />
                                  <label class="form-check-label" for="4.4">
                                    Own ideas
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input specify-other radio"
                                    type="checkbox"
                                    value="Specify patient actual words"
                                    id="6.6" v-model="patientactualword"
                                    disabled
                                  />
                                  <label class="form-check-label" for="6.6">
                                    Specify patient actual words
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div
                                v-if="patientactualword==true"
                                  class="col-sm-12 specify-other-div mt-3"
                                >
                                  <div class="mb-3">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="patientactualword_other"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="heading4">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            <div class="text-capitalize">Section D: Suicidal Intent</div>
                          </button>
                        </h2>
                         <div
                          id="collapse4"
                          class="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordionExample"
                          style=""
                        >
                          <div class="accordion-body">
                            <p>
                              INSTRUCTION : PLEASE TICK (/) IN THE BOX PROVIDED
                            </p>
                            <div class="mb-3 mt-3">
                              <label class="form-label"
                                >Was there an intent?</label
                              >
                              <div class="mt-2">
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent radio"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="no" v-model="patient_intent"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio1"
                                    >No</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent radio"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="intent-yes" v-model="patient_intent"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio2"
                                    >Yes</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent radio"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio3"
                                    value="Undetermined" v-model="patient_intent"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio3"
                                    >Undetermined</label
                                  >
                                </div>
                              </div>
                              <!-- SHOW_DIV -->
                              <div class="col-sm-12 intent-div mt-4 hide">
                                <div class="form-check form-check-inline">
                                  <input disabled
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="verbal"
                                    value="verbal"  @change="OnpatientIntent('verbal',$event)"
                                    v-model="verbal"

                                  />
                                  <label class="form-check-label" for="verbal"
                                    >Verbal</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="messaging"
                                    value="Messaging" @change="OnpatientIntent('Messaging',$event)"
                                    v-model="Messaging"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="messaging"
                                    >Messaging
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="rehearsing"
                                    value="Rehearsing" @change="OnpatientIntent('Rehearsing',$event)"
                                    v-model="Rehearsing"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="rehearsing"
                                    >Rehearsing</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="not-Expressed"
                                    value="Not Expressed" @change="OnpatientIntent('Not Expressed',$event)"
                                    v-model="Expressed"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="not-Expressed"
                                    >Not Expressed
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="handwritten"
                                    value="Handwritten" @change="OnpatientIntent('Handwritten',$event)"
                                    v-model="Handwritten"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="handwritten"
                                    >Handwritten</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="social-media"
                                    value="Social Media" @change="OnpatientIntent('Social Media',$event)"
                                    v-model="SocialMedia"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="social-media"
                                    >Social Media</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input radio"
                                    type="checkbox"
                                    id="learn-more"
                                    value="Learn more" @change="OnpatientIntent('Learn more',$event)"
                                    v-model="Learnmore"
                                    disabled
                                  />
                                  <label
                                    class="form-check-label"
                                    for="learn-more"
                                    >Efforts to learn more</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent-other radio"
                                    type="checkbox"
                                    id="Other"
                                    value="Other" @change="OnpatientIntent('Other',$event)"
                                    v-model="Other"
                                    disabled
                                  />
                                  <label class="form-check-label" for="Other"
                                    >Others</label
                                  >
                                  <!-- SHOW_DIV -->
                                  <div class="" style="margin-left: 20px;" v-if="Other">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="intent_other"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="heading5">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            <div class="text-capitalize">Section E: Level of Suicidal Intent</div>
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          class="accordion-collapse collapse"
                          aria-labelledby="heading5"
                          data-bs-parent="#accordionExample"
                          style=""
                        >
                          <div class="accordion-body">
                            <div class="row mt-3">
                              <div class="col-sm-6">
                                <!--SI-01 radio-group -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >01. Isolation</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si01"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Somebody present
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si01"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Somebody nearby, or in visual or vocal contact
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si01"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 No one nearby or in visual or vocal contact
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-09 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >09. Alleged purpose of attempt</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si09"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 To manipulate environment, get attention, get revenge
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si09"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Components of above and below
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si09"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 To escape, surcease, solve problems
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-02 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >02. Timing</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si02"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Intervention is probable
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si02"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Intervention is not likely
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si02"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Intervention is highly unlikely
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-10 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >10. Expectations of fatality</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si10"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Thought that death was unlikely
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si10"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Thought that death was possible but not probable
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si10"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Thought that death was probable or certain
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-03 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >03. Precautions against discovery/intervention</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si03"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 No precautions
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si03"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Passive precautions (e.g.; alone in room with unlocked door)
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si03"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Active precautions (as locked door)
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-11 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >11. Conception of method's lethality</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si11"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did less to self that s/he thought would be lethal
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si11"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Wasn't sure if what s/he did would be lethal
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si11"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Equaled or exceed what s/he thought would be lethal
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-04 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >04. Acting to get help during/after attempt</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si04"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Notified potential helper regarding attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si04"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Contacted but did not specifically notify regarding attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si04"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Did not contact or notify potential helper
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-12 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >12. Seriousness of attempt</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si12"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did not seriously attempt to end life
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si12"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Uncertain about seriousness to end life
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si12"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Seriously attempted to end life
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-05 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >05. Final acts in anticipating of death (will, gifts, insurance)</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si05"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si05"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Thought about or made some arrangements
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si05"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Made definite plans or completed arrangements
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-13 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >13. Attitude towards living/dying</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si13"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did not want to die
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si13"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Components of above and below
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si13"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Wanted to die
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-06 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >06. Active preparation for attempt</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si06"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si06"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Minimal to moderate
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si06"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Extensive
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-14 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >14. Conception of medical rescuability</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si14"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Thought death would be unlikely if received medical attention
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si14"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Was uncertain if death could be averted by medical attention
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si14"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Was certain of death even if received medical attention
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-07 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >07. Suicide note</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si07"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Absence of note
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si07"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Note written, but torn up; note thought about
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si07"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Presence of note
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-15 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >15. Degree of premeditation</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si15"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None; impulsive
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si15"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Suicide contemplated for 3 hours or less prior to attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si15"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Suicide contemplated for more than 3 hours prior to attempt
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <!--SI-08 radio-group( arrangement-refer add registry) -->
                                <div class="radio-group mb-3">
                                  <label class="form-label"
                                    >08. Overt communication of intent before the attempt</label
                                  >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si08"
                                      value="0"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si08"
                                      value="1"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Equivocal communication (ambiguous)
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input radio"
                                      type="radio"
                                      v-model="si08"
                                      value="2"
                                      disabled
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Unequivocal communication (unambiguous)
                                    </label>
                                  </div>
                                </div>
                              </div>
                <div class="col-sm-4">
                  <Error :message="error" v-if="error" />

                <table class="self-harm" v-if="this.testresult">
                  <tbody>
                    <tr>
                      <th>Score:</th>
                      <td>{{testresult.section_value}}</td>
                    </tr>
                    <tr>
                      <th>Level of Suicidal Intent:</th>
                      <td>{{this.testresultlevel}}</td>
                    </tr>
                  </tbody>
                </table>
                </div>

                            </div>
                            <!-- row -->
                          </div>
                        </div>
                      </div>
                    </div>
                       <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <br><br>
                    <div class="d-flex">
                      <button class="pre-2 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-2 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                    </div>

                </div>
              </div>
            </div>

          <!-- end self -->
            <!-- tab-close -->
            <div
              class="tab-pane fade"
              id="suicide"
              role="tabpanel"
              aria-labelledby="suicide-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>Suicide Risk</h4>
                  </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Level of Suicide Risk For Current Attempt</label
                      >
                      <table class="table">
                        <thead>
                          <tr>
                            <th width="20%"><b>Risk Level</b></th>
                            <th scope="col">
                              <b>Based on Risk Factor/Protective Factor/Suicidal
                              Intent</b>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input radio"
                                  type="radio"
                                  name="risk-level"
                                  id="High"
                                  value="High"
                                  v-model="result"
                                  disabled
                                />
                                <label class="form-check-label" for="High">
                                  High
                                </label>
                              </div>
                            </td>
                            <td>
                              <div>
                                Psychiatric diagnoses with severe symptoms or
                                acute precipitating events; protective factors
                                not relevant; high suicidal intent
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input radio"
                                  type="radio"
                                  name="risk-level"
                                  id="moderate"
                                     value="Moderate"
                                  v-model="result"
                                  disabled
                                />
                                <label class="form-check-label" for="moderate">
                                  Moderate
                                </label>
                              </div>
                            </td>
                            <td>
                              <div>
                                Multiple risk factors, few protective factors,
                                moderate suicidal intent
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input radio"
                                  type="radio"
                                  name="risk-level"
                                  id="low"
                                  value="Low"
                                  v-model="result"
                                  disabled
                                />
                                <label class="form-check-label" for="low">
                                  Low
                                </label>
                              </div>
                            </td>
                            <td>
                              <div>
                                Modifiable risk factors, strong protective
                                factors, no or low suicidal intent
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                     <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <br><br>
                    <div class="d-flex">
                      <button class="pre-3 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-3 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>

                      </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- tab-close -->
            <div
              class="tab-pane fade"
              id="hospital-management"
              role="tabpanel"
              aria-labelledby="hospital-management-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>Hospital Management</h4>
                    <p>PLEASE FILL THE BELOW FORM</p>
                  </div>

                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Referral or Contact point</label
                      >
                      <div class="col-sm-3">

                        <select
                          v-model="referral_or_contact"
                          class="form-select referral-contact-point"
                          aria-label="Default select example"
                          disabled
                        >
                        <option value="0">
                           Please select
                          </option>
                          <option
                            v-for="referal in referallist"
                            v-bind:key="referal.id"
                            v-bind:value="referal.id"
                          >
                            {{ referal.section_value }}
                          </option>
                        </select>
                      </div>
                      <div class="col-sm-3" v-if="referral_or_contact=='Others' || referral_or_contact==194">
                          <input
                            type="text"
                            class="form-control"
                            v-model="referral_or_contact_other"
                            placeholder="Please Specify"
                            disabled
                          />
                        </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Mode of Arrival</label
                      >
                      <div class="col-sm-3">
                        <select
                          v-model="arrival_mode"
                          class="form-select mode-of-arrival"
                          aria-label="Default select example"
                          disabled
                        >
                         <option value="0">
                           Please select
                          </option>
                          <option
                            v-for="mode in modelist"
                            v-bind:key="mode.id"
                            v-bind:value="mode.id"
                          >
                            {{ mode.section_value }}
                          </option>
                        </select>
                      </div>
                      <div
                        class="
                          col-sm-3" v-if="arrival_mode=='Others' || arrival_mode==201"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Specify" v-model="arrival_mode_other"
                          disabled
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >First psychiatry assessment after current
                        attempt</label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date</label>
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Please Specfy" v-model="date"
                          disabled
                        />
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Time</label>
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Please Specfy" v-model="time"
                          disabled
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Physical consequence of current attempt</label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no radio"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca1" value="No significant physical harm, No medical treatment required"
                             v-model="physical_consequences"
                             disabled
                          />
                          <label class="form-check-label" for="pcoca1">
                            No significant physical harm, No medical treatment
                            required
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no radio"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca2" value="Medical attention/Surgery required, but no danger to
                            life" v-model="physical_consequences"
                            disabled
                          />
                          <label class="form-check-label" for="pcoca2">
                            Medical attention/Surgery required, but no danger to
                            life
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no radio"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca3" value="Medical attention/Surgery required, had/has danger
                            to life" v-model="physical_consequences"
                            disabled
                          />
                          <label class="form-check-label" for="pcoca3">
                            Medical attention/Surgery required, had/has danger
                            to life
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no radio"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca4" value="Lethal" v-model="physical_consequences"
                            disabled
                          />
                          <label class="form-check-label" for="pcoca4">
                            Lethal
                          </label>
                        </div>
                        <div class="form-check other-show-div">
                          <input
                            class="form-check-input aborted-yes radio"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca5" value="Aborted" v-model="physical_consequences"
                            disabled
                          />
                          <label class="form-check-label" for="pcoca5">
                            Aborted
                          </label>
                          <div>
                            <!-- SHOW_input -->
                          <input v-show="physical_consequences_des"
                            style="margin-left: 80px;"
                            type="text"
                            class="form-control aborted-div"
                            id="aborted"
                            placeholder="Please Specify"
                           v-model="physical_consequences_des"
                           disabled
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >If patient admitted for current attempt<small style="color:red">*</small></label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input pafca-no radio"
                            type="radio"
                            name="If patient admitted for current attempt"
                            id="pafca1" value="No" v-model="patient_admitted"
                            disabled
                          />
                          <label class="form-check-label" for="pafca1">
                            No
                          </label>
                        </div>
                        <div class="form-check other-show-div">
                          <input
                            class="form-check-input pafca-yes radio"
                            type="radio"
                            name="If patient admitted for current attempt"
                            id="pafca2"  value="Yes" v-model="patient_admitted"
                            disabled
                          />
                          <label class="form-check-label" for="pafca2">
                            Yes
                          </label>
                          <input
                              v-show="patient_admitted_des"
                              type="text"
                              class="pafca-other-div"
                              placeholder="Please Specify" v-model="patient_admitted_des"
                              disabled
                            />
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Status on Discharge</label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            name="Status on Discharge"
                            id="sond1" value="Dead" v-model="discharge_status"
                            disabled
                          />
                          <label class="form-check-label" for="sond1">
                            Dead
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="radio"
                            name="Status on Discharge"
                            id="sond2" value="Alive" v-model="discharge_status"
                            disabled
                          />
                          <label class="form-check-label" for="sond2">
                            Alive
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Discharge Details</label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" v-model="discharge_date" disabled/>
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Number of days in ward</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Days" v-model="discharge_number_days_in_ward"
                          disabled
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-3 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Discharge Diagnosis(ICD-10)<small style="color:red">*</small></label
                      >
                      <div class="col-sm-4">
                        <label class="form-label"
                          >Main psychiatric diagnosis<small style="color:red">*</small></label
                        >
                          <select
                          v-model="main_psychiatric_diagnosis"
                          class="form-select"
                          aria-label="Default select example"
                          disabled
                        >
                        <option value="0">Please Select</option>
                           <option
                            v-for="catcode in diagonisislist"
                            v-bind:key="catcode.id"
                            v-bind:value="catcode.id"
                          >
                          {{ catcode.icd_code }} {{catcode.icd_name}}
                          </option>
                        </select>
                      </div>
                    </div>
                    <!-- close row -->
                    <div class="row mb-4 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"></label>
                      <div class="col-sm-4">
                          <label class="form-label"
                          >Additional psychiatric diagnosis</label
                          >
                          <select
                          id="additionalbox"
                          class="form-select multiselect" multiple="multiple" disabled
                        >
                           <option
                            v-for="catcode in diagonisislist"
                            v-bind:key="catcode.id"
                            v-bind:value="catcode.id"
                          >
                          {{ catcode.icd_code }} {{catcode.icd_name}}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-3 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"></label>
                      <div class="col-sm-4">
                        <label class="form-label"
                          >External cause of injury<small style="color:red">*</small></label
                        >
                        <select
                          class="form-select"
                          aria-label="Default select example" v-model="external_cause_inquiry"
                          disabled
                        >
                          <option value="0">Please Select</option>
                         <option
                          v-for="catcode in diagonisislist_external"
                          v-bind:key="catcode.id"
                          v-bind:value="catcode.id"
                        >
                        {{ catcode.icd_code }} {{catcode.icd_name}}
                        </option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"></label>
                      <div class="col-sm-4">
                      <label class="form-label"
                        >Additional external cause of injury</label
                      >
                        <select
                        id="externalbox"
                          class="form-select multiselect" multiple="multiple" disabled
                        >
                         <option
                          v-for="catcode in diagonisislist_external"
                          v-bind:key="catcode.id"
                          v-bind:value="catcode.id"
                        >
                        {{ catcode.icd_code }} {{catcode.icd_name}}
                        </option>
                        </select>
                      </div>
                      </div>
                    <!-- close-row -->
                    <div class="row mb-0 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Psychiatry Management on Discharge</label
                      >
                      <!-- <div class="col-sm-9">
                        <div class="form-check" v-for="(pb, index) in list1" :key="index">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d1" checked
                            disabled
                          />
                          <label class="form-check-label" for="psy-d1">
                            {{pb}}
                          </label>
                        </div>


                        <div class="col-sm-4 PSY-other-div mt-3" v-if="discharge_psy_mx_des">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Please Specify" v-model="discharge_psy_mx_des"
                            />
                          </div>
                        </div>
                      </div> -->
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d1"
                            v-model="psyd1"
                            value="Transferred to Psychiatry ward"
                            @change="OnMxdischarge('Transferred to Psychiatry ward')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d1">
                            Transferred to Psychiatry ward
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d2"
                            v-model="psyd2"
                            value="Given appt to Psychiatry clinic"
                            @change="OnMxdischarge('Given appt to Psychiatry clinic')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d2">
                            Given appt to Psychiatry clinic
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d3"
                            v-model="psyd3"
                            value="Referred to counsellor"
                            @change="OnMxdischarge('Referred to counsellor')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d3">
                            Referred to counsellor
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d4"
                            v-model="psyd4"
                            value="Discharge without any Psychiatry follow-up"
                            @change="OnMxdischarge('Discharge without any Psychiatry follow-up')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d4">
                            Discharge without any Psychiatry follow-up
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d5"
                            v-model="psyd5"
                            value="Refer Community Psychiatry Services"
                            @change="OnMxdischarge('Refer Community Psychiatry Services')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d6">
                            Refer Community Psychiatry Services
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input PSY-other radio"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d6"
                            v-model="psyd6"
                            value="Others"
                            @change="OnMxdischarge('Others')"
                            disabled
                          />
                          <label class="form-check-label" for="psy-d5">
                            Others
                          </label>
                        </div>
                        <!-- SHOW_DIV -->
                        <div class="col-sm-4 PSY-other-div mt-3" v-if="this.discharge_psy_mx_des">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Please Specify" v-model="discharge_psy_mx_des"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                        <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <br><br>
                    <!-- close-row -->
                    <div class="d-flex">
                      <button class="pre-4 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-4 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>

                      </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- tab-close -->
            <div
              class="tab-pane fade"
              id="data-producer"
              role="tabpanel"
              aria-labelledby="data-producer-tab"
            >
              <div class="card">
                <div class="card-body steps-form-body">
                  <div class="text">
                    <h4>Source Data Producer</h4>
                    <p>PLEASE FILL THE BELOW FORM</p>
                  </div>

                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label"
                          >Name of registering officer</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="officername"
                          disabled="false"
                        />
                      </div>
                      <!-- col-sm-6 -->
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label"
                          >Name of hospital</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="hospitalname"
                          disabled="false"
                        />
                      </div>
                      <!-- col-sm-6 -->
                    </div>
                    <!-- row -->
                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label">Designation</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="designation"
                          disabled="false"
                        />
                      </div>
                      <!-- col-sm-6 -->
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label"
                          >Name of Psychiatrist</label
                        >
                        <select
                          v-model="psychiatristId"
                          class="form-select"
                          aria-label="Default select example"
                          disabled
                        >
                        <option value="0">Select</option>
                          <option
                            v-for="phy in psychiatrist"
                            v-bind:key="phy.id"
                            v-bind:value="phy.id"
                          >
                            {{ phy.name }}
                          </option>
                        </select>
                      </div>
                      <!-- col-sm-6 -->
                    </div>
                    <!-- row -->
                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label"
                          >Date of Reporting</label
                        >
                        <input
                          class="form-control"
                          v-model="reportingdate"
                          disabled="false"
                        />
                      </div>
                      <!-- col-sm-6 -->
                    </div>
                    <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
        <br><br>
                    <!-- row -->
                    <div class="d-flex">
                      <button class="pre-5 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>

                    </div>
                </div>
              </div>
            </div>
            <!-- tab-close -->
          </div>
        </div>
            <div
      class="modal fade"
      id="Riskfactorpopup"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm test-connection">
        <div class="modal-content">
          <div class="modal-body">
            <p>Please Submit your Risk Factor First</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-ok"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  </div>
</template>
<script>
import PatientDetails from "../../../components/Patient/PatientDetails.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import moment from 'moment';
export default {
  components: { CommonSidebar, CommonHeader, PatientDetails },
  name: "patient-summary",
  data() {
    return {
      verbal:"",Messaging:"",Rehearsing:"",Expressed:"",Handwritten:"",SocialMedia:"",Learnmore:"",Other:"",
      userdetails: null,
      errors: [],
      error: null,
      loader: false,
      riskfactorlist: [],
      protectivefactorlist: [],
      referallist: [],
      modelist: [],
      psychiatrist: [],
      injurylist: [],
      placelist: [],
      list: [],
      diagonisislist: [],
      typesofsubstance: [],
      stresslist: [],
      overdoselist: [],
      hospitallist: [],
      thirdbox: "",
      tenthbox: "",
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: "",
      seventh: "",
      eight: "",
      nine: "",
      tenth: "",
      eleven: "",
      twelth: "",
      Id: 0,
      referral_or_contact: 0,
      arrival_mode: 0,
      referral_or_contact_other: "",
      arrival_mode_other: "",
      date: "",
      time: "",
      physical_consequences: "",
      physical_consequences_des: "",
      patient_admitted: "",
      patient_admitted_des: "",
      discharge_status: "",
      discharge_date: "",
      discharge_number_days_in_ward: 0,
      main_psychiatric_diagnosis: 0,
      external_cause_inquiry: 0,
      diagonisislist_external:[],
      discharge_psy_mx: "",
      discharge_psy_mx_des: "",
      officername: "",
      hospitalname: "",
      designation: "",
      reportingdate: "",
      psychiatristId: 0,
      user_ip_address: "",
      result: "",
      checkedList: {},
      procheckedList: {},
      testcheckedList: {},
      sharp_register_id: 0,
      selected: [],
      testresult: "",
      testresultlevel: "",
      Sdate: "",
      Stime: "",
      place_id: "",
      place_other: "",
      overdose: "",
      overdosevalue: "",
      Overdosespecify: "",
      hanging: "",
      drowning: "",
      firearmsorexplosives: "",
      fire_flames: "",
      cuttingorpiercing: "",
      jumpingfromheight: "",
      selfharm_other: "",
      other_sh: "",
      family: "",
      internet: "",
      printed: "",
      broadcast: "",
      ideas: "",
      patientactualword: "",
      patientactualword_other: "",
      patient_intent: "",
      patient_intent_value: "",
      intent_other: "",
      SItestscore: "",
      secB: "",
      secC: "",
      secD: "",
      list1: "",
      psyd1: "",
      psyd2: "",
      psyd3: "",
      psyd4: "",
      psyd5: "",
      psyd6: "",
      si01: 0,
      si02: 0,
      si03: 0,
      si04: 0,
      si05: 0,
      si06: 0,
      si07: 0,
      si08: 0,
      si09: 0,
      si10: 0,
      si11: 0,
      si12: 0,
      si13: 0,
      si14: 0,
      si15: 0,
      riskfourthother: [],
      riskseventhother:[],
      riskeightother: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    // this.hospitalname = this.userdetails.branch.hospital_name;
    // this.officername = this.userdetails.user.name;
    // this.designation = this.userdetails.user.role;
    // this.reportingdate = moment().format("DD-MM-YYYY");
    this.Id = urlParams.get("id");
    this.GetList();
    this.getSIS();

    $(document).ready(function () {
      $(".data-table").DataTable({
        searching: false,
        bLengthChange: false,
      });

      $(".multiselect").select2({
        placeholder: "None",
      });

      $(".select-others")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".selected-box")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".selected-box").hide();
              }
            });
        })
        .change();

      $(".selfharm-other").click(function () {
        if ($(this).is(":checked")) {
          $(".selfharm-other-div").show(300);
        } else {
          $(".selfharm-other-div").hide(200);
        }
      });

      $(".overdose-poisoning").click(function () {
        if ($(this).is(":checked")) {
          $(".overdose-poisoning-div").show(300);
        } else {
          $(".overdose-poisoning-div").hide(200);
        }
      });

      $(".specify-other").click(function () {
        if ($(this).is(":checked")) {
          $(".specify-other-div").show(300);
        } else {
          $(".specify-other-div").hide(200);
        }
      });

      $(".intent-other").click(function () {
        if ($(this).is(":checked")) {
          $(".intent-other-div").show(300);
        } else {
          $(".intent-other-div").hide(200);
        }
      });

      $(".intent").click(function () {
        $(".intent-div").css(
          "display",
          $(this).val() === "intent-yes" ? "block" : "none"
        );
      });

      $(".referral-contact-point")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".contact-point-div")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".contact-point-div").hide();
              }
            });
        })
        .change();

      $(".mode-of-arrival")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".mode-of-arrival-div")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".mode-of-arrival-div").hide();
              }
            });
        })
        .change();

      $(".PSY-other").click(function () {
        if ($(this).is(":checked")) {
          $(".PSY-other-div").show(300);
        } else {
          $(".PSY-other-div").hide(200);
        }
      });

      $(".pafca-yes").click(function () {
        $(".pafca-other-div").fadeIn(300);
      });
      $(".pafca-no").click(function () {
        $(".pafca-other-div").fadeOut(300);
      });

      $(".aborted-yes").click(function () {
        $(".aborted-div").fadeIn(300);
      });
      $(".aborted-no").click(function () {
        $(".aborted-div").fadeOut(300);
      });

      $(".nexttab").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#protective"]').tab("show");
      });


      $(".nex-1").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#selfharm"]').tab("show");
      });

      $(".pre-1").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#risk-factors"]').tab("show");
      });


      $(".nex-2").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#suicide"]').tab("show");
      });

      $(".pre-2").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#protective"]').tab("show");
      });


      $(".nex-3").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#hospital-management"]').tab("show");
      });

      $(".pre-3").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#selfharm"]').tab("show");
      });


      $(".nex-4").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#data-producer"]').tab("show");
      });

      $(".pre-4").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#suicide"]').tab("show");
      });


      $(".pre-5").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#hospital-management"]').tab("show");
      });
    });
  },
  methods: {
    OnpatientIntent(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
    },
    async getSIS(){
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "/patient/answered-si",
          {
            sharp_register_id: this.Id,
          },
          { headers }
        );

        if(response.data.code == 200){
          if(response.data.attemptlist.length > 0){
            this.si01 = response.data.attemptlist[0].answer_id;
            this.si09 = response.data.attemptlist[1].answer_id;
            this.si02 = response.data.attemptlist[2].answer_id;
            this.si10 = response.data.attemptlist[3].answer_id;
            this.si03 = response.data.attemptlist[4].answer_id;
            this.si11 = response.data.attemptlist[5].answer_id;
            this.si04 = response.data.attemptlist[6].answer_id;
            this.si12 = response.data.attemptlist[7].answer_id;
            this.si05 = response.data.attemptlist[8].answer_id;
            this.si13 = response.data.attemptlist[9].answer_id;
            this.si06 = response.data.attemptlist[10].answer_id;
            this.si14 = response.data.attemptlist[11].answer_id;
            this.si07 = response.data.attemptlist[12].answer_id;
            this.si15 = response.data.attemptlist[13].answer_id;
            this.si08 = response.data.attemptlist[14].answer_id;
          }
        }

      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response7 = await this.$axios.get("diagnosis/getIcd10codeList", {
        headers,
      });
      if (response7.data.code == 200 || response7.data.code == "200") {
        this.diagonisislist = response7.data.list;
        this.diagonisislist_external = response7.data.list_external;
      } else {
        this.diagonisislist = [];
        this.diagonisislist_external = [];
      }
      const response8 = await this.$axios.get(
        "general-setting/list?section=" + "type-of-substance",
        { headers }
      );
      if (response8.data.code == 200 || response8.data.code == "200") {
        this.typesofsubstance = response8.data.list;
      } else {
        this.typesofsubstance = [];
      }
      console.log("typesofsubstance", this.typesofsubstance);
      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "stressful-life-events",
        { headers }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.stresslist = response9.data.list;
      } else {
        this.stresslist = [];
      }
      console.log("stresslist", this.stresslist);
      const response10 = await this.$axios.get(
        "general-setting/list?section=" + "overdose-poisoning",
        { headers }
      );
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.overdoselist = response10.data.list;
      } else {
        this.overdoselist = [];
      }
      const response = await this.$axios.get(
        "general-setting/list?section=" + "referral-or-contact-point",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.referallist = response.data.list;
      } else {
        this.referallist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "mode-of-arrival",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.modelist = response2.data.list;
      } else {
        this.modelist = [];
      }
      this.userdetails = JSON.parse(localStorage.getItem("userdetails"));

      const response3 = await this.$axios.get("staff-management/getPsychiatrist/" + this.userdetails.branch.branch_id,{
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.psychiatrist = response3.data.list;
      } else {
        this.psychiatrist = [];
      }
      const response4 = await this.$axios.get("external-cause-injury/list", {
        headers,
      });
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.injurylist = response4.data.list;
      } else {
        this.injurylist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "place-of-occurrence",
        { headers }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.placelist = response5.data.list;
      } else {
        this.placelist = [];
      }
      const response6 = await this.$axios.post(
        "patient-online-self-test/list-type",
        { Type: "Suicidal Scale" },
        { headers }
      );

      if (response6.data.code == 200 || response6.data.code == "200") {
        this.list = response6.data.list;
      } else {
        this.list = [];
      }

      const response11 = await this.$axios.get("hospital/list", {
        headers,
      });
      if (response11.data.code == 200 || response11.data.code == "200") {
        this.hospitallist = response11.data.list;
      } else {
        this.hospitallist = [];
      }
      this.getdetails();
    },
    async getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/sharp-mgmt/get-record",
        {
          shharp_id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {

        this.riskfactorlist = response.data.result.risk;

        this.protectivefactorlist = response.data.result.protective;
        this.riskfactorlist.forEach((element) => {

          if (element.questionId == 1) {

            this.first = element.answer;
          }
          if (element.questionId == 2) {
            this.second = element.answer;
          }
          if (element.questionId == 3) {
            this.third = element.answer;
          }
          if (element.questionId == 4) {
            this.fourth = element.answer;
          }
          if (element.questionId == 5) {
            this.fifth = element.answer;
          }
          if (element.questionId == 6) {
            this.sixth = element.answer;
          }
          if (element.questionId == 7) {
            this.seventh = element.answer;
          }
          if (element.questionId == 8) {
            this.eight = element.answer;
          }
          if (element.questionId == 9) {
            this.nine = element.answer;
          }
          if (element.questionId == 10) {
            this.tenth = element.answer;
          }
          if (element.questionId == 11) {
            this.eleven = element.answer;
          }
          if (element.questionId == 12) {
            this.twelth = element.answer;
          }
        });

        var dropdownvalue = this.riskfactorlist[0].risk_factor_yes_value;
        dropdownvalue = JSON.parse(dropdownvalue);
        dropdownvalue.forEach((element) => {
          console.log("my event", element);
          if (element.Index == 1) {
            const arr = element.Val.split(',');
            $("#firstbox").val(arr).trigger("change");
          }
          if (element.Index == 3) {
            this.thirdbox = element.Val;
          }
          if (element.Index == 4) {
            var j = 0;
            var ints = /^[0-9]*$/;
            const arr = element.Val.split(',');
            $("#fourthbox").val(arr).trigger("change");
                for(let i = 0; i < arr.length; i++)
                {
                if(!(arr[i].match(ints) != null)){
                  this.riskfourthother[j] = arr[i];
                  j = j + 1;
                }
                }
          }
          if (element.Index == 6) {
            const arr = element.Val.split(',');
            $("#sixthbox").val(arr).trigger("change");
          }
          if (element.Index == 7) {
            var j = 0;
            var ints = /^[0-9]*$/;
            const arr = element.Val.split(',');
            $("#seventhbox").val(arr).trigger("change");
            for(let i = 0; i < arr.length; i++)
              {
                if(!(arr[i].match(ints) != null)){
                  this.riskseventhother[j] = arr[i];
                  j = j + 1;
                }
              }
          }
          if (element.Index == 8) {
            var j = 0;
            var ints = /^[0-9]*$/;
            const arr = element.Val.split(',');
            $("#eightbox").val(arr).trigger("change");
            for(let i = 0; i < arr.length; i++)
              {
                if(!(arr[i].match(ints) != null)){
                  this.riskeightother[j] = arr[i];
                  j = j + 1;
                }
              }
          }
          if (element.Index == 10) {
            this.tenthbox = element.Val;
          }
        });

        this.Sdate = response.data.result.selfharm[0].section_value.Date;
        this.Stime = response.data.result.selfharm[0].section_value.Time;
        this.place_id =
          response.data.result.selfharm[0].section_value.Place_of_Occurance;
        this.place_other = response.data.result.selfharm[0].section_value.place_other;
        this.testresult = response.data.result.selfharm[4];

        if(response.data.result.selfharm.length > 0){
            if(this.testresult.section_value == "21+"){
              this.testresultlevel = "High Intent"
            };
            if(this.testresult.section_value == "11-20"){
              this.testresultlevel = "Medium Intent"
            };
            if(this.testresult.section_value == "0-10"){
              this.testresultlevel = "Low Intent"
            };
          }

        this.overdose =
          response.data.result.selfharm[1].section_value.Overdose_Poisoning;
        this.Overdosespecify =
          response.data.result.selfharm[1].section_value.Overdosespecify;
          this.overdosevalue =
            response.data.result.selfharm[1].section_value.Overdose_Poisoning;
        this.hanging =
          response.data.result.selfharm[1].section_value.Hanging_Suffocation;
        this.drowning = response.data.result.selfharm[1].section_value.Drowning;
        this.firearmsorexplosives =
          response.data.result.selfharm[1].section_value.Firearms_or_explosives;
        this.fire_flames =
          response.data.result.selfharm[1].section_value.Fire_flames;
        this.cuttingorpiercing =
          response.data.result.selfharm[1].section_value.Cutting_or_Piercing;
        this.jumpingfromheight =
          response.data.result.selfharm[1].section_value.Jumping_from_height;
          // if(response.data.result.selfharm[1].section_value.Other_!=null) {
          //     this.other_sh = true;
          //   }
          this.other_sh = response.data.result.selfharm[1].section_value.Other;
            this.selfharm_other =
            response.data.result.selfharm[1].section_value.selfharm_other;

          if(response.data.result.selfharm[3].section_value.intent=="no"||response.data.result.selfharm[3].section_value.intent=="Undetermined"){
            this.patient_intent =
            response.data.result.selfharm[3].section_value.intent;
            }else{
              var intent=response.data.result.selfharm[3].section_value.intent.split(",");
              this.patient_intent =intent[0];
               $(".intent-div").css(
          "display",
          intent[0] === "intent-yes" ? "block" : "none"
        );
              intent.forEach(element => {
                if(element=="verbal"){
                this.verbal=element;
                }
                else if(element=="Messaging"){
                this.Messaging=element;
                }
                else if(element=="Rehearsing"){
                this.Rehearsing=element;
                }
                else if(element=="Not Expressed"){
                this.Expressed=element;
                }
                else if(element=="Handwritten"){
                this.Handwritten=element;
                }
                else if(element=="Social Media"){
                this.SocialMedia=element;
                }
                else if(element=="Learn more"){
                this.Learnmore=element;
                }
                else if(element=="Other"){
                this.Other=element;
                }
                else if(element=="Other"){
                this.Other=element;
                }else if(element!="intent-yes"){
                  this.intent_other=element;
                }
              });

            }
                this.family=response.data.result.selfharm[2].section_value.Family_friends_peer_group;
            this.internet=response.data.result.selfharm[2].section_value.Internet_website_social_media_platform_app_blogs_forum_video_photosharing;
            this.printed=response.data.result.selfharm[2].section_value.Printed_media_newspaper_books_magazine_etc;
            this.broadcast=response.data.result.selfharm[2].section_value.Broadcast_media_television_radio;
            this.ideas=response.data.result.selfharm[2].section_value.Own_ideas;
            if(response.data.result.selfharm[2].section_value.Specify_patient_actual_words!=null) {
              this.patientactualword = true;
            }
            this.patientactualword_other=response.data.result.selfharm[2].section_value.patientactualword_other;
        this.result = response.data.result.suicideRisk[0].result;
        this.referral_or_contact =
          response.data.result.hospital[0].referral_or_contact;
        this.referral_or_contact_other =
          response.data.result.hospital[0].referral_or_contact_other;
        this.arrival_mode = response.data.result.hospital[0].arrival_mode;
        this.arrival_mode_other =
          response.data.result.hospital[0].arrival_mode_other;
        this.date = response.data.result.hospital[0].date;
        this.time = response.data.result.hospital[0].time;
        this.physical_consequences =
          response.data.result.hospital[0].physical_consequences;
        this.physical_consequences_des =
          response.data.result.hospital[0].physical_consequences_des;
        this.patient_admitted =
          response.data.result.hospital[0].patient_admitted;
        this.patient_admitted_des =
          response.data.result.hospital[0].patient_admitted_des;
        this.discharge_status =
          response.data.result.hospital[0].discharge_status;
        this.discharge_date = response.data.result.hospital[0].discharge_date;
        this.discharge_number_days_in_ward =
          response.data.result.hospital[0].discharge_number_days_in_ward;
        this.main_psychiatric_diagnosis =
          response.data.result.hospital[0].main_psychiatric_diagnosis;
        this.external_cause_inquiry =
          response.data.result.hospital[0].external_cause_inquiry;
        this.psychiatristId =
          response.data.result.dataSource[0].psychiatrist_name;
        this.officername =
          response.data.result.dataSource[0].name_registering_officer;
        this.designation =
          response.data.result.dataSource[0].designation;
        this.hospitalname =
          response.data.result.dataSource[0].hospital_name;
        this.reportingdate =
          moment(response.data.result.dataSource[0].reporting_date, "YYYY-MM-DD").format("DD-MM-YYYY");
          this.additional_diagnosis = response.data.result.hospital[0].additional_diagnosis.split(",");
            $("#additionalbox")
            .val(this.additional_diagnosis)
            .trigger("change");

            this.additional_external_cause_injury = response.data.result.hospital[0].additional_external_cause_injury.split(",");
            $("#externalbox")
            .val(this.additional_external_cause_injury)
            .trigger("change");
        this.list1 =
          response.data.result.hospital[0].discharge_psy_mx;
          if(this.list1){
            if(this.list1.search("ward") > 0){
              this.psyd1 = "Transferred to Psychiatry ward";
            }
            if(this.list1.search("clinic")> 0){
              this.psyd2 = "Given appt to Psychiatry clinic";
            }
            if(this.list1.search("counsellor")> 0){
              this.psyd3 = "Referred to counsellor";
            }
            if(this.list1.search("follow-up") > 0){
              this.psyd4 = "Discharge without any Psychiatry follow-up";
            }
            if(this.list1.search("Community") > 0){
              this.psyd5 = "Refer Community Psychiatry Services";
            }
            if(this.list1.search("ers") > 0){
              this.psyd6 = "Others";
            }
          }
        this.discharge_psy_mx_des = response.data.result.hospital[0].discharge_psy_mx_des;
      }
    },
    OnMxdischarge(val) {
      if (this.discharge_psy_mx) {
        this.discharge_psy_mx = this.discharge_psy_mx + "," + val;
      } else {
        this.discharge_psy_mx = val;
      }
    },
  },
};
</script>

</script>
<style scoped>
.hide {
  display: none;
}
.step-form-box {
  display: block !important;
}
.radio[disabled] {
  opacity: 1;
}

.label{
  opacity: 1;
}
</style>
