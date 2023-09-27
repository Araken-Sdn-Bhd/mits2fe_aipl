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
                  <!-- <form class="step-form" method="post" @submit.prevent="Onriskfactor"> -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>1</span>Presence of psychiatric disorder</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no" value="No"
                            name="Presence of psychiatric disorder" @click="onchange(1,0)"  v-model="first"
                          />
                          <label class="form-check-label" for="no">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes"
                            name="Presence of psychiatric disorder"
                            value="Yes" v-model="first" @click="onchange(1,1)"
                          />
                          <label class="form-check-label" for="yes">YES</label>
                        </div>
                         <div class="step-form-box1 box-01" v-show="first=='Yes'">
                          <select id="firstbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" style="width:100%">
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
                        ><span>2</span>Hopelessness or despair</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no1" @click="onchange(2,0)"
                            name="Hopelessness or Despair" value="No" v-model="second"
                          />
                          <label class="form-check-label" for="no1">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes1" @click="onchange(2,1)"
                            name="Hopelessness or Despair" value="Yes" v-model="second"
                          />
                          <label class="form-check-label" for="yes1">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>3</span>Previous suicide attempt</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box1">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no2" @click="onchange(3,0)"
                            name="Previous suicide attempts"  value="No" v-model="third"
                          />
                          <label class="form-check-label" for="no2">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box1">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes2" @click="onchange(3,1)"
                            name="Previous suicide attempts"   value="Yes" v-model="third"
                          />
                          <label class="form-check-label" for="yes2">YES</label>
                        </div>
                        <div class="step-form-box2 box-02" v-show="third=='Yes'">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Please Specify (times)" v-model="thirdbox"
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
                            class="form-check-input"
                            type="radio"
                            id="no3" @click="onchange(4,0)"
                            name="Prresence os substance use/abuse" value="No" v-model="fourth"
                          />
                          <label class="form-check-label" for="no3">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box2">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes3" @click="onchange(4,1)"
                            name="Prresence os substance use/abuse" value="Yes" v-model="fourth"
                          />
                          <label class="form-check-label" for="yes3">YES</label>
                        </div>
                        <div class="step-form-box4 box-4" v-show="fourth=='Yes'">
                          <select id="fourthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" style="width:100%"
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
                            class="form-check-input"
                            type="radio"
                            id="no4" @click="onchange(5,0)"
                            name="family history of suicidal behavior" value="No" v-model="fifth"
                          />
                          <label class="form-check-label" for="no4">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes4" @click="onchange(5,1)"
                            name="family history of suicidal behavior" value="Yes" v-model="fifth"
                          />
                          <label class="form-check-label" for="yes4">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>6</span>Family history of psychiatric
                        disorder</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box3">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no5" @click="onchange(6,0)"
                            name="family history of psychiatric disorders"  value="No" v-model="sixth"
                          />
                          <label class="form-check-label" for="no5">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box3">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes5" @click="onchange(6,1)"
                            name="family history of psychiatric disorders" value="Yes" v-model="sixth"
                          />
                          <label class="form-check-label" for="yes5">YES</label>
                        </div>
                        <div class="step-form-box6 box-6" v-show="sixth=='Yes'">
                          <select id="sixthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" style="width:100%">
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
                            class="form-check-input"
                            type="radio"
                            id="no6" @click="onchange(7,0)"
                            name="family history of substance abuse" value="No" v-model="seventh"
                          />
                          <label class="form-check-label" for="no6">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box4">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes6" @click="onchange(7,1)"
                            name="family history of substance abuse" value="Yes" v-model="seventh"
                          />
                          <label class="form-check-label" for="yes6">YES</label>
                        </div>
                        <div class="step-form-box7 box-7" v-show="seventh=='Yes'">
                          <select id="seventhbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" style="width:100%"
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
                        ><span>8</span>Stressful life events</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box5">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no7" @click="onchange(8,0)"
                            name="stressful life events or loss" value="No" v-model="eight"
                          />
                          <label class="form-check-label" for="no7">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box5">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes7" @click="onchange(8,1)"
                            name="stressful life events or loss"  value="Yes" v-model="eight"
                          />
                          <label class="form-check-label" for="yes7">YES</label>
                        </div>
                        <div class="step-form-box8 box-8" v-show="eight=='Yes'">
                          <select id="eightbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple" style="width:100%"
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
                            class="form-check-input"
                            type="radio" @click="onchange(9,0)"
                            id="no8" value="No" v-model="nine"
                            name="Isolation, rejection or feelings of shame"
                          />
                          <label class="form-check-label" for="no8">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio" @click="onchange(9,1)"
                            id="yes8" value="Yes" v-model="nine"
                            name="Isolation, rejection or feelings of shame"
                          />
                          <label class="form-check-label" for="yes8">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>10</span>Chronic physical illness or
                        condition</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box6">
                          <input
                            class="form-check-input"
                            type="radio" @click="onchange(10,0)"
                            id="no9" value="No" v-model="tenth"
                            name="chronic physical illness or condition"
                          />
                          <label class="form-check-label" for="no9">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box6">
                          <input
                            class="form-check-input"
                            type="radio" @click="onchange(10,1)"
                            id="yes9" value="Yes" v-model="tenth"
                            name="chronic physical illness or condition"
                          />
                          <label class="form-check-label" for="yes9">YES</label>
                        </div>
                        <div class="step-form-box10 box10" v-if="tenth=='Yes'">
                          <input
                            type="text"
                            class="form-control" v-model="tenthbox"
                            placeholder="Please Specify"
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
                            class="form-check-input"
                            type="radio" @click="onchange(11,0)"
                            id="no10" value="No" v-model="eleven"
                            name="History of physical , sexual or emotional abuse"
                          />
                          <label class="form-check-label" for="no10">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio" @click="onchange(11,1)"
                            id="yes10" value="Yes" v-model="eleven"
                            name="History of physical , sexual or emotional abuse"
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
                            class="form-check-input"
                            type="radio" @click="onchange(12,0)"
                            id="no11" value="No" v-model="twelth"
                            name="access to lethal methods/weapons"
                          />
                          <label class="form-check-label" for="no11">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio" @click="onchange(12,1)"
                            id="yes11" value="Yes" v-model="twelth"
                            name="access to lethal methods/weapons"
                          />
                          <label class="form-check-label" for="yes11"
                            >YES</label
                          >
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
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
                      <div class=" mr-auto">
                        <button class="nexttab btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                      <div class="ml-auto">
                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftriskfactor"><i class="fad fa-save"></i> Save as Draft</button>
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
                            class="form-check-input"
                            type="radio"
                            id="No" value="No" @click="onchangeprotect(pro.questionId,0)"
                             v-bind:name="'pro' + index" v-model="pro.answer"

                          />
                          <label class="form-check-label" for="no">{{
                            pro.Question_detail[0].Options1
                          }}</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes" value="Yes" @click="onchangeprotect(pro.questionId,1)"
                            v-bind:name="'pro' + index"
                              v-model="pro.answer"
                          />
                          <label class="form-check-label" for="yes">{{
                            pro.Question_detail[0].Options2
                          }}</label>
                        </div>
                      </div>
                    </div>
                    <p v-if="errors.length">
                      <ul>
                        <li style="color:red"  v-for='err in errors' :key='err' >
                          {{ err }}
                        </li>
                      </ul>
                    </p>
                    <br><br>
                    <div class="d-flex">
                                            <button class="pre-1 btn btn-success mr-auto"><i class="fad fa-arrow-to-left"></i> Back</button>
                                            <div class="ml-auto">
                                                <button class="nex-1 btn btn-success next-btn">Next <i class="fad fa-arrow-alt-to-right"></i></button>
                                                <button type="submit" class="btn btn-text btn-warning" title="Draft" @click="Onprotectivefactordraft"><i class="fad fa-save" ></i> Save as Draft</button>
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
                              Section A: Current <span class="text-lowercase">Self-Harm Act</span>
                              <small class="text-lowercase"
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
                                <input type="date" :max="this.reportingdate" class="form-control" v-model="Sdate" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label">Time</label>
                                <input type="time" class="form-control" v-model="Stime" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label"
                                  >Place of occurrence</label
                                >
                                <select class="form-select" @change="OnchangePlace($event)" v-model="place_id">
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
                                      <input
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
                          <div class="text-capitalize">Section B: Method <span class="text-lowercase">of Self-Harm</span></div>
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
                                    class="form-check-input overdose-poisoning"
                                    type="checkbox"
                                    value="Overdose/Poisoning"
                                    id="1" v-model="overdose"
                                  />
                                  <label class="form-check-label" for="1">
                                    Overdose/poisoning
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
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Hanging/Suffocation"
                                    id="2" v-model="hanging"
                                  />
                                  <label class="form-check-label" for="2">
                                    Hanging/suffocation/strangulation
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Drowning"
                                    id="3" v-model="drowning"
                                  />
                                  <label class="form-check-label" for="3">
                                    Drowning/submersion
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Firearms or explosives"
                                    id="4" v-model="firearmsorexplosives"
                                  />
                                  <label class="form-check-label" for="4">
                                    Firearms/explosives
                                  </label>
                                </div>
                                <!-- checkbox -->
                              </div>
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Fire/flames"
                                    id="5"   v-model="fire_flames"
                                  />
                                  <label class="form-check-label" for="5">
                                    Smoke/fire/flames
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Cutting or Piercing"
                                    id="6"  v-model="cuttingorpiercing"

                                  />
                                  <label class="form-check-label" for="6">
                                    Cutting/piercing
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Jumping from height"
                                    id="7"  v-model="jumpingfromheight"
                                  />
                                  <label class="form-check-label" for="7">
                                    Jumping from height
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input selfharm-other"
                                    type="checkbox"
                                    value="Other" v-model="other_sh"
                                    id="8"
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
                          <div class="text-capitalize">Section C: How <span class="text-lowercase">did patient get idea(s) about the method of self-harm?</span></div>
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
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Family, friends, peer group"
                                    id="1.1" v-model="family"
                                  />
                                  <label class="form-check-label" for="1.1">
                                    Family, friends, peer group
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Internet (website, social media platform,app, blogs, forum, video/photosharing)"
                                    id="2.2" v-model="internet"
                                  />
                                  <label class="form-check-label" for="2.2">
                                    Internet (website, social media platform,
                                    app, blogs, forum, video/photosharing, etc.)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Printed media (newspaper, books, magazine, etc)"
                                    id="3.3" v-model="printed"
                                  />
                                  <label class="form-check-label" for="3.3">
                                    Printed media (newspaper, books, magazine,
                                    etc.)
                                  </label>
                                </div>
                                <!-- checkbox -->
                              </div>
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Broadcast media (television, radio)"
                                    id="5.5" v-model="broadcast"
                                  />
                                  <label class="form-check-label" for="5.5">
                                    Broadcast media (television, radio, etc.)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Own ideas"
                                    id="4.4" v-model="ideas"
                                  />
                                  <label class="form-check-label" for="4.4">
                                    Own ideas
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input specify-other"
                                    type="checkbox"
                                    value="Specify patient actual words"
                                    id="6.6" v-model="patientactualword"
                                  />
                                  <label class="form-check-label" for="6.6">
                                    Others, specify patient's actual words
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div v-if="patientactualword==true"
                                  class="col-sm-12 specify-other-div mt-3"
                                >
                                  <div class="mb-3" >
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="patientactualword_other"
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
                          <div class="text-capitalize">Section D: Suicidal <span class="text-lowercase">intent</span></div>
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
                                >Was there an intent?<small style="color:red">*</small></label
                              >
                              <div class="mt-2">
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="no" v-model="patient_intent"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio1"
                                    >No</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="intent-yes" v-model="patient_intent" 
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio2"
                                    >Yes</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio3"
                                    value="Undetermined" v-model="patient_intent"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio3"
                                    >Undetermined</label
                                  >
                                </div>
                              </div>
                              <!-- SHOW_DIV -->
                              <div class="row mt-3">
                              <div class="col-sm-12 intent-div mt-4 hide">
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
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
                                    class="form-check-input"
                                    type="checkbox"
                                    id="messaging"
                                    value="Messaging" @change="OnpatientIntent('Messaging',$event)"
                                    v-model="Messaging"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="messaging"
                                    >Messaging
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="rehearsing"
                                    value="Rehearsing" @change="OnpatientIntent('Rehearsing',$event)"
                                    v-model="Rehearsing"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="rehearsing"
                                    >Rehearsing</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="not-Expressed"
                                    value="Not Expressed" @change="OnpatientIntent('Not Expressed',$event)"
                                    v-model="Expressed"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="not-Expressed"
                                    >Not Expressed
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="handwritten"
                                    value="Handwritten" @change="OnpatientIntent('Handwritten',$event)"
                                    v-model="Handwritten"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="handwritten"
                                    >Handwritten</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="social-media"
                                    value="Social Media" @change="OnpatientIntent('Social Media',$event)"
                                    v-model="SocialMedia"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="social-media"
                                    >Social Media</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="learn-more"
                                    value="Learn more" @change="OnpatientIntent('Learn more',$event)"
                                    v-model="Learnmore"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="learn-more"
                                    >Efforts to learn more</label
                                  >
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent-other"
                                    type="checkbox"
                                    id="Other"
                                    value="Other" @change="OnpatientIntent('Other',$event)"
                                    v-model="Other"
                                  />
                                  <label class="form-check-label" for="Other"
                                    >Others</label
                                  >
                                  <!-- SHOW_DIV -->
                                <div
                                  class="col-sm-10 intent-other-div mt-4" style="margin-left: 20px;"  v-if="Other"
                                >
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="intent_other"
                                    />
                                </div>
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
                          <div class="text-capitalize">Section E: Level <span class="text-lowercase">of Suicidal Intent</span></div>
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si01"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Somebody present
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si01"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Somebody nearby, or in visual or vocal contact
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si01"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si09"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 To manipulate environment, get attention, get revenge
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si09"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Components of above and below
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si09"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si02"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Intervention is probable
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si02"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Intervention is not likely
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si02"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si10"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Thought that death was unlikely
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si10"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Thought that death was possible but not probable
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si10"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si03"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 No precautions
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si03"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Passive precautions (e.g.; alone in room with unlocked door)
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si03"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si11"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did less to self that s/he thought would be lethal
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si11"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Wasn't sure if what s/he did would be lethal
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si11"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si04"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Notified potential helper regarding attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si04"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Contacted but did not specifically notify regarding attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si04"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si12"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did not seriously attempt to end life
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si12"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Uncertain about seriousness to end life
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si12"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si05"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si05"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Thought about or made some arrangements
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si05"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si13"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Did not want to die
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si13"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Components of above and below
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si13"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si06"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si06"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Minimal to moderate
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si06"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si14"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Thought death would be unlikely if received medical attention
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si14"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Was uncertain if death could be averted by medical attention
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si14"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si07"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 Absence of note
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si07"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Note written, but torn up; note thought about
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si07"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si15"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None; impulsive
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si15"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Suicide contemplated for 3 hours or less prior to attempt
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si15"
                                      value="2"
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
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si08"
                                      value="0"
                                    />
                                    <label class="form-check-label" for="level1">
                                      0 None
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si08"
                                      value="1"
                                    />
                                    <label class="form-check-label" for="level2">
                                      1 Equivocal communication (ambiguous)
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      v-model="si08"
                                      value="2"
                                    />
                                    <label class="form-check-label" for="level3">
                                      2 Unequivocal communication (unambiguous)
                                    </label>
                                  </div>
                                </div>
                              </div>
                <div class="col-sm-4">
                  <Error :message="error" v-if="error" />
                   <button
                  type="button"
                  class="btn btn-success btn-text"
                  id="calculate" @click="OnsubmitTest('update')" v-if="this.update == true"
                  >
                  <i class="fad fa-calculator"></i> Recalculate
                </button>
                <button
                  type="button"
                  class="btn btn-success btn-text"
                  id="calculate" @click="OnsubmitTest('add')" v-if="this.update == false"
                  >
                  <i class="fad fa-calculator"></i> Calculate
                </button>
                      <br><br>
                <table class="self-harm" v-if="this.testresult">
                  <tbody>
                    <tr>
                      <th>Score:</th>
                      <td v-if="testresult.section_value">{{testresult.section_value}}</td>
                      <td>{{testresult.siScore}}</td>
                    </tr>
                    <tr>
                      <th>Level of Suicidal Intent:</th>
                      <td>{{this.levelintent}}</td>
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
                      <div class=" mr-auto">
                      <button class="pre-2 btn btn-success" title="Back">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <button class="nex-2 btn btn-success next-btn" title="Next Page">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                      <div class="ml-auto">
                        <button class="btn btn-text btn-warning" title="Draft" @click="DraftSelfHarm"><i class="fad fa-save"></i> Save as Draft</button>
                      </div>
                    </div>
                  <!-- </form> -->
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
                    <p>Instruction : Please Tick (/) In The Box Provided</p>
                  </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Level of suicide risk for current attempt</label
                      >
                      <table class="table">
                        <thead>
                          <tr>
                            <th width="20%" class="text-capitalize"><b>Risk <span class="text-lowercase">level</span></b></th>
                            <th scope="col" class="text-capitalize">
                              <b>Based <span class="text-lowercase">on Risk Factors/Protective Factors/Suicidal Intent</span></b>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="risk-level"
                                  id="High"
                                  value="High"
                                  v-model="result"
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
                                  class="form-check-input"
                                  type="radio"
                                  name="risk-level"
                                  id="moderate"
                                     value="Moderate"
                                  v-model="result"
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
                                  class="form-check-input"
                                  type="radio"
                                  name="risk-level"
                                  id="low"
                                  value="Low"
                                  v-model="result"
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
                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftsuciderisk"><i class="fad fa-save"></i> Save as Draft</button>
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
                        >Referral or contact point<small style="color:red">*</small></label
                      >
                      <div class="col-sm-3">
                        <select
                          v-model="referral_or_contact"
                          class="form-select referral-contact-point"
                          aria-label="Default select example"
                          @change="OnchangeContact($event)"
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
                      <div class="col-sm-4" v-if="referral_or_contact=='Others' || referral_or_contact==194">
                          <input
                            type="text"
                            class="form-control"
                            v-model="referral_or_contact_other"
                            placeholder="Please Specify"
                          />
                        </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Mode of arrival</label
                      >
                      <div class="col-sm-3">
                        <select
                          v-model="arrival_mode"
                          class="form-select"
                          aria-label="Default select example"
                          @change="OnchangeArrival($event)"
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
                          col-sm-4" v-if="arrival_mode=='Others' || arrival_mode==201">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Specify" v-model="arrival_mode_other"
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
                          type="date" :max="this.reportingdate"
                          class="form-control"
                          placeholder="Please Specfy" v-model="date"
                        />
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Time</label>
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Please Specfy" v-model="time"
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
                            class="form-check-input aborted-no"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca1" value=" No significant physical harm, No medical treatment required"
                             v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca1">
                            No significant physical harm, no medical treatment
                            required
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca2" value="Medical attention/Surgery required, but no danger to
                            life" v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca2">
                            Medical attention/surgery required, but no danger to
                            life
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca3" value="Medical attention/Surgery required, had/has danger
                            to life" v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca3">
                            Medical attention/surgery required, had/has danger
                            to life
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input aborted-no"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca4" value="Lethal" v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca4">
                            Lethal
                          </label>
                        </div>
                        <div class="form-check other-show-div">
                          <input
                            class="form-check-input aborted-yes"
                            type="radio"
                            name="physical consequence of current attempt"
                            id="pcoca5" value="Aborted" v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca5">
                            Aborted
                          </label>
                          <!-- SHOW_input -->
                          <input v-show="physical_consequences_des"
                            style="margin-left: 80px;"
                            type="text"
                            class="form-control aborted-div"
                            id="aborted"
                            placeholder="Specify reason"
                           v-model="physical_consequences_des"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Is patient admitted for current attempt?<small style="color:red">*</small></label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input pafca-no"
                            type="radio"
                            name="If patient admitted for current attempt"
                            id="pafca1" value="No" v-model="patient_admitted"
                          />
                          <label class="form-check-label" for="pafca1">
                            No
                          </label>
                        </div>
                        <div class="form-check other-show-div">
                          <input
                            class="form-check-input pafca-yes"
                            type="radio"
                            name="If patient admitted for current attempt"
                            id="pafca2"  value="Yes" v-model="patient_admitted"
                          />
                          <label class="form-check-label" for="pafca2">
                            Yes
                          </label>
                          <input v-if="this.patient_admitted == 'Yes'"  style="margin-left: 50px"
                              type="text"
                              class="form-control pafca-other-div"
                              placeholder="If admitted, please specify the initial admitting team" v-model="patient_admitted_des"
                              id="AW"
                            />
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Status on discharge</label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="Status on Discharge"
                            id="sond1" value="Dead" v-model="discharge_status"
                          />
                          <label class="form-check-label" for="sond1">
                            Dead
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="Status on Discharge"
                            id="sond2" value="Alive" v-model="discharge_status"
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
                        >Discharge details</label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date</label>
                        <input type="date" :max="this.reportingdate" class="form-control" v-model="discharge_date"/>
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Number of days of admission (enter 0 if not admitted)</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Please Specify" v-model="discharge_number_days_in_ward"
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-4 align-items-flex-start">
                      <label class="col-sm-3 col-form-label">Discharge diagnoses(ICD-10)</label>
                      <div class="col-sm-4">
                          <label class="form-label"
                          >Main psychiatric diagnoses</label
                          >
                          <select
                          v-model="main_psychiatric_diagnosis"
                          class="form-select"
                          aria-label="Default select example"
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
                    <div class="row mb-4 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"></label>
                      <div class="col-sm-4">
                          <label class="form-label"
                          >Additional psychiatric diagnoses</label
                          >
                          <select
                          id="additionalbox"
                          class="form-select multiselect" multiple="multiple"
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
                          class="form-select multiselect" multiple="multiple"
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
                        >Psychiatric management on discharge</label
                      >
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d1"
                            v-model="psyd1"
                            value="Transferred to Psychiatry ward"

                          />
                          <label class="form-check-label" for="psy-d1">
                            Transferred to another hospital for admission
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d2"
                            v-model="psyd2"
                            value="Given appt to Psychiatry clinic"

                          />
                          <label class="form-check-label" for="psy-d2">
                            Given appointment to Psychiatry clinic
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d3"
                            v-model="psyd3"
                            value="Referred to counsellor"

                          />
                          <label class="form-check-label" for="psy-d3">
                            Referred to counsellor
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d4"
                            v-model="psyd4"
                            value="Discharge without any Psychiatry follow-up"

                          />
                          <label class="form-check-label" for="psy-d4">
                            Discharge without any Psychiatry follow-up
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d5"
                            v-model="psyd5"
                            value="Refer Community Psychiatry Services"

                          />
                          <label class="form-check-label" for="psy-d6">
                            Referred to Community Psychiatry Services
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input PSY-other"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d6"
                            v-model="psyd6"
                            value="Others"

                          />
                          <label class="form-check-label" for="psy-d5">
                            Others
                          </label>
                        </div>
                        <!-- SHOW_DIV -->
                        <input v-if="this.psyd6"
                            style="margin-left: 20px;"
                            type="text"
                            class="form-control PSY-other-div"
                            id="discharge"
                            placeholder="Please Specify"
                            v-model="discharge_psy_mx_des"
                          />
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
                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftSavehospitalmanagement"><i class="fad fa-save"></i> Save as Draft</button>
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
                          >Name of psychiatrist</label
                        >
                        <select
                          v-model="psychiatristId"
                          class="form-select"
                          aria-label="Default select example"
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
                          >Date of reporting</label
                        >
                        <input
                          class="form-control"
                          v-model="reportingdateFE"
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
                      <div class="ml-auto">
                        <button class="btn btn-text btn-warning" title="Draft" @click="Draftadddataproducer"><i class="fad fa-save"></i> Save as Draft</button>
                        <button type="submit" class="btn btn-success" title="Submit" @click="adddataproducer">
                          <i class="fad fa-paper-plane"></i> Submit
                        </button>
                      </div>
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
      Id: 0,
      contactOther: false,
      referral_or_contact: 0,
      referral_or_contact_other: "",
      arrival_mode: 0,
      arrival_mode_other: "",
      arrivalOther: false,
      date: "",
      time: "",
      physical_consequences: "",
      physical_consequences_des: "",
      patient_admitted: "",
      patient_admitted_des: "",
      discharge_status: "",
      discharge_date: "",
      discharge_number_days_in_ward: "",
      main_psychiatric_diagnosis: 0,
      external_cause_inquiry: 0,
      additional_diagnosis: 0,
      additional_external_cause_injury: 0,
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
      testresult: [],
      update: false,
      levelintent: "",
      Sdate: "",
      Stime: "",
      place_id: "",
      place_other: "",
      overdose: "",
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
      ideas: "",
      broadcast: "",
      patientactualword: "",
      patientactualword_other: "",
      patient_intent: "",
      patient_intent_value: "",
      intent_other: "",
      SItestscore: "",
      secB: "",
      secC: "",
      secD: "",
      list1: [],
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
      diagonisislist: [],
      diagonisislist_external:[],
      typesofsubstance: [],
      stresslist: [],
      overdoselist: [],
      hospitallist: [],
      patient_id:0,
      psyd1: "",
      psyd2: "",
      psyd3: "",
      psyd4: "",
      psyd5: "",
      psyd6: "",
      si01: "",
      si02: "",
      si03: "",
      si04: "",
      si05: "",
      si06: "",
      si07: "",
      si08: "",
      si09: "",
      si10: "",
      si11: "",
      si12: "",
      si13: "",
      si14: "",
      si15: "",
      riskfourthother: [],
      riskseventhother:[],
      riskeightother: [],
      seHM: "",
      secDYes: "",
      submitting: true,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.patient_id = urlParams.get("patient_id");
    this.hospitalname = this.userdetails.branch.hospital_name;
    this.officername = this.userdetails.user.name;
    this.designation = this.userdetails.user.role;
    this.reportingdateFE = moment().format("DD-MM-YYYY");
    this.reportingdate = moment().format("YYYY-MM-DD");
    
    this.GetList();
    this.getSIS();
    this.GetUserIpAddress();

    $(document).ready(function () {
      $(".data-table").DataTable({
        searching: false,
        bLengthChange: false,
      });

      $(".multiselect").select2({
        placeholder: "Please Select",
      });

      $("#fourthbox").select2({
        placeholder: "Please Select",
        tags: true
      });

      $("#seventhbox").select2({
        placeholder: "Please Select",
        tags: true
      });

      $("#eightbox").select2({
        placeholder: "Please Select",
        tags: true
      });

      $('.yes-box input[type="radio"]').click(function () {
        $(".box-01").css("display", "inline-block");
      });

      $('.no-box input[type="radio"]').click(function () {
        $(".box-01").hide();
      });

      $('.yes-box1 input[type="radio"]').click(function () {
        $(".box-02").css("display", "inline-block");
      });

      $('.no-box1 input[type="radio"]').click(function () {
        $(".box-02").hide();
      });

      $('.yes-box2 input[type="radio"]').click(function () {
        $(".box-03").css("display", "inline-block");
      });

      $('.no-box2 input[type="radio"]').click(function () {
        $(".box-03").hide();
      });

      $('.yes-box3 input[type="radio"]').click(function () {
        $(".box-04").css("display", "inline-block");
      });

      $('.no-box3 input[type="radio"]').click(function () {
        $(".box-04").hide();
      });

      $('.yes-box4 input[type="radio"]').click(function () {
        $(".box-05").css("display", "inline-block");
      });

      $('.no-box4 input[type="radio"]').click(function () {
        $(".box-05").hide();
      });

      $('.yes-box5 input[type="radio"]').click(function () {
        $(".box-06").css("display", "inline-block");
      });

      $('.no-box5 input[type="radio"]').click(function () {
        $(".box-06").hide();
      });

      $('.yes-box6 input[type="radio"]').click(function () {
        $(".box-07").css("display", "inline-block");
      });

      $('.no-box6 input[type="radio"]').click(function () {
        $(".box-07").hide();
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
    OnchangePlace(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "Other specified areas"){
        this.placeOther = true;
      }else{
        this.placeOther = false;
      }
    },
    OnchangeContact(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "Others"){
        this.contactOther = true;
      }else{
        this.contactOther = false;
      }
    },
    OnchangeArrival(event) {
      if (event.target.options[event.target.options.selectedIndex].text == "Others"){
        this.arrivalOther = true;
      }else{
        this.arrivalOther = false;
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
      this.user_ip_address = ip;
    },
    async OnsubmitTest(status) {
      this.error = null;

      if(this.si01 != "" && this.si09 != "" && this.si02 != "" && this.si10 != "" && this.si03 != "" && this.si011 != "" && this.si04 != ""
      && this.si12 != "" && this.si05 != "" && this.si13 != "" && this.si06 != "" && this.si14 != "" && this.si07 != "" && this.si15 != "" && this.si08 != ""){
        this.testcheckedList = {
            "1":this.si01,
            "2":this.si09,
            "3":this.si02,
            "4":this.si10,
            "5":this.si03,
            "6":this.si11,
            "7":this.si04,
            "8":this.si12,
            "9":this.si05,
            "10":this.si13,
            "11":this.si06,
            "12":this.si14,
            "13":this.si07,
            "14":this.si15,
            "15":this.si08
    };
      };
      try {
        if (this.list.length == Object.values(this.testcheckedList).length) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if(status == "add"){
            const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              test_name: "si",
              test_section_name: "SI",
              result: JSON.stringify([{ SI: this.testcheckedList }]),
              user_ip_address: this.user_ip_address,
              shharp_reg_id : this.Id,
            },
            { headers }
          );
          console.log("my reslut", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.testresult = response.data.result;
            this.SItestscore = response.data.result.siScore;
            if(response.data.result != null){
            if(this.testresult.siScore == "21+"){
              this.levelintent = "High Intent"
            };
            if(this.testresult.siScore == "11-20"){
              this.levelintent = "Medium Intent"
            };
            if(this.testresult.siScore == "0-10"){
              this.levelintent = "Low Intent"
            };
          }

          if(this.levelintent != ""){
              this.update = true;
            }else{
              this.update = false;
            }
            this.$nextTick(() => {
              $("#resultmodal").modal("show");
            });
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
          }else{
            const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              test_name: "si",
              test_section_name: "SI",
              result: JSON.stringify([{ SI: this.testcheckedList }]),
              user_ip_address: this.user_ip_address,
              shharp_reg_id : this.Id,
              status: "update",
            },
            { headers }
          );
          console.log("my reslut", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.testresult = response.data.result;
            this.SItestscore = response.data.result.siScore;
            if(response.data.result != null){
            if(this.testresult.siScore == "21+"){
              this.levelintent = "High Intent"
            };
            if(this.testresult.siScore == "11-20"){
              this.levelintent = "Medium Intent"
            };
            if(this.testresult.siScore == "0-10"){
              this.levelintent = "Low Intent"
            };
          }

          if(this.levelintent != ""){
              this.update = true;
            }else{
              this.update = false;
            }
            this.$nextTick(() => {
              $("#resultmodal").modal("show");
            });
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
          }
        } else {
          this.error = "Please attempt all questions";
        }
      } catch (e) {
        this.loader = false;
        this.errors = e;
      }
    },
    async getdetails() {
      try {
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
          console.log("My details", response.data);
          this.riskfactorlist = response.data.result.risk;
          var checkedlisst = "";
          var arr = {};
          this.riskfactorlist.forEach((element) => {
            var status = "";
            if (element.answer == "Yes") {
              status = 1;
            }else if(element.answer == ""){
              status = 2;
            } else {
              status = 0;
            }
            if (checkedlisst) {
              checkedlisst =
                checkedlisst + "," + element.questionId + ":" + status;
            } else {
              checkedlisst = element.questionId + ":" + status;
            }
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
          checkedlisst.split(",").forEach((e) => {
            let tmp = e.split(":");
            arr[tmp[0]] = tmp[1];
          });
          this.checkedList = arr;
          var dropdownvalue = this.riskfactorlist[0].risk_factor_yes_value;
          dropdownvalue = JSON.parse(dropdownvalue);
          dropdownvalue.forEach((element) => {
            console.log("my event", element);
            if (element.Index == 1) {
              const arr = element.Val.split(',');
              $("#firstbox")
                .val(arr)   //[element.Val.replaceAll('^"|"$', "")]
                .trigger("change");
            }
            if (element.Index == 3) {
              this.thirdbox = element.Val;
            }
            if (element.Index == 4) {
              var j = 0;
              var ints = /^[0-9]*$/;
              const arr = element.Val.split(',');
              $("#fourthbox")
                .val(arr)
                .trigger("change");
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
              $("#sixthbox")
                .val(arr)
                .trigger("change");
            }
            if (element.Index == 7) {
              var j = 0;
              const arr = element.Val.split(',');
              var ints = /^[0-9]*$/;
              $("#seventhbox")
                .val(arr)
                .trigger("change");
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
              $("#eightbox")
                .val(arr)
                .trigger("change");
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

          this.protectivefactorlist = response.data.result.protective;
          var checkedlisst1 = "";
          this.protectivefactorlist.forEach((element) => {
            var status = "";
            if (element.answer == "Yes") {
              status = 1;
            }else if (element.answer == ""){
              status = 2;
            } else {
              status = 0;
            }
            if (checkedlisst1) {
              checkedlisst1 =
                checkedlisst1 + "," + element.questionId + ":" + status;
            } else {
              checkedlisst1 = element.questionId + ":" + status;
            }
          });
          var protext = {};
          checkedlisst1.split(",").forEach((e) => {
            let tmp = e.split(":");
            protext[tmp[0]] = tmp[1];
          });
          this.procheckedList = protext;
          this.Sdate = response.data.result.selfharm[0].section_value.Date;
          this.Stime = response.data.result.selfharm[0].section_value.Time;
          this.place_id =
            response.data.result.selfharm[0].section_value.Place_of_Occurance;
          this.place_other = response.data.result.selfharm[0].section_value.place_other;
          this.testresult = response.data.result.selfharm[4];

          if(response.data.result.selfharm.length > 0){
            if(this.testresult.section_value == "21+"){
              this.levelintent = "High Intent"
            };
            if(this.testresult.section_value == "11-20"){
              this.levelintent = "Medium Intent"
            };
            if(this.testresult.section_value == "0-10"){
              this.levelintent = "Low Intent"
            };
          }

          if(this.levelintent != ""){
              this.update = true;
            }else{
              this.update = false;
            }

            this.overdose =
          response.data.result.selfharm[1].section_value.Overdose_Poisoning;
          // if(response.data.result.selfharm[1].section_value.Overdose_Poisoning!=null) {
          //     this.overdose = true;
          //   }
            this.Overdosespecify = response.data.result.selfharm[1].section_value.Overdosespecify;
          this.hanging =
            response.data.result.selfharm[1].section_value.Hanging_Suffocation;
          this.drowning =
            response.data.result.selfharm[1].section_value.Drowning;
          this.firearmsorexplosives =
            response.data.result.selfharm[1].section_value.Firearms_or_explosives;
          this.fire_flames =
            response.data.result.selfharm[1].section_value.Fire_flames;
          this.cuttingorpiercing =
            response.data.result.selfharm[1].section_value.Cutting_or_Piercing;
          this.jumpingfromheight =
            response.data.result.selfharm[1].section_value.Jumping_from_height;
            // if(response.data.result.selfharm[1].section_value.Other!=null) {
            //   this.other_sh = true;
            // }
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
                if(element=="Messaging"){
                this.Messaging=element;
                }
                 if(element=="Rehearsing"){
                this.Rehearsing=element;
                }
                 if(element=="Not Expressed"){
                this.Expressed=element;
                }
                 if(element=="Handwritten"){
                this.Handwritten=element;
                }
                 if(element=="Social Media"){
                this.SocialMedia=element;
                }
                if(element=="Learn more"){
                this.Learnmore=element;
                }
                if(element=="Other"){
                this.Other=element;
                }
                else if(element!="intent-yes"){
                  this.intent_other=element;
                }
              });
            }

            this.family=response.data.result.selfharm[2].section_value.Family_friends_peer_group;
            this.internet=response.data.result.selfharm[2].section_value.Internet_website_social_media_platform_app_blogs_forum_video_photosharing;
            this.printed=response.data.result.selfharm[2].section_value.Printed_media_newspaper_books_magazine_etc;
            this.broadcast=response.data.result.selfharm[2].section_value.Broadcast_media_television_radio;
            this.ideas=response.data.result.selfharm[2].section_value.Own_ideas;
            this.patientactualword = response.data.result.selfharm[2].section_value.Specify_patient_actual_words;
            this.patientactualword_other=response.data.result.selfharm[2].section_value.patientactualword_other;

          if(response.data.result.suicideRisk != null){
            this.result = response.data.result.suicideRisk[0].result;

          };
          if(response.data.result.hospital != null){
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
            console.log('my live',this.discharge_status);
          this.discharge_date = response.data.result.hospital[0].discharge_date;
          this.discharge_number_days_in_ward =
            response.data.result.hospital[0].discharge_number_days_in_ward;
          this.main_psychiatric_diagnosis =
            response.data.result.hospital[0].main_psychiatric_diagnosis;
          this.external_cause_inquiry =
            response.data.result.hospital[0].external_cause_inquiry;
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
              this.psyd1 = true;
            }
            if(this.list1.search("clinic")> 0){
              this.psyd2 = true;
            }
            if(this.list1.search("counsellor")> 0){
              this.psyd3 = true;
            }
            if(this.list1.search("follow-up") > 0){
              this.psyd4 = true;
            }
            if(this.list1.search("Community") > 0){
              this.psyd5 = true;
            }
            if(this.list1.search("ers") > 0){
              this.psyd6 = true;
            }
          }
          this.discharge_psy_mx_des = response.data.result.hospital[0].discharge_psy_mx_des;
          this.psychiatristId =
            response.data.result.dataSource[0].psychiatrist_name;
          };

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
    OnpatientIntent(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
    },
    onchange(ind, val) {
      this.checkedList[ind] = val;
      console.log("my list", this.checkedList);
    },
    onchangeprotect(ind, val) {
      this.procheckedList[ind] = val;
    },
    OndropdownChange(val, event) {
      delete checkedList.val;
      this.checkedList[val] = event.target.value;
      console.log("my pushed array", this.checkedList);
    },
    async OnDraftriskfactor(dp) {
      var Boxvalue = [];
      var firstbox = "";
      var fourthbox = "";
      var sixthbox = "";
      var seventhbox = "";
      var eightbox = "";
      $("#firstbox :selected").each(function () {
        if (firstbox) {
          firstbox = firstbox + "," + this.value;
        } else {
          firstbox = this.value;
        }
      });
      Boxvalue.push({ Index: 1, Val: firstbox });
      $("#fourthbox :selected").each(function () {
        if (fourthbox) {
          fourthbox = fourthbox + "," + this.value;
        } else {
          fourthbox = this.value;
        }
      });
      Boxvalue.push({ Index: 4, Val: fourthbox });
      $("#sixthbox :selected").each(function () {
        if (sixthbox) {
          sixthbox = sixthbox + "," + this.value;
        } else {
          sixthbox = this.value;
        }
      });
      Boxvalue.push({ Index: 6, Val: sixthbox });
      $("#seventhbox :selected").each(function () {
        if (seventhbox) {
          seventhbox = seventhbox + "," + this.value;
        } else {
          seventhbox = this.value;
        }
      });
      Boxvalue.push({ Index: 7, Val: seventhbox });
      $("#eightbox :selected").each(function () {
        if (eightbox) {
          eightbox = eightbox + "," + this.value;
        } else {
          eightbox = this.value;
        }
      });
      Boxvalue.push({ Index: 8, Val: eightbox });
      Boxvalue.push({ Index: 3, Val: this.thirdbox });
      Boxvalue.push({ Index: 10, Val: this.tenthbox });
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "sharp-mgmt/store/risk-factor",
        {
          added_by: this.userdetails.user.id,
          patient_id: this.patient_id,
          sharp_register_id: this.Id,
          result: JSON.stringify([this.checkedList]),
          risk_factor_yes_value: JSON.stringify(Boxvalue),
        },
        { headers }
      );
      if (response.data.code == 201 || response.data.code == "201") {
        this.loader = false;
        this.sharp_register_id = response.data.id;
        if(dp != "dataProducer"){
          $('#myTab a[href="#protective"]').tab("show");
        }
      } else {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async Onriskfactor() {
      console.log("my check list", this.checkedList);
      this.error = null;
      if (Object.values(this.checkedList).length == 12) {
        try {
          this.loader = true;
          var Boxvalue = [];
          var firstbox = "";
          var fourthbox = "";
          var sixthbox = "";
          var seventhbox = "";
          var eightbox = "";
          $("#firstbox :selected").each(function () {
            if (firstbox) {
              firstbox = firstbox + "," + this.value;
            } else {
              firstbox = this.value;
            }
          });
          Boxvalue.push({ Index: 1, Val: firstbox });
          $("#fourthbox :selected").each(function () {
            if (fourthbox) {
              fourthbox = fourthbox + "," + this.value;
            } else {
              fourthbox = this.value;
            }
          });
          Boxvalue.push({ Index: 4, Val: fourthbox });
          $("#sixthbox :selected").each(function () {
            if (sixthbox) {
              sixthbox = sixthbox + "," + this.value;
            } else {
              sixthbox = this.value;
            }
          });
          Boxvalue.push({ Index: 6, Val: sixthbox });
          $("#seventhbox :selected").each(function () {
            if (seventhbox) {
              seventhbox = seventhbox + "," + this.value;
            } else {
              seventhbox = this.value;
            }
          });
          Boxvalue.push({ Index: 7, Val: seventhbox });
          $("#eightbox :selected").each(function () {
            if (eightbox) {
              eightbox = eightbox + "," + this.value;
            } else {
              eightbox = this.value;
            }
          });
          Boxvalue.push({ Index: 8, Val: eightbox });
          Boxvalue.push({ Index: 3, Val: this.thirdbox });
          Boxvalue.push({ Index: 10, Val: this.tenthbox });
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/risk-factor",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              sharp_register_id: this.Id,
              result: JSON.stringify([this.checkedList]),
              risk_factor_yes_value: JSON.stringify(Boxvalue),
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            $('#myTab a[href="#protective"]').tab("show");
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        } catch (e) {
          this.loader = false;
          this.errors = e;
        }
      } else {
        this.error = "Please attempt all question";
      }
    },
    async Onprotectivefactordraft(dp) {
      console.log(this.procheckedList);

        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/protective-factor",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              sharp_register_id: this.Id,
              result: JSON.stringify([this.procheckedList]),
              status: "0",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            this.sharp_register_id = response.data.id;
            if(dp != "dataProducer"){
              $('#myTab a[href="#selfharm"]').tab("show");
            };
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        } catch (e) {
          this.loader = false;
          this.errors = e;
        }

    },
    async Onprotectivefactor() {
      console.log(this.procheckedList);
      if (
        Object.values(this.procheckedList).length ==
        this.protectivefactorlist.length
      ) {
        try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/protective-factor",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              sharp_register_id: this.Id,
              result: JSON.stringify([this.procheckedList]),
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            $('#myTab a[href="#selfharm"]').tab("show");
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        } catch (e) {
          this.loader = false;
          this.errors = e;
        }
      } else {
        this.error = "Please attempt all questions";
      }
    },
    onSectionB() {
      if(this.overdose){
        this.secB = "val";
      }
      if(this.hanging){
        this.secB = "val";
      }
      if(this.drowning){
        this.secB = "val";
      }
      if(this.firearmsorexplosives){
        this.secB = "val";
      }
      if(this.fire_flames){
        this.secB = "val";
      }
      if(this.cuttingorpiercing){
        this.secB = "val";
      }
      if(this.jumpingfromheight){
        this.secB = "val";
      }
      if(this.other_sh){
        this.secB = "val";
      }
    },
    onSectionC() {
      if(this.family){
        this.secC = "val";
      }
      if(this.internet){
        this.secC = "val";
      }
      if(this.printed){
        this.secC = "val";
      }
      if(this.broadcast){
        this.secC = "val";
      }
      if(this.ideas){
        this.secC = "val";
      }
      if(this.patientactualword){
        this.secC = "val";
      }
    },
    onSectionD() {
      if(this.patient_intent != null){
        this.secD = "val";
      }
    },
    intentYes(){
      if($("#verbal").is(":checked")){
        this.secDYes = "val"
      }
      if($("#messaging").is(":checked")){
        this.secDYes = "val"
      }
      if($("#rehearsing").is(":checked")){
        this.secDYes = "val"
      }
      if($("#not-Expressed").is(":checked")){
        this.secDYes = "val"
      }
      if($("#handwritten").is(":checked")){
        this.secDYes = "val"
      }
      if($("#social-media").is(":checked")){
        this.secDYes = "val"
      }
      if($("#learn-more").is(":checked")){
        this.secDYes = "val"
      }
      if($("#Other").is(":checked")){
        this.secDYes = "val"
      }
    },
    async DraftSelfHarm(dp) {
      this.errors = [];
      try {
        this.loader = true;
        if (this.patient_intent == "intent-yes") {
          this.selected.forEach((value, index) => {
            if (!this.patient_intent_value) {
              this.patient_intent_value = "intent-yes,";
            } else {
              this.patient_intent_value = this.patient_intent_value + "," + value;
            }
          });
        } else if (this.patient_intent == "no") {
          this.patient_intent_value = "no";
        } else {
          this.patient_intent_value = "Undetermined";
        }

        if(this.verbal){
              this.verbal = "verbal,"
        }
        else{
          this.verbal = "";
        }
        if(this.Messaging){
          this.Messaging = "Messaging,"
        }else{
          this.Messaging = "";
        }
        if(this.Rehearsing){
          this.Rehearsing = "Rehearsing,"
        }else{
          this.Rehearsing = "";
        }
        if(this.Expressed){
          this.Expressed = "Not Expressed,"
        }else{
          this.Expressed = "";
        }
        if(this.Handwritten){
          this.Handwritten = "Handwritten,"
        }else{
          this.Handwritten = "";
        }
        if(this.SocialMedia){
          this.SocialMedia = "Social Media,"
        }else{
          this.SocialMedia = "";
        }
        if(this.Learnmore){
          this.Learnmore = "Learn more,"
        }else{
          this.Learnmore = "";
        }
        if(this.Other){
          this.Other = "Other,"
        }else{
          this.Other = "";
        }
        
        if(!this.SItestscore){
          this.SItestscore = this.testresult.section_value;
        }
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "sharp-mgmt/store/self-harm",
          {
            added_by: this.userdetails.user.id,
            patient_id: this.patient_id,

            result: JSON.stringify([
              {
                "CURRENT SELF HARM ACT": {
                  Date: this.Sdate,
                  Time: this.Stime,
                  "Place of Occurance": this.place_id,
                  place_other: this.place_other,
                },
              },
              {
                "Method of Self-Harm": {
                  "Overdose/Poisoning": this.overdose,
                  Overdosespecify:this.Overdosespecify,
                  "Hanging/Suffocation": this.hanging,
                  Drowning: this.drowning,
                  "Firearms or explosives": this.firearmsorexplosives,
                  "Fire/flames": this.fire_flames,
                  "Cutting or Piercing": this.cuttingorpiercing,
                  "Jumping from height": this.jumpingfromheight,
                  "Other": this.other_sh,
                  selfharm_other: this.selfharm_other,

                },
              },
              {
                "How did Patient Get Idea about Method": {
                  "Family, friends, peer group": this.family,
                  "Internet (website, social media platform, app, blogs, forum, video/photosharing)":
                    this.internet,
                  "Printed media (newspaper, books, magazine, etc)":
                    this.printed,
                  "Own ideas":this.ideas,
                  "Broadcast media (television, radio)": this.broadcast,
                  "Specify patient actual words": this.patientactualword,
                  patientactualword_other: this.patientactualword_other,
                },
              },
              {
                "Suicidal Intent": {
                  intent: this.patient_intent + ","+ this.verbal +this.Messaging + this.Rehearsing + this.Expressed + this.Handwritten +this.SocialMedia + this.Learnmore + this. Other + "," + this.intent_other,
                },
              },
              { "Level of Suicidal Intent": this.SItestscore },
            ]),
            sharp_register_id: this.Id,
            status: "0",
          },
          { headers }
        );
        console.log("my reslut", response.data);
        if (response.data.code == 201 || response.data.code == "201") {
          this.loader = false;
          this.sharp_register_id = response.data.id;
          if(dp != "dataProducer"){
            $('#myTab a[href="#suicide"]').tab("show");
          }
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async SelfHarm() {
      this.errors = [];
      try {
        if (!this.Sdate) {
          this.errors.push("Date is required.");
        }
        if (!this.Stime) {
          this.errors.push("Time is required.");
        }
        if (!this.place_id) {
          this.errors.push("Place of occurrence is required.");
        }
        if (
          this.Sdate &&
          this.Stime &&
          this.place_id
        ) {
          this.loader = true;
          if (this.patient_intent == "intent-yes") {
            this.selected.forEach((value, index) => {
              if (!this.patient_intent_value) {
                this.patient_intent_value = "intent-yes,"+value;
              } else {
                this.patient_intent_value = this.patient_intent_value + "," + value;
              }
            });
          } else if (this.patient_intent == "no") {
            this.patient_intent_value = "no";
          } else {
            this.patient_intent_value = "Undetermined";
          }

          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/self-harm",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              result: JSON.stringify([
                {
                  "CURRENT SELF HARM ACT": {
                    Date: this.Sdate,
                    Time: this.Stime,
                    "Place of Occurance": this.place_id,
                    place_other: this.place_other,
                  },
                },
                {
                  "Method of Self-Harm": {
                    "Overdose/Poisoning": this.overdose,
                    Overdosespecify:this.Overdosespecify,
                    "Hanging/Suffocation": this.hanging,
                    Drowning: this.drowning,
                    "Firearms or explosives": this.firearmsorexplosives,
                    "Fire/flames": this.fire_flames,
                    "Cutting or Piercing": this.cuttingorpiercing,
                    "Jumping from height": this.jumpingfromheight,
                    "Other": this.other_sh,
                    selfharm_other: this.selfharm_other,
                  },
                },
                {
                  "How did Patient Get Idea about Method": {
                    "Family, friends, peer group": this.family,
                    "Internet (website, social media platform, app, blogs, forum, video/photosharing)":
                      this.internet,
                    "Printed media (newspaper, books, magazine, etc)":
                      this.printed,
                    "Broadcast media (television, radio)": this.broadcast,
                    "Own ideas":this.ideas,
                    "Specify patient actual words":
                      this.patientactualword,
                      patientactualword_other: this.patientactualword_other,
                  },
                },
                {
                  "Suicidal Intent": {
                    intent: this.patient_intent_value + "," + this.intent_other,
                  },
                },
                { "Level of Suicidal Intent": this.SItestscore },
              ]),
              sharp_register_id: this.Id,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            $('#myTab a[href="#suicide"]').tab("show");
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async OnDraftsuciderisk(dp) {
      this.errors = [];
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "sharp-mgmt/store/suicide-risk",
          {
            added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              sharp_register_id: this.Id,
              status: "0",
              result: this.result,
          },
          { headers }
        );
        if (response.data.code == 201 || response.data.code == "201") {
          this.sharp_register_id = response.data.id;
          if(dp != "dataProducer"){
            $('#myTab a[href="#hospital-management"]').tab("show");
          };
          this.loader = false;
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async Onsuciderisk() {
      this.errors = [];
      try {
        if (!this.result) {
          this.errors.push("Please select RISK LEVEL.");
        }
        if (this.result) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/suicide-risk",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              result: this.result,
              sharp_register_id: this.Id,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.sharp_register_id = response.data.id;
            $('#myTab a[href="#hospital-management"]').tab("show");
            this.loader = false;
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    // OnMxdischarge(val) {
    //   if (this.discharge_psy_mx) {
    //     this.discharge_psy_mx = this.discharge_psy_mx + "," + val;
    //   } else {
    //     this.discharge_psy_mx = val;
    //   }
    // },
    psychiatryOnDischarge(){
      if(this.psyd1 == true || this.psyd1 == "Transferred to Psychiatry ward,"){
        this.psyd1 = "Transferred to Psychiatry ward" + ',';
      }else{
        this.psyd1 = '';
      }
      if(this.psyd2 == true || this.psyd2 == "Given appt to Psychiatry clinic,"){
        this.psyd2 = "Given appt to Psychiatry clinic" + ',';
      }else{
        this.psyd2 = ''
      }
      if(this.psyd3 == true || this.psyd3 == "Referred to counsellor,"){
        this.psyd3 = "Referred to counsellor" + ',';
      }else{
        this.psyd3 = ''
      }
      if(this.psyd4 == true || this.psyd4 == "Discharge without any Psychiatry follow-up,"){
        this.psyd4 = "Discharge without any Psychiatry follow-up" + ',';
      }else{
        this.psyd4 = ''
      }
      if(this.psyd5 == true || this.psyd5 == "Refer Community Psychiatry Services,"){
        this.psyd5 = "Refer Community Psychiatry Services" + ',';
      }else{
        this.psyd5 = ''
      }
      if(this.psyd6 == true || this.psyd6 == "Others,"){
        this.psyd6 = "Others" + ',';
      }
      else{
        this.psyd6 = ''
      }
      
      this.discharge_psy_mx = this.psyd1 + this.psyd2 + this.psyd3 + this.psyd4 + this.psyd5 + this.psyd6;
    },
    async OnDraftSavehospitalmanagement(dp) {
      var additionalbox = 0;
      var externalbox = 0;

      this.psychiatryOnDischarge();

      $("#additionalbox :selected").each(function () {
        if (additionalbox) {
          additionalbox = additionalbox + "," + this.value;
        } else {
          additionalbox = this.value;
        }
      });

      $("#externalbox :selected").each(function () {
        if (externalbox) {
          externalbox = externalbox + "," + this.value;
        } else {
          externalbox = this.value;
        }
      });

      this.errors = [];
      try {
        if (this.referral_or_contact == "rcp") {
          this.referral_or_contact = 0;
        }
        if (this.arrival_mode == "am") {
          this.arrival_mode = 0;
        }
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "sharp-mgmt/store/hospital-mgmt",
          {
            added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              referral_or_contact: this.referral_or_contact,
              referral_or_contact_other: this.referral_or_contact_other,
              arrival_mode: this.arrival_mode,
              arrival_mode_other: this.arrival_mode_other,
              date: this.date,
              time: this.time,
              physical_consequences: this.physical_consequences,
              physical_consequences_des: this.physical_consequences_des,
              patient_admitted: this.patient_admitted,
              patient_admitted_des: this.patient_admitted_des,
              discharge_status: this.discharge_status,
              discharge_date: this.discharge_date,
              discharge_number_days_in_ward: this.discharge_number_days_in_ward,
              main_psychiatric_diagnosis: this.main_psychiatric_diagnosis,
              external_cause_inquiry: this.external_cause_inquiry,
              additional_diagnosis: JSON.stringify(additionalbox),
              additional_external_cause_injury: JSON.stringify(externalbox),
              discharge_psy_mx: this.discharge_psy_mx,
              discharge_psy_mx_des: this.discharge_psy_mx_des,
              sharp_register_id: this.Id,
              status: "0",
          },
          { headers }
        );
        console.log("my data", response.data);
        if (response.data.code == 201 || response.data.code == "201") {
          this.loader = false;

          this.sharp_register_id = response.data.id;
          if(dp != "dataProducer"){
            $('#myTab a[href="#data-producer"]').tab("show");
          }
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async OnSavehospitalmanagement() {
      var additionalbox = "";
      var externalbox = "";

      $("#additionalbox :selected").each(function () {
        if (additionalbox) {
          additionalbox = additionalbox + "," + this.value;
        } else {
          additionalbox = this.value;
        }
      });

      $("#externalbox :selected").each(function () {
        if (externalbox) {
          externalbox = externalbox + "," + this.value;
        } else {
          externalbox = this.value;
        }
      });
      this.errors = [];
      try {
        if (!this.referral_or_contact) {
          this.errors.push("Referral or Contact point is required.");
        }
        if (!this.arrival_mode) {
          this.errors.push("Mode of Arrival is required.");
        }
        if (!this.date) {
          this.errors.push("Date is required.");
        }
        if (!this.time) {
          this.errors.push("Time is required.");
        }
        if (!this.physical_consequences) {
          this.errors.push("Physical consequence is required.");
        }
        if (!this.patient_admitted) {
          this.errors.push("patient admitted for current is required.");
        }
        if (!this.discharge_status) {
          this.errors.push("Status on Dischargeis required.");
        }
        if (!this.discharge_date) {
          this.errors.push("Discharge Date is required.");
        }
        if (!this.discharge_number_days_in_ward) {
          this.errors.push("Number of days in wardis required.");
        }
        if (!this.main_psychiatric_diagnosis) {
          this.errors.push("Main psychiatric diagnosis is required.");
        }
        if (!this.external_cause_inquiry) {
          this.errors.push("External cause of injury is required.");
        }
        if (
          this.referral_or_contact &&
          this.arrival_mode &&
          this.date &&
          this.time &&
          this.physical_consequences &&
          this.patient_admitted &&
          this.discharge_status &&
          this.discharge_date &&
          this.discharge_number_days_in_ward &&
          this.main_psychiatric_diagnosis &&
          this.external_cause_inquiry
        ) {
          // if (this.referral_or_contact == "rcp") {
          //   this.referral_or_contact = 0;
          // }
          // if (this.arrival_mode == "am") {
          //   this.arrival_mode = 0;
          // }
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "sharp-mgmt/store/hospital-mgmt",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              referral_or_contact: this.referral_or_contact,
              referral_or_contact_other: this.referral_or_contact_other,
              arrival_mode: this.arrival_mode,
              arrival_mode_other: this.arrival_mode_other,
              date: this.date,
              time: this.time,
              physical_consequences: this.physical_consequences,
              physical_consequences_des: this.physical_consequences_des,
              patient_admitted: this.patient_admitted,
              patient_admitted_des: this.patient_admitted_des,
              discharge_status: this.discharge_status,
              discharge_date: this.discharge_date,
              discharge_number_days_in_ward: this.discharge_number_days_in_ward,
              main_psychiatric_diagnosis: this.main_psychiatric_diagnosis,
              external_cause_inquiry: this.external_cause_inquiry,
              additional_diagnosis: JSON.stringify(additionalbox),
              additional_external_cause_injury: JSON.stringify(externalbox),
              discharge_psy_mx: this.discharge_psy_mx,
              discharge_psy_mx_des: this.discharge_psy_mx_des,
              sharp_register_id: this.Id,
              status: "1",
            },
            { headers }
          );
          console.log("my data", response.data);
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;

            $('#myTab a[href="#data-producer"]').tab("show");
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async Draftadddataproducer() {
      this.errors = [];
      this.OnDraftriskfactor("dataProducer");
      this.Onprotectivefactordraft("dataProducer");
      this.DraftSelfHarm("dataProducer");
      this.OnDraftsuciderisk("dataProducer");
      this.OnDraftSavehospitalmanagement("dataProducer");
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "shharp-registration-data-producer/add",
          {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              sharp_register_id: this.Id,
              status: "0",
              name_registering_officer: this.officername,
              hospital_name: this.hospitalname,
              designation: this.designation,
              psychiatrist_name: this.psychiatristId.toString(),
              reporting_date: this.reportingdate,
          },
          { headers }
        );
        if (response.data.code == 201 || response.data.code == "201") {
          this.loader = false;
          await this.$swal.fire(
                                'Successfully Saved as Draft!',
                                'Data is inserted.',
                                'success',
                              );
          this.$router.push({
            path: "/modules/Intervention/patient-history",
            query: { id: this.patient_id },
          });
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async adddataproducer() {
      this.errors = [];
      this.$swal.fire({
        title: 'Are you sure you want to submit?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'SUBMIT',
        cancelButtonText: 'CANCEL',
        reverseButtons: true
      }
      ).then(async (result) =>{
        if (result.isConfirmed){
          this.submitting = true;
        if (!this.first) {
          this.errors.push("Q1 - Presence of psychiatric disorder in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.first == "Yes"){
          if(JSON.stringify($("#firstbox :selected").length) == 0 ){
            this.errors.push("Q1 - Please specify the diagnosis in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.second) {
          this.errors.push("Q2 - Hopelessness or despair in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if (!this.third) {
          this.errors.push("Q3 - Previous suicide attempt in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.third == "Yes"){
          if(!this.thirdbox){
            this.errors.push("Q3 - Please specify the number of previous suicide attempt(s) in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.fourth) {
          this.errors.push("Q4 - Presence of substance use/abuse in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.fourth == "Yes"){
          if(JSON.stringify($("#fourthbox :selected").length) == 0 ){
            this.errors.push("Q4 - Please specify type of substance use/abuse in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.fifth) {
          this.errors.push("Q5 - Family history of suicidal behavior in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if (!this.sixth) {
          this.errors.push("Q6 - Family history of psychiatric disorder in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.sixth == "Yes"){
          if(JSON.stringify($("#sixthbox :selected").length) == 0 ){
            this.errors.push("Q6 - Please specify the family history of psychiatric disorder(s) diagnosis in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.seventh) {
          this.errors.push("Q7 - Family history of substance abuse in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.seventh == "Yes"){
          if(JSON.stringify($("#seventhbox :selected").length) == 0 ){
            this.errors.push("Q7 - Please specify type of substance use/abuse in family history in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.eight) {
          this.errors.push("Q8 - Stressful life events in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.eight == "Yes"){
          if(JSON.stringify($("#eightbox :selected").length) == 0 ){
            this.errors.push("Q8 - Please specify stressful life events in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.nine) {
          this.errors.push("Q9 - Isolation, rejection or feelings of shame in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if (!this.tenth) {
          this.errors.push("Q10 - Chronic physical illness or condition in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if(this.tenth == "Yes"){
          if(!this.tenthbox){
            this.errors.push("Q10 - Please specify chronic physical illness or condition in Risk Factors' tab.");
            this.submitting = false;
          }
        }
        if (!this.eleven) {
          this.errors.push("Q11 - History of physical, sexual, or emotional abuse in Risk Factors' tab is required.");
          this.submitting = false;
        }
        if (!this.twelth) {
          this.errors.push("Q12 - Access to lethal methods/weapons in Risk Factors' tab is required.");
          this.submitting = false;
        };
        if(this.procheckedList){
            if(this.procheckedList[13] == '2'){
              this.errors.push("Q1 in Protective Factors' tab is required.");
              this.submitting = false;
            }
            if(this.procheckedList[14] == '2'){
              this.errors.push("Q2 in Protective Factors' tab is required.");
              this.submitting = false;
            }
            if(this.procheckedList[15] == '2'){
              this.errors.push("Q3 in Protective Factors' tab is required.");
              this.submitting = false;
            }
            if(this.procheckedList[16] == '2'){
              this.errors.push("Q4 in Protective Factors' tab is required.");
              this.submitting = false;
            }
            if(this.procheckedList[17] == '2'){
              this.errors.push("Q5 in Protective Factors' tab is required.");
              this.submitting = false;
            }
            if(this.procheckedList[18] == '2'){
              this.errors.push("Q6 in Protective Factors' tab is required.");
              this.submitting - false;
            }
          };
        if (!this.Sdate) {
          this.errors.push("Date in tab Self Harm is required.");
          this.submitting = false;
        }
        if (!this.Stime) {
          this.errors.push("Time in tab Self Harm is required.");
          this.submitting = false;
        }
        if (!this.place_id) {
          this.errors.push("Place of occurrence in tab Self Harm is required.");
          this.submitting = false;
        }
        if(this.place_id=='Other specified areas'){
          if(!this.place_other){
            this.errors.push("Please specify the other specified area in Self Harm's tab.");
            this.submitting = false;
          }
        }
        this.onSectionB();

        if (!this.secB) {
          this.errors.push("Please tick any box of Method of Self Harm in Self Harm's tab.");
          this.submitting = false;
        }
        if(this.overdose){
          if(!this.Overdosespecify){
            this.errors.push("Please specify the overdose/poisoning in Self Harm's tab.");
            this.submitting = false;
          }
        }
        if(this.other_sh){
          if(!this.selfharm_other){
            this.errors.push("Please specify other method of self-harm in Self Harm's tab.");
            this.submitting = false;
          }
        }

        this.onSectionC();
        
        if (!this.secC) {
          this.errors.push(
            "Please tick any box of How did Patient Get Idea about Method in Self Harm's tab."
          );
          this.submitting = false;
        }
        if(this.patientactualword){
          if(!this.patientactualword_other){
            this.errors.push("Please specify patient's actual words in Self Harm's tab.");
            this.submitting = false;
          }
        }

        this.onSectionD();

        if (!this.secD) {
          this.errors.push("Please answer was there an intent question in Self Harm's tab.");
          this.submitting = false;
        }
        this.intentYes();
        if(this.patient_intent == 'intent-yes'){
          if(!this.secDYes){
            this.errors.push("Please tick any box of Suicidal Intent in Self Harm's tab.");
            this.submitting = false;
          }
        }
        if(this.secDYes){
          if($("#Other").is(":checked")){
            if(!this.intent_other){
              this.errors.push("Please specify Suicidal Intent in Self Harm's tab.");
              this.submitting = false;
            }
          }
        }

        if(!this.SItestscore){
          this.SItestscore = this.testresult.section_value;
        }

        if(!this.SItestscore){
          this.errors.push("Suicidal Intent Test's answers in Self Harm's tab is required.");
          this.submitting = false;
        }
        if (!this.result) {
          this.errors.push("Please select Risk Level in Suicide Risk's tab.");
          this.submitting = false;
        }
        if (!this.referral_or_contact) {
          this.errors.push("Referral or Contact point in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if(this.referral_or_contact=='Others' || this.referral_or_contact==194){
          if(!this.referral_or_contact_other){
            this.errors.push("Please Specify the referral or contact point in Hospital Management's tab.");
            this.submitting = false;
          }
        }
        if (!this.arrival_mode || this.arrival_mode==0) {
          this.errors.push("Mode of Arrival in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if(this.arrivalOther){
          if(!this.arrival_mode_other){
            this.errors.push("Please specify the mode of Arrival in Hospital Management's tab.");
            this.submitting = false;
          }
        }
        if (!this.date) {
          this.errors.push("Date in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.time) {
          this.errors.push("Time in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.physical_consequences) {
          this.errors.push("Physical consequence in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if(this.physical_consequences == "Aborted"){
          if(!this.physical_consequences_des){
          this.errors.push("Please specify the reason of aborted attempt in Hospital Management's tab.");
          this.submitting = false;
          }
        }
        if (!this.patient_admitted) {
          this.errors.push("Patient admitted for current in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if(this.patient_admitted == "Yes"){
          if(!this.patient_admitted_des){
            this.errors.push("Please specify the first admitting ward in Hospital Management's tab.");
            this.submitting = false;
          }
        }
        if (!this.discharge_status) {
          this.errors.push("Status on Discharge in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.discharge_date) {
          this.errors.push("Discharge Date in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.discharge_number_days_in_ward) {
          this.errors.push("Number of days in ward in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.main_psychiatric_diagnosis) {
          this.errors.push("Main psychiatric diagnosis in Hospital Management's tab is required.");
          this.submitting = false;
        }
        if (!this.external_cause_inquiry) {
          this.errors.push("External cause of injury in Hospital Management's tab is required.");
          this.submitting = false;
        }

          if(this.psyd1){
            this.seHM = 'val';
          }
          if(this.psyd2){
            this.seHM = 'val';
          }
          if(this.psyd3){
            this.seHM = 'val';
          }
          if(this.psyd4){
            this.seHM = 'val';
          }
          if(this.psyd5){
            this.seHM = 'val';
          }
          if(this.psyd6){
            this.seHM = 'val';
          }

        if (this.seHM != 'val') {
          this.errors.push("Psychiatry Management on Discharge in Hospital Management's tab required.");
          this.submitting = false;
        }

        if(this.psyd6){
          if(!this.discharge_psy_mx_des || this.discharge_psy_mx_des == null || this.discharge_psy_mx_des =="null"){
            this.errors.push("Please specify the psychiatry management on discharge in Hospital Management's tab.");
            this.submitting = false;
          }
        }

        if (!this.officername) {
          this.errors.push("Name of registering officer in Data Producer's tab is required.");
          this.submitting = false;
        }
        if (!this.hospitalname) {
          this.errors.push("Name of hospital in Data Producer's tab is required.");
          this.submitting = false;
        }
        if (!this.designation) {
          this.errors.push("Designation in Data Producer's tab is required.");
          this.submitting = false;
        }
        if (!this.psychiatristId || this.psychiatristId == 0) {
          this.errors.push("Name of Psychiatrist in Data Producer's tab is required.");
          this.submitting = false;
        }
        if (!this.reportingdate) {
          this.errors.push("Date of Reporting in Data Producer's tab is required.");
          this.submitting = false;
        }
        if(this.submitting == false){
          return;
        }
        if (
          this.first &&
          this.second &&
          this.third &&
          this.fourth &&
          this.fifth &&
          this.sixth &&
          this.seventh &&
          this.eight &&
          this.nine &&
          this.tenth &&
          this.eleven &&
          this.twelth &&
          this.procheckedList[13] != '2' &&
          this.procheckedList[14] != '2' &&
          this.procheckedList[15] != '2' &&
          this.procheckedList[16] != '2' &&
          this.procheckedList[17] != '2' &&
          this.procheckedList[18] != '2' &&
          this.Sdate &&
          this.Stime &&
          this.place_id &&
          this.secB &&
          this.secC &&
          this.secD &&
          this.SItestscore &&
          this.result &&
          this.referral_or_contact &&
          this.arrival_mode &&
          this.date &&
          this.time &&
          this.physical_consequences &&
          this.patient_admitted &&
          this.discharge_status &&
          this.discharge_date &&
          this.discharge_number_days_in_ward &&
          this.main_psychiatric_diagnosis &&
          this.external_cause_inquiry &&
          this.seHM == 'val' &&
          this.officername &&
          this.hospitalname &&
          this.psychiatristId &&
          this.reportingdate
        ) {
          this.OnDraftriskfactor("dataProducer");
          this.Onprotectivefactordraft("dataProducer");
          this.DraftSelfHarm("dataProducer");
          this.OnDraftsuciderisk("dataProducer");
          this.OnDraftSavehospitalmanagement("dataProducer");
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "shharp-registration-data-producer/add",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.patient_id,
              name_registering_officer: this.officername,
              hospital_name: this.hospitalname,
              designation: this.designation,
              psychiatrist_name: this.psychiatristId.toString(),
              reporting_date: this.reportingdate,
              sharp_register_id: this.Id,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            await this.$swal.fire(
                                'Successfully Submitted!',
                                'Data is inserted.',
                                'success',
                              );
            this.$router.push({
              path: "/modules/Intervention/patient-history",
              query: { id: this.patient_id },
            });
          } else {
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
          }
        }
      }
    })
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
.step-form-box {
  display: block !important;
}

  input#AW{ /*AW - Admitting Ward */
    height:60px;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    white-space:pre-line;
    position:relative;
    top:-5px;

  }
  ::-moz-placeholder { /* Firefox 19+ */
    white-space:pre-line;
    position:relative;
    top:-5px;
  }
  :-ms-input-placeholder { /* IE 10+ */
    white-space:pre-line;
    position:relative;
    top:-10px;
  }
  :-moz-placeholder { /* Firefox 18- */
      white-space:pre-line;
    position:relative;
    top:-10px;
  }

      /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
