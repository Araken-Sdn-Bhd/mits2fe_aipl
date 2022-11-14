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
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple">
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
                        ><span>3</span>Previous suicide attempts</label
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
                        <div class="step-form-box box-02" v-show="third=='Yes'">
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
                        ><span>4</span>Presence os substance use/abuse</label
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
                        <div class="step-form-box" v-show="fourth=='Yes'">
                          <select id="fourthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple"

                          >
                           <option
              v-for="catcode in typesofsubstance"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.section_value }}
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
                        disorders</label
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
                        <div class="step-form-box" v-show="sixth=='Yes'">
                          <select id="sixthbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple">
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
                        <div class="step-form-box" v-show="seventh=='Yes'">
                          <select id="seventhbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple"

                          >
                           <option
              v-for="catcode in typesofsubstance"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.section_value }}
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
                        <div class="step-form-box" v-show="eight=='Yes'">
                          <select id="eightbox"
                            class="form-select multiselect select2-hidden-accessible" multiple="multiple"

                          >
                           <option
              v-for="catcode in stresslist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.section_value }}
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
                        ><span>10</span>chronic physical illness or
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
                        <div class="step-form-box" v-show="tenth=='Yes'">
                          <input
                            type="text"
                            class="form-control" v-model="tenthbox"
                            placeholder="Please Specify (times)"
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
                     <Error :message="error" v-if="error" />
                    <div class="d-flex">
                      <div class=" mr-auto">
                        <button class="nexttab btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                     <div class="ml-auto">
                        <button
                          type="submit"
                          class="btn btn-text btn-warning"
                          @click="Onriskfactor"
                        >
                          <i class="fad fa-save"></i> Save
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

                     <div class="d-flex">
                                            <button class="pre-1 btn btn-success mr-auto"><i class="fad fa-arrow-to-left"></i> Back</button>
                                            <div class="ml-auto">
                                                <button class="nex-1 btn btn-success next-btn">Next <i class="fad fa-arrow-alt-to-right"></i></button>
                                                <button type="submit" class="btn btn-text btn-warning" @click="Onprotectivefactor"><i class="fad fa-save"></i> Save</button>
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
                            SECTION A : CURRENT SELF HARM ACT
                            <small
                              >(within past 2 weeks from time of
                              presentation)</small
                            >
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
                                <input type="date" class="form-control" v-model="Sdate" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label">Time</label>
                                <input type="time" class="form-control" v-model="Stime" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label"
                                  >Place of Occurrence</label
                                >
                                <select class="form-select select-others" v-model="place_id">
                                  <option value="0">Please Select</option>
                                 <option
                        v-for="slt in placelist"
                        v-bind:key="slt.section_value"
                        v-bind:value="slt.section_value"
                      >
                        {{ slt.section_value }}
                      </option>
                                  <option value="others">
                                    Other area (Please specify)
                                  </option>
                                </select>
                              </div>
                              <!-- SHOW_DIV -->
                              <div
                                class="col-sm-12 others selected-box mt-3"
                                style="display: none"
                              >
                                <div class="mb-3">
                                  <label class="form-label"
                                    >Others (Please specify)</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Please Specify" v-model="place_other"
                                  />
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
                            Section B: Method of Self-Harm
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
                                    id="1" v-model="overdose" @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="1">
                                    Overdose/Poisoning
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div
                                  class="
                                    col-sm-12
                                    mt-3
                                  " v-show="overdosevalue"
                                >
                                  <div class="mb-3">
                                    <select class="form-select" id="op-select" v-model="overdosevalue">
                                      <option value="">Please select</option>
                                       <option
                        v-for="slt in overdoselist"
                        v-bind:key="slt.section_value"
                        v-bind:value="slt.section_value"
                      >
                        {{ slt.section_value }}
                      </option>
                                    </select>
                                  </div>
                                  <!-- SHOW_DIV -->
                                  <div class="col-sm-12 medication op-box">
                                    <div class="mb-3">
                                      <label class="form-label"
                                        >Please Specify</label
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Please Specify"
                                      />
                                    </div>
                                  </div>
                                  <!-- SHOW_DIV -->
                                  <div class="col-sm-12 chemicals op-box">
                                    <div class="mb-3">
                                      <label class="form-label"
                                        >Please Specify</label
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Please Specify"
                                      />
                                    </div>
                                  </div>
                                  <!-- SHOW_DIV -->
                                  <div
                                    class="col-sm-12 illicit-substance op-box"
                                  >
                                    <div class="mb-3">
                                      <label class="form-label"
                                        >Please Specify</label
                                      >
                                      <input
                                        type="text"
                                        class="form-control"
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
                                    Hanging/Suffocation
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
                                    Drowning
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
                                    Firearms or explosives
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
                                    Fire/flames
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
                                    Cutting or Piercing
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
                                    value="Other"
                                    id="8"
                                  />
                                  <label class="form-check-label" for="8">
                                    Other
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div
                                  class="col-sm-12 selfharm-other-div mt-3 hide"
                                >
                                  <div class="mb-3">
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
                            Section C: How did Patient Get Idea about Method
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
                                    class="form-check-input overdose-poisoning"
                                    type="checkbox"
                                    value="Family, friends, peer group"
                                    id="1.1" v-model="family"  @click="onSectionC('val')"
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
                                    id="2.2" v-model="internet" @click="onSectionC('val')"
                                  />
                                  <label class="form-check-label" for="2.2">
                                    Internet (website, social media platform,
                                    app, blogs, forum, video/photosharing)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Printed media (newspaper, books, magazine, etc)"
                                    id="3.3" v-model="printed" @click="onSectionC('val')"
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
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Broadcast media (television, radio)"
                                    id="5.5" v-model="broadcast" @click="onSectionC('val')"
                                  />
                                  <label class="form-check-label" for="5.5">
                                    Broadcast media (television, radio)
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input specify-other"
                                    type="checkbox"
                                    value="Specify patient actual words"
                                    id="6.6" v-model="patientactualword" @click="onSectionC('val')"
                                  />
                                  <label class="form-check-label" for="6.6">
                                    Specify patient actual words
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <!-- SHOW_DIV -->
                                <div
                                  class="col-sm-12 specify-other-div mt-3 hide"
                                >
                                  <div class="mb-3">
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
                            Section D: Suicidal Intent
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
                                    >Learn more</label
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
                                    >Other</label
                                  >
                                  <!-- SHOW_DIV -->
                                  <div class="intent-other-div hide">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Please Specify" v-model="intent_other"
                                    />
                                  </div>
                                  <!-- SHOW_DIV -->
                                </div>
                              </div>
                              <!-- SHOW_DIV -->
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
                            Section E: Level of Suicidal Intent
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

                <table class="self-harm" v-if="testresult">
                  <tbody>
                    <tr>
                      <th>Score:</th>
                      <td>{{testresult.section_value}}</td>
                    </tr>
                    <tr>
                      <th>Level of Suicidal Internt:</th>
                      <td>{{testresult.section}}</td>
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
                    <div class="d-flex">
                      <button class="pre-2 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-2 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                        <!-- <button type="submit" class="btn btn-text btn-warning">
                          <i class="fad fa-save"></i> Save
                        </button> -->
                        <button type="submit" class="btn btn-text btn-warning" @click="SelfHarm"><i class="fad fa-save"></i> Save</button>
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
                        >Level of Suicide Risk For Current Attempt</label
                      >
                      <table class="table">
                        <thead>
                          <tr>
                            <th width="20%">Risk Level</th>
                            <th scope="col">
                              Based on Risk Factor/Protective Factor/Suicidal
                              Intent
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
                              <p>
                                Psychiatric diagnoses with severe symptoms or
                                acute precipitating events; protective factors
                                not relevant; high suicidal intent
                              </p>
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
                              <p>
                                Multiple risk factors, few protective factors,
                                moderate suicidal intent
                              </p>
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
                              <p>
                                Modifiable risk factors, strong protective
                                factors, no or low suicidal intent
                              </p>
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
                    <div class="d-flex">
                      <button class="pre-3 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-3 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                        <button type="submit" @click="Onsuciderisk" class="btn btn-text btn-warning">
                          <i class="fad fa-save"></i> Save
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
                          <option value="rcp">
                            Other(Please Specfy)
                          </option>
                        </select>
                      </div>
                      <div
                        class="
                          col-sm-3
                          contact-point-div
                          rcp
                        " v-show="referral_or_contact_other"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Specfy" v-model="referral_or_contact_other"
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
                          <option value="am">
                            Other(Please Specify)
                          </option>
                        </select>
                      </div>
                      <div
                        class="
                          col-sm-3
                          mode-of-arrival-div am
                          hide
                        "
                        style="display: none"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Specfy" v-model="arrival_mode_other"
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
                            id="pcoca1" value="No significant physical harm, No medical treatment required"
                             v-model="physical_consequences"
                          />
                          <label class="form-check-label" for="pcoca1">
                            No significant physical harm, No medical treatment
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
                            Medical attention/Surgery required, but no danger to
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
                            Medical attention/Surgery required, had/has danger
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
                            type="text"
                            class="form-control aborted-div"
                            id="aborted"
                            placeholder="Please Specify"
                           v-model="physical_consequences_des"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >If patient admitted for current attempt</label
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
                          <!-- SHOW_input -->
                          <input
                            type="text"
                            class="form-control pafca-other-div"
                            id="attempt" v-show="patient_admitted_des"
                            placeholder="Please Specify" v-model="patient_admitted_des"
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
                        >Discharge Details</label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" v-model="discharge_date"/>
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Number of days in ward</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Days" v-model="discharge_number_days_in_ward"
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Discharge Diagnosis(ICD-10)</label
                      >
                      <div class="col-sm-4">
                        <label class="form-label"
                          >Main psychiatric diagnosis</label
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
                      <div class="col-sm-4">
                        <label class="form-label"
                          >External cause of injury</label
                        >
                        <select
                          class="form-select"
                          aria-label="Default select example" v-model="external_cause_inquiry"
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
                    <!-- close-row -->
                    <div class="row mb-0 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >PSY MX on Discharge</label
                      >
                      <div class="col-sm-9">
                        <div class="form-check" v-for="(pb, index) in list1" :key="index">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="PSY Mx on Discharge"
                            id="psy-d1" checked
                          />
                          <label class="form-check-label" for="psy-d1">
                            {{pb}}
                          </label>
                        </div>

                        <!-- SHOW_DIV -->
                        <div class="col-sm-4 PSY-other-div mt-3" v-show="discharge_psy_mx_des">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Please Specify" v-model="discharge_psy_mx_des"
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
                    <!-- close-row -->
                    <div class="d-flex">
                      <button class="pre-4 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button class="nex-4 btn btn-success next-btn">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                        <button type="submit" class="btn btn-text btn-warning" @click="OnSavehospitalmanagement">
                          <i class="fad fa-save"></i> Save
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
                    <!-- row -->
                    <div class="d-flex">
                      <button class="pre-5 btn btn-success mr-auto">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <div class="ml-auto">
                        <button type="submit" class="btn btn-success ml-auto" @click="adddataproducer">
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
      //selfharm  ad on
      selected: [],
      testresult: "",
      Sdate: "",
      Stime: "",
      place_id: "",
      place_other: "",
      overdose: "",
      overdosevalue: "",
      hanging: "",
      drowning: "",
      firearmsorexplosives: "",
      fire_flames: "",
      cuttingorpiercing: "",
      jumpingfromheight: "",
      selfharm_other: "",
      family: "",
      internet: "",
      printed: "",
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
      typesofsubstance: [],
      stresslist: [],
      overdoselist: [],
      hospitallist: [],
      patient_id:0
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
    this.reportingdate = moment().format("DD-MM-YYYY");
    this.GetList();

    $(document).ready(function () {
      $(".data-table").DataTable({
        searching: false,
        bLengthChange: false,
      });

      $(".multiselect").select2({
        placeholder: "Please Select",
      });

      // Presence of psychiatric disorder
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

      // 2

      $(".nex-1").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#selfharm"]').tab("show");
      });

      $(".pre-1").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#risk-factors"]').tab("show");
      });

      // 3

      $(".nex-2").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#suicide"]').tab("show");
      });

      $(".pre-2").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#protective"]').tab("show");
      });

      // 4

      $(".nex-3").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#hospital-management"]').tab("show");
      });

      $(".pre-3").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#selfharm"]').tab("show");
      });

      // 5

      $(".nex-4").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#data-producer"]').tab("show");
      });

      $(".pre-4").click(function (e) {
        e.preventDefault();
        $('#myTab a[href="#suicide"]').tab("show");
      });

      // 6

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
      } else {
        this.diagonisislist = [];
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
      const response3 = await this.$axios.get("staff-management/getList", { headers });
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
            } else {
              status = 0;
            }
            if (checkedlisst) {
              checkedlisst =
                checkedlisst + "," + element.questionId + ":" + status;
            } else {
              checkedlisst = element.questionId + ":" + status;
            }
            //  window.alert(checkedlisst);
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
          // checkedlisst = JSON.stringify(checkedlisst);
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
              const arr = element.Val.split(',');
              $("#fourthbox")
                .val(arr)
                .trigger("change");
            }
            if (element.Index == 6) {
              const arr = element.Val.split(',');
              $("#sixthbox")
                .val(arr)
                .trigger("change");
            }
            if (element.Index == 7) {
              const arr = element.Val.split(',');
              $("#seventhbox")
                .val(arr)
                .trigger("change");
            }
            if (element.Index == 8) {
              const arr = element.Val.split(',');
              $("#eightbox")
                .val(arr)
                .trigger("change");
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
          this.testresult = response.data.result.selfharm[4];
          this.overdose =
            response.data.result.selfharm[1].section_value.Overdose_Poisoning;
          this.overdosevalue =
            response.data.result.selfharm[1].section_value.Overdose_Poisoning;
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
          this.selfharm_other =
            response.data.result.selfharm[1].section_value.Other;
            if(response.data.result.selfharm[3].section_value.intent=="no"||response.data.result.selfharm[3].section_value.intent=="Undetermined"){
            this.patient_intent =
            response.data.result.selfharm[3].section_value.intent;
            }else{
              var intent=response.data.result.selfharm[3].section_value.intent.split(",");
              this.patient_intent =intent[0];
              //  verbal:"",Messaging:"",Rehearsing:"",Expressed:"",Handwritten:"",SocialMedia:"",Learnmore:"",Other:"",
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
              });
            }

            this.family=response.data.result.selfharm[2].section_value.Family_friends_peer_group;
            this.internet=response.data.result.selfharm[2].section_value.Internet_website_social_media_platform_app_blogs_forum_video_photosharing;
            this.printed=response.data.result.selfharm[2].section_value.Printed_media_newspaper_books_magazine_etc;
            this.broadcast=response.data.result.selfharm[2].section_value.Broadcast_media_television_radio;
            this.patientactualword=response.data.result.selfharm[2].section_value.Specify_patient_actual_words;
            this.patientactualword_other=response.data.result.selfharm[2].section_value.Specify_patient_actual_words;

          //Suicide Risk
          this.result = response.data.result.suicideRisk[0].result;
          //Hospital
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
          this.list1 =
            response.data.result.hospital[0].discharge_psy_mx.split(",");
          //Data producer
          // this.officername =
          //   response.data.result.dataSource[0].name_registering_officer;
          // this.hospitalname = response.data.result.dataSource[0].hospital_name;
          // this.designation = response.data.result.dataSource[0].designation;
          // this.reportingdate =
          //   response.data.result.dataSource[0].reporting_date;
          this.psychiatristId =
            response.data.result.dataSource[0].psychiatrist_name;
        }
      } catch (e) {}
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
      //this.checkedList[ind] = val;
      delete checkedList.val;
      this.checkedList[val] = event.target.value;
      console.log("my pushed array", this.checkedList);
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
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
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
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
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
    onSectionB(val) {
      this.secB = val;
    },
    onSectionC(val) {
      this.secC = val;
    },
    onSectionD(val) {
      this.secD = val;
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
          this.errors.push("Place of Occurrence is required.");
        }
        // if (!this.secB) {
        //   this.errors.push("Please tick any box of Method of Self Harm.");
        // }
        // if (!this.secC) {
        //   this.errors.push(
        //     "Please tick any box of How did Patient Get Idea about Method."
        //   );
        // }
        // if (!this.secD) {
        //   this.errors.push("Please tick any box of Suicidal Intent required.");
        // }
        if (
          this.Sdate &&
          this.Stime &&
          this.place_id
          //&&
          // this.secB &&
          // this.secC &&
          // this.secD
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
                  },
                },
                {
                  "Method of Self-Harm": {
                    "Overdose/Poisoning": this.overdosevalue,
                    "Hanging/Suffocation": this.hanging,
                    Drowning: this.drowning,
                    "Firearms or explosives": this.firearmsorexplosives,
                    "Fire/flames": this.fire_flames,
                    "Cutting or Piercing": this.cuttingorpiercing,
                    "Jumping from height": this.jumpingfromheight,
                    Other: this.selfharm_other,
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
                    "Specify patient actual words":
                      this.patientactualword_other,
                  },
                },
                {
                  "Suicidal Intent": {
                    intent: this.patient_intent_value,
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
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
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
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async OnSavehospitalmanagement() {
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
        // if (!this.discharge_psy_mx) {
        //   this.errors.push("PSY MX on Dischargeis required.");
        // }
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
          //&&
          //  this.discharge_psy_mx
        ) {
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
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async adddataproducer() {
      this.errors = [];
      try {
        if (!this.officername) {
          this.errors.push("Name of registering officer is required.");
        }
        if (!this.hospitalname) {
          this.errors.push("Name of hospital is required.");
        }
        if (!this.designation) {
          this.errors.push("Designation is required.");
        }
        if (!this.psychiatristId) {
          this.errors.push("Name of Psychiatrist is required.");
        }
        if (!this.reportingdate) {
          this.errors.push("Date of Reporting is required.");
        }
        if (
          this.officername &&
          this.hospitalname &&
          this.designation &&
          this.psychiatristId &&
          this.reportingdate
        ) {
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
              sharp_register_id: this.sharp_register_id,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            // this.$nextTick(() => {
            //   $("#insertpopup").modal("show");
            // });
            this.$router.push({
              path: "/modules/Intervention/patient-history",
              query: { id: this.Id },
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
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
</style>
