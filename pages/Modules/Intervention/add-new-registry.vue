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
                        ><span>1</span>Presence of psychiatric disorder<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no"
                            v-model="presence_psychiatric"
                            value="No"
                            name="Presence of psychiatric disorder" @click="onchange(1,0)"
                          />
                          <label class="form-check-label" for="no">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes"
                            value="Yes"
                            v-model="presence_psychiatric"
                            name="Presence of psychiatric disorder" @click="onchange(1,1)"
                          />
                          <label class="form-check-label" for="yes">YES</label>
                        </div>
                        <div class="step-form-box box-01">
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
                        ><span>2</span>Hopelessness or despair<small style="color:red">*</small> </label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no1"
                            value="No"
                            v-model="hopeless_despair"
                            name="Hopelessness or Despair" @click="onchange(2,0)"
                          />
                          <label class="form-check-label" for="no1">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes1" value="Yes"
                            v-model="hopeless_despair"
                            name="Hopelessness or Despair" @click="onchange(2,1)"
                          />
                          <label class="form-check-label" for="yes1">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>3</span>Previous suicide attempts<small style="color:red">*</small> </label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box1">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no2"
                            v-model="prev_suicide" value="No"
                            name="Previous suicide attempts" @click="onchange(3,0)"
                          />
                          <label class="form-check-label" for="no2">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box1">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes2" value="Yes"
                            v-model="prev_suicide"
                            name="Previous suicide attempts" @click="onchange(3,1)"
                          />
                          <label class="form-check-label" for="yes2">YES</label>
                        </div>
                        <div class="step-form-box box-02">
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
                        ><span>4</span>Presence of substance use/abuse<small style="color:red">*</small> </label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box2">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no3" value="No"
                            v-model="substance_abuse"
                            name="Prresence os substance use/abuse" @click="onchange(4,0)"
                          />
                          <label class="form-check-label" for="no3">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box2">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes3" value="Yes"
                            v-model="substance_abuse"
                            name="Prresence os substance use/abuse" @click="onchange(4,1)"
                          />
                          <label class="form-check-label" for="yes3">YES</label>
                        </div>
                        <div class="step-form-box box-03">
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
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>5</span>Family history of suicidal
                        behavior<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no4" value="No"
                            v-model="family_suicidal"
                            name="family history of suicidal behavior" @click="onchange(5,0)"
                          />
                          <label class="form-check-label" for="no4">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes4" value="Yes"
                            v-model="family_suicidal"
                            name="family history of suicidal behavior" @click="onchange(5,1)"
                          />
                          <label class="form-check-label" for="yes4">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>6</span>Family history of psychiatric
                        disorders<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box3">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no5" value="No"
                            v-model="history_psych"
                            name="family history of psychiatric disorders" @click="onchange(6,0)"
                          />
                          <label class="form-check-label" for="no5">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box3">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes5" value="Yes"
                            v-model="history_psych"
                            name="family history of psychiatric disorders" @click="onchange(6,1)"
                          />
                          <label class="form-check-label" for="yes5">YES</label>
                        </div>
                        <div class="step-form-box box-04">
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
                        ><span>7</span>Family history of substance abuse<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box4">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no6" value="No"
                            v-model="family_abuse"
                            name="family history of substance abuse" @click="onchange(7,0)"
                          />
                          <label class="form-check-label" for="no6">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box4">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes6" value="Yes"
                            v-model="family_abuse"
                            name="family history of substance abuse" @click="onchange(7,1)"
                          />
                          <label class="form-check-label" for="yes6">YES</label>
                        </div>
                        <div class="step-form-box box-05">
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
                          </select>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>8</span>Stressful life events or loss<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box5">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no7" value="No"
                            v-model="stressful"
                            name="stressful life events or loss" @click="onchange(8,0)"
                          />
                          <label class="form-check-label" for="no7">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box5">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes7" value="Yes"
                            v-model="stressful"
                            name="stressful life events or loss" @click="onchange(8,1)"
                          />
                          <label class="form-check-label" for="yes7">YES</label>
                        </div>
                        <div class="step-form-box box-06">
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
                          </select>
                          <div class="step-form-box">
                          <input
                            type="text"
                            class="form-control" v-model="stress_other"
                            placeholder="Please Specify"
                          />
                        </div>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>9</span>Isolation, rejection or feelings of
                        shame<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no8" value="No"
                            v-model="rejection"
                            name="Isolation, rejection or feelings of shame" @click="onchange(9,0)"
                          />
                          <label class="form-check-label" for="no8">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes8" value="Yes"
                            v-model="rejection"
                            name="Isolation, rejection or feelings of shame" @click="onchange(9,1)"
                          />
                          <label class="form-check-label" for="yes8">YES</label>
                        </div>
                      </div>
                    </div>
                    <!-- row-close -->
                    <div class="row mb-3">
                      <label class="col-sm-5 col-form-label"
                        ><span>10</span>Chronic physical illness or
                        condition<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline no-box6">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no9" value="No"
                            v-model="chronic_ill"
                            name="chronic physical illness or condition"  @click="onchange(10,0)"
                          />
                          <label class="form-check-label" for="no9">NO</label>
                        </div>
                        <div class="form-check form-check-inline yes-box6">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes9" value="Yes"
                            v-model="chronic_ill"
                            name="chronic physical illness or condition" @click="onchange(10,1)"
                          />
                          <label class="form-check-label" for="yes9">YES</label>
                        </div>
                        <div class="step-form-box box-07">
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
                        ><span>11</span>History of physical, sexual, or
                        emotional abuse<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no10" value="No"
                            v-model="emotional"
                            name="History of physical , sexual or emotional abuse" @click="onchange(11,0)"
                          />
                          <label class="form-check-label" for="no10">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes10" value="Yes"
                            v-model="emotional"
                            name="History of physical , sexual or emotional abuse" @click="onchange(11,1)"
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
                        ><span>12</span>Access to lethal methods/weapons<small style="color:red">*</small></label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no11" value="No"
                            v-model="lethal"
                            name="access to lethal methods/weapons" @click="onchange(12,0)"
                          />
                          <label class="form-check-label" for="no11">NO</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes11" value="Yes"
                            v-model="lethal"
                            name="access to lethal methods/weapons"  @click="onchange(12,1)"
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
                    <div class="d-flex btn-footer">
                      <div class=" mr-auto">
                        <button class="nexttab btn btn-success next-btn" title="Next Page">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                      <div class="ml-auto">
                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftriskfactor"><i class="fad fa-save"></i> Save as Draft</button>
                        <!-- <button
                          type="submit"
                          class="btn btn-text btn-warning"
                          @click="Onriskfactor"
                          title="Save"
                        >
                          <i class="fa fa-save"></i> Save
                        </button> -->
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
                    <p>Instruction : Please Tick (/) In The Box Provided<small style="color:red">*</small></p>
                  </div>

                    <div
                      class="row mb-3 align-items-center"
                      v-for="(pro, index) in protectivefactorlist"
                      :key="index"
                    >
                      <label class="col-sm-5 col-form-label"
                        ><span>{{ index+1 }}</span
                        >{{ pro.Question }}</label
                      >
                      <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="no"
                             v-bind:name="'pro' + index"
                              @change="onchangeprotect(pro.id,0)"
                          />
                          <label class="form-check-label" for="no">{{
                            pro.Options1
                          }}</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="yes"
                            v-bind:name="'pro' + index" @change="onchangeprotect(pro.id,1)"
                          />
                          <label class="form-check-label" for="yes">{{
                            pro.Options2
                          }}</label>
                        </div>
                      </div>
                    </div>
                      <Error :message="error" v-if="error" />
                      <br><br>
                    <div class="d-flex btn-footer">
                      <div class=" mr-auto">
                        <button class="pre-1 btn btn-success" title="Back" ><i class="fad fa-arrow-to-left"></i> Back</button>
                        <button class="nex-1 btn btn-success next-btn" title="Next Page" >Next <i class="fad fa-arrow-alt-to-right"></i></button>
                      </div>
                      <div class="ml-auto">

                        <button type="submit" class="btn btn-text btn-warning" title="Draft" @click="Onprotectivefactordraft"><i class="fad fa-save" ></i> Save as Draft</button>
                        <!-- <button type="submit" class="btn btn-text btn-warning" title="Save" @click="Onprotectivefactor"><i class="fad fa-save"></i> Save</button> -->
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
                    <div class="accordion accordion-form" id="accordionExample">
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
                          <div>
                            SECTION A : CURRENT SELF HARM ACT
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
                                <label class="form-label">Date<small style="color:red">*</small> </label>
                                <input type="date" class="form-control" v-model="Sdate" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label">Time<small style="color:red">*</small> </label>
                                <input type="time" class="form-control" v-model="Stime" />
                              </div>
                              <div class="col-sm-4">
                                <label class="form-label"
                                  >Place of Occurrence<small style="color:red">*</small> </label
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
                              <div class="col-sm-120" v-if="placeOther">
                                    <div class="mb-3">
                                      <label class="form-label"></label
                                      >
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
                              <small style="color:red">*</small>
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
                                <!-- SHOW_DIV -->
                                <div
                                  class="
                                    col-sm-12
                                    overdose-poisoning-div
                                    mt-3
                                    hide
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
                                    id="2" v-model="hanging"  @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="2">
                                    Hanging/Strangulation/Suffocation
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Drowning"
                                    id="3" v-model="drowning"  @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="3">
                                    Drowning/Submersion
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Firearms or explosives"
                                    id="4" v-model="firearmsorexplosives"  @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="4">
                                    Firearms/Explosives
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
                                    id="5"   v-model="fire_flames"  @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="5">
                                    Smoke/Fire/Flames
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Cutting or Piercing"
                                    id="6"  v-model="cuttingorpiercing"  @click="onSectionB('val')"

                                  />
                                  <label class="form-check-label" for="6">
                                    Cutting/Piercing
                                  </label>
                                </div>
                                <!-- checkbox -->
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Jumping from height"
                                    id="7"  v-model="jumpingfromheight"  @click="onSectionB('val')"
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
                                    id="8"  v-model="other_sh" @click="onSectionB('val')"
                                  />
                                  <label class="form-check-label" for="8">
                                    Others
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
                              <small style="color:red">*</small>
                            </p>
                            <div class="row mt-3">
                              <div class="col-sm-6">
                                <div class="form-check mb-3">
                                  <input
                                    class="form-check-input"
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
                                    class="form-check-input"
                                    type="checkbox"
                                    value="Own ideas"
                                    id="4.4" v-model="ideas" @click="onSectionC('val')"
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
                                    id="6.6" v-model="patientactualword" @click="onSectionC('val')"
                                  />
                                  <label class="form-check-label" for="6.6">
                                    Others, specify patient's actual words
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
                                >Was there an intent?<small style="color:red">*</small></label
                              >
                              <div class="mt-2">
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input intent"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="no" v-model="patient_intent" @click="onSectionD('val')"
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
                                    value="intent-yes" v-model="patient_intent" @click="onSectionD('val')"
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
                                    value="Undetermined" v-model="patient_intent" @click="onSectionD('val')"
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
                                  />
                                  <label class="form-check-label" for="Other"
                                    >Others</label
                                  >
                                  <!-- SHOW_DIV -->
                                <div
                                  class="col-sm-10 intent-other-div mt-4 hide" style="margin-top: 22px;"
                                >
                                  <div class="mb-3">
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
                        <div class="col-sm-6" v-for="(psp, index) in list" :key="index">
                  <!-- radio-group -->
                  <div class="radio-group mb-3">
                    <label class="form-label"
                      > {{ psp.Question }}</label
                    >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-bind:name="'psp' + index"
                        value="0"
                        @change="onchangetest(index, 0)"
                      />
                      <label class="form-check-label" for="level1">
                        {{ psp.Answer0 }}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-bind:name="'psp' + index"
                        value="1"
                        @change="onchangetest(index, 1)"
                      />
                      <label class="form-check-label" for="level2">
                        {{ psp.Answer1 }}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-bind:name="'psp' + index"
                        value="2"
                        @change="onchangetest(index, 2)"
                      />
                      <label class="form-check-label" for="level3">
                        {{ psp.Answer2 }}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <Error :message="error" v-if="error" />
                   <button
                  type="button"
                  class="btn btn-success btn-text"
                  id="calculate" @click="OnsubmitTest"
                >
                  <i class="fad fa-calculator"></i> Calculate
                </button>
                <table class="self-harm" v-if="testresult">
                  <tbody>
                    <tr>
                      <th>Score:</th>
                      <td>{{testresult.siScore}}</td>
                    </tr>
                    <tr>
                      <th>Level of Suicidal Intent:</th>
                      <td>{{testresult.SI}}</td>
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
                    <div class="d-flex btn-footer">
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

                        <!-- <button type="submit" class="btn btn-text btn-warning" title="Save" @click="SelfHarm"><i class="fad fa-save"></i> Save</button> -->
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
                        >Level of Suicide Risk For Current Attempt<small style="color:red">*</small></label
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
                    <div class="d-flex btn-footer">
                      <div class=" mr-auto">
                      <button class="pre-3 btn btn-success" title="Back">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <button class="nex-3 btn btn-success next-btn" title="Next Page">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                      <div class="ml-auto">

                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftsuciderisk"><i class="fad fa-save"></i> Save as Draft</button>
                        <!-- <button type="submit" title="Save" @click="Onsuciderisk" class="btn btn-text btn-warning">
                          <i class="fad fa-save"></i> Save
                        </button> -->
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
                        >Referral or Contact point<small style="color:red">*</small></label
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
                      <div class="col-sm-4" v-if="contactOther">
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
                        >Mode of Arrival<small style="color:red">*</small></label
                      >
                      <div class="col-sm-3">
                        <select
                          v-model="arrival_mode"
                          class="form-select mode-of-arrival"
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
                      <div class="col-sm-4" v-if="arrivalOther">
                          <input
                            type="text"
                            class="form-control"
                            v-model="arrival_mode_other"
                            placeholder="Please Specify"
                          />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >First psychiatry assessment after current
                        attempt<small style="color:red">*</small></label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date<small style="color:red">*</small></label>
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Please Specify" v-model="date"
                        />
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Time<small style="color:red">*</small></label>
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Please Specify" v-model="time"
                        />
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Physical consequence of current attempt<small style="color:red">*</small></label
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
                          <input
                              type="text"
                              class="form-control aborted-div hide"
                              placeholder="Please Specify" v-model="physical_consequences_des"
                              id="aborted"
                            />
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
                              class="form-control pafca-other-div hide"
                              placeholder="Please Specify The First Admitting Ward" v-model="patient_admitted_des"
                              id="AW"
                            />
                        </div>
                      </div>
                    </div>
                    <!-- close-row -->
                    <div class="row mb-5 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Status on Discharge<small style="color:red">*</small></label
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
                        >Discharge Details<small style="color:red">*</small></label
                      >
                      <div class="col-sm-3">
                        <label class="form-label">Date<small style="color:red">*</small></label>
                        <input type="date" class="form-control" v-model="discharge_date"/>
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Number of days in ward<small style="color:red">*</small></label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Days" v-model="discharge_number_days_in_ward"
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
                          class="form-select multiselect" multiple="multiple"
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
                    <!-- close-row -->
                    <div class="row mb-0 align-items-flex-start">
                      <label class="col-sm-3 col-form-label"
                        >Psychiatry Management on Discharge<small style="color:red">*</small></label
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
                            @change="OnMxdischarge('Transferred to Psychiatry ward')"
                          />
                          <label class="form-check-label" for="psy-d1">
                            Transferred to Psychiatry ward
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
                            @change="OnMxdischarge('Given appt to Psychiatry clinic')"
                          />
                          <label class="form-check-label" for="psy-d2">
                            Given appt to Psychiatry clinic
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
                            @change="OnMxdischarge('Referred to counsellor')"
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
                            @change="OnMxdischarge('Discharge without any Psychiatry follow-up')"
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
                            @change="OnMxdischarge('Refer Community Psychiatry Services')"
                          />
                          <label class="form-check-label" for="psy-d6">
                            Refer Community Psychiatry Services
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
                            @change="OnMxdischarge('Others')"
                          />
                          <label class="form-check-label" for="psy-d5">
                            Others
                          </label>
                        </div>
                        <!-- SHOW_DIV -->
                        <div class="col-sm-4 PSY-other-div mt-3 hide">
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control" id="discharge"
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
                    <br><br>
                    <div class="d-flex btn-footer">
                      <div class=" mr-auto">
                        <button class="pre-3 btn btn-success" title="Back">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      <button class="nex-4 btn btn-success next-btn" title="Next Page">
                          Next <i class="fad fa-arrow-alt-to-right"></i>
                        </button>
                      </div>
                      <div class="ml-auto">
                        <button class="btn btn-text btn-warning" title="Draft" @click="OnDraftSavehospitalmanagement"><i class="fad fa-save"></i> Save as Draft</button>
                        <!-- <button type="submit" class="btn btn-text btn-warning" title="Save" @click="OnSavehospitalmanagement">
                          <i class="fad fa-save"></i> Save
                        </button> -->
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
                          >Name of registering officer<small style="color:red">*</small></label
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
                          >Name of hospital<small style="color:red">*</small></label
                        >
                         <input
                v-model="hospitalname"
                disabled="false"
                class="form-control"
                type="text"
              >
                                   </div>
                      <!-- col-sm-6 -->
                    </div>
                    <!-- row -->
                    <div class="row">
                      <div class="col-sm-6 mb-3">
                        <label for="" class="form-label">Designation<small style="color:red">*</small></label>
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
                          >Name of Psychiatrist<small style="color:red">*</small></label
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
                          >Date of Reporting<small style="color:red">*</small></label
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
                    <br><br>
                    <div class="d-flex btn-footer">
                      <div class="mr-auto">
                        <button class="pre-3 btn btn-success" title="Back">
                        <i class="fad fa-arrow-to-left"></i> Back
                      </button>
                      </div>
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
import moment from 'moment'
export default {
  components: { CommonSidebar, CommonHeader, PatientDetails },
  name: "patient-summary",
  data() {
    return {
      userdetails: null,
      errors: [],
      error: null,
      loader: false,
      protectivefactorlist: [],
      referallist: [],
      modelist: [],
      psychiatrist: [],
      injurylist: [],
      placelist: [],
      list: [],
      diagonisislist: [],
      diagonisislist_external: [],
      typesofsubstance: [],
      stresslist: [],
      overdoselist: [],
      hospitallist: [],
      thirdbox: "",
      tenthbox: "",
      Id: 0,
      referral_or_contact: 0,
      arrival_mode: 0,
      contactOther: false,
      referral_or_contact_other: "",
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
      discharge_number_days_in_ward: 0,
      main_psychiatric_diagnosis: 0,
      additional_diagnosis: 0,
      additional_external_cause_injury: 0,
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
      selected: [],
      testresult: "",
      Sdate: "",
      Stime: "",
      place_id: "",
      place_other: "",
      placeOther: false,
      stress_other: "",
      overdose: "",
      overdosevalue: "",
      hanging: "",
      drowning: "",
      firearmsorexplosives: "",
      fire_flames: "",
      cuttingorpiercing: "",
      jumpingfromheight: "",
      other_sh: "",
      selfharm_other: "",
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
      Overdosespecify:"",
      branch:"",
      screenIds:"",
      psyd1: "",
      psyd2: "",
      psyd3: "",
      psyd4: "",
      psyd5: "",
      psyd6: "",
      presence_psychiatric: "",
      hopeless_despair:"",
      prev_suicide: "",
      substance_abuse: "",
      family_suicidal: "",
      history_psych: "",
      family_abuse: "",
      stressful: "",
      rejection: "",
      chronic_ill: "",
      emotional: "",
      lethal: "",
      Others: "",
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.officername = this.userdetails.user.name;
    this.designation = this.userdetails.user.role;
    this.reportingdate = moment().format("DD-MM-YYYY");
    this.hospitalname = this.userdetails.branch.hospital_name;

    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.GetList();
    this.GetUserIpAddress();
    this.checkedList[1] = 2;
    this.checkedList[2] = 2;
    this.checkedList[3] = 2;
    this.checkedList[4] = 2;
    this.checkedList[5] = 2;
    this.checkedList[6] = 2;
    this.checkedList[7] = 2;
    this.checkedList[8] = 2;
    this.checkedList[9] = 2;
    this.checkedList[10] = 2;
    this.checkedList[11] = 2;
    this.checkedList[12] = 2;
    this.procheckedList[13] = 2; 
    this.procheckedList[14] = 2;
    this.procheckedList[15] = 2;
    this.procheckedList[16] = 2;
    this.procheckedList[17] = 2;
    this.procheckedList[18] = 2;
    $(document).ready(function () {
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
        if (this.sharp_register_id) {
          e.preventDefault();
          $('#myTab a[href="#protective"]').tab("show");
        } else {
          $("#Riskfactorpopup").modal("show");
        }
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
      const response = await this.$axios.get(
        "general-setting/list?section=" + "referral-or-contact-point",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.referallist = response.data.list;
      } else {
        this.referallist = [];
      }
      const response1 = await this.$axios.post(
        "shharp-registration-risk-protective-questions/list",
        { Type: "Protective Factors" },
        { headers }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.protectivefactorlist = response1.data.list;
      } else {
        this.protectivefactorlist = [];
      }
      console.log("my protective lst", this.protectivefactorlist);
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "mode-of-arrival",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.modelist = response2.data.list;
      } else {
        this.modelist = [];
      }

      let body = new FormData();
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
      console.log("level-of-suicidal-intent", response6.data);
      if (response6.data.code == 200 || response6.data.code == "200") {
        this.list = response6.data.list;
      } else {
        this.list = [];
      }
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
      const response9 = await this.$axios.get(
        "general-setting/list?section=" + "stressful-life-events",
        { headers }
      );
      if (response9.data.code == 200 || response9.data.code == "200") {
        this.stresslist = response9.data.list;
      } else {
        this.stresslist = [];
      }
      const response10 = await this.$axios.get(
        "general-setting/list?section=" + "overdose-poisoning",
        { headers }
      );
      if (response10.data.code == 200 || response10.data.code == "200") {
        this.overdoselist = response10.data.list;
      } else {
        this.overdoselist = [];
      }
      const response11 = await this.$axios.get("hospital/list", {
        headers,
      });
      console.log("hospital list", response11.data);
      if (response11.data.code == 200 || response11.data.code == "200") {
        this.hospitallist = response11.data.list;
      } else {
        this.hospitallist = [];
      }
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
    OnMxdischarge(val) {
      if (this.discharge_psy_mx) {
        this.discharge_psy_mx = this.discharge_psy_mx + "," + val;
      } else {
        this.discharge_psy_mx = val;
      }
    },
    onchangeprotect(ind, val) {
      this.procheckedList[ind] = val;
    },
    onchange(ind, val) {
      this.checkedList[ind] = val;
      console.log("my list", this.checkedList);
    },
    OndropdownChange(val, event) {

      this.checkedList[val] = event.target.value;
      console.log("my pushed array", this.checkedList);
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
    OnpatientIntent(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
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
          patient_id: this.Id,
          sharp_register_id: this.sharp_register_id,
          result: JSON.stringify([this.checkedList]),
          risk_factor_yes_value: JSON.stringify(Boxvalue),
          status: "0",
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
        try {
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
              patient_id: this.Id,
              sharp_register_id: this.sharp_register_id,
              result: JSON.stringify([this.checkedList]),
              risk_factor_yes_value: JSON.stringify(Boxvalue),
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            this.sharp_register_id = response.data.id;
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
              patient_id: this.Id,
              sharp_register_id: this.sharp_register_id,
              result: JSON.stringify([this.procheckedList]),
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            this.sharp_register_id = response.data.id;
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
        this.error = "Please attempt all question";
      }
    },
    async Onprotectivefactordraft() {
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
              patient_id: this.Id,
              sharp_register_id: this.sharp_register_id,
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


    async DraftSelfHarm() {
      this.errors = [];
      try {
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
        }else if (this.patient_intent == "Undetermined") {
          this.patient_intent_value = "Undetermined";
        } else {
          this.patient_intent_value = "";
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
            patient_id: this.Id,

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
                  intent: this.patient_intent_value +"," + this.intent_other,
                },
              },
              { "Level of Suicidal Intent": this.SItestscore },
            ]),
            sharp_register_id: this.sharp_register_id,
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
          this.errors.push("Place of Occurrence is required.");
        }
        if (!this.secB) {
          this.errors.push("Please tick any box of Method of Self Harm.");
        }
        if (!this.secC) {
          this.errors.push(
            "Please tick any box of How did Patient Get Idea about Method."
          );
        }
        if (!this.secD) {
          this.errors.push("Please tick any box of Suicidal Intent required.");
        }
        if (
          this.Sdate &&
          this.Stime &&
          this.place_id &&
          this.secB &&
          this.secC &&
          this.secD
        ) {
          console.log('intent yesss',this.selected);
          this.loader = true;
          if (this.patient_intent == "intent-yes") {
            this.selected.forEach((value, index) => {
              if (!this.patient_intent_value) {
                this.patient_intent_value ="intent-yes,"+ value;
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
              patient_id: this.Id,
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
                    selfharm_other: this.selfharm_other

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
                    "Specify patient actual words":
                      this.patientactualword,
                      patientactualword_other: this.patientactualword_other,
                  },
                },
                {
                  "Suicidal Intent": {
                    intent: this.patient_intent_value +"," + this.intent_other,
                  },
                },
                { "Level of Suicidal Intent": this.SItestscore },
              ]),
              sharp_register_id: this.sharp_register_id,
              status: "1",

            },
            { headers }
          );
          console.log("my reslut", response.data);
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;
            this.sharp_register_id = response.data.id;
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
    onchangetest(ind, val) {
      this.testcheckedList[ind + 1] = val;
    },
    async OnsubmitTest() {
      this.error = null;
      try {
        if (this.list.length == Object.values(this.testcheckedList).length) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "patient/online-test",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              test_name: "si",
              test_section_name: "SI",
              result: JSON.stringify([{ SI: this.testcheckedList }]),
              user_ip_address: this.user_ip_address,
              shharp_reg_id : this.sharp_register_id,
            },
            { headers }
          );
          console.log("my reslut", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.testresult = response.data.result;
            this.SItestscore = response.data.result.siScore;
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
        } else {
          this.error = "Please attempt all question";
        }
      } catch (e) {
        this.loader = false;
        this.errors = e;
      }
    },

    async OnDraftsuciderisk() {
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
            patient_id: this.Id,
            result: this.result,
            sharp_register_id: this.sharp_register_id,
            status: "0",
          },
          { headers }
        );
        if (response.data.code == 201 || response.data.code == "201") {
          this.sharp_register_id = response.data.id;
          if(dp != "dataProducer"){
          $('#myTab a[href="#hospital-management"]').tab("show");
          }
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
              patient_id: this.Id,
              result: this.result,
              sharp_register_id: this.sharp_register_id,
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

    async OnDraftSavehospitalmanagement() {
      var additionalbox = 0;
      var externalbox = 0;

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
            patient_id: this.Id,
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
            sharp_register_id: this.sharp_register_id,
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
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
    async OnSavehospitalmanagement() {
      var Boxvalue = [];
      var Boxvalue1 = [];
      var additionalbox = "";
      var externalbox = "";

      $("#additionalbox :selected").each(function () {
        if (additionalbox) {
          additionalbox = additionalbox + "," + this.value;
        } else {
          additionalbox = this.value;
        }
      });
      Boxvalue.push({ additionalbox });

      $("#externalbox :selected").each(function () {
        if (externalbox) {
          externalbox = externalbox + "," + this.value;
        } else {
          externalbox = this.value;
        }
      });
      Boxvalue1.push({ externalbox });
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
          this.errors.push("Status on Discharge is required.");
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
        if (!this.discharge_psy_mx) {
          this.errors.push("Psychiatry MX on Dischargeis required.");
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
          this.external_cause_inquiry &&
          this.discharge_psy_mx
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
              patient_id: this.Id,
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
              additional_diagnosis: JSON.stringify(additionalbox),
              additional_external_cause_injury: JSON.stringify(externalbox),
              external_cause_inquiry: this.external_cause_inquiry,
              discharge_psy_mx: this.discharge_psy_mx,
              discharge_psy_mx_des: this.discharge_psy_mx_des,
              sharp_register_id: this.sharp_register_id,
              status: "1",
            },
            { headers }
          );
          console.log("my data", response.data);
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;

            this.sharp_register_id = response.data.id;
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
            patient_id: this.Id,
            name_registering_officer: this.officername,
            hospital_name: this.hospitalname,
            designation: this.designation,
            psychiatrist_name: this.psychiatristId.toString(),
            sharp_register_id: this.sharp_register_id,
            reporting_date:moment().format("YYYY-MM-DD HH:mm:ss"),

            status:"0"
          },
          { headers }
        );
        if (response.data.code == 201 || response.data.code == "201") {
          this.loader = false;

          this.$router.push({
            path: "/modules/Intervention/patient-history",
            query: { id: this.Id },
          });
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'info',
                  title: '',
                  text: JSON.stringify(response.data.message),
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
      if (confirm("Are you sure you want to submit this entry")) {
      this.errors = [];
      try {
        if (!this.presence_psychiatric) {
          this.errors.push("Q1 - Presence of psychiatric disorder in Risk Factors' tab is required.");
        }
        if (!this.hopeless_despair) {
          this.errors.push("Q2 - Hopelessness or despair in Risk Factors' tab is required.");
        }
        if (!this.prev_suicide) {
          this.errors.push("Q3 - Previous suicide attempts in Risk Factors' tab is required.");
        }
        if (!this.substance_abuse) {
          this.errors.push("Q4 - Presence of substance use/abuse in Risk Factors' tab is required.");
        }
        if (!this.family_suicidal) {
          this.errors.push("Q5 - Family history of suicidal behavior in Risk Factors' tab is required.");
        }
        if (!this.history_psych) {
          this.errors.push("Q6 - Family history of psychiatric disorders in Risk Factors' tab is required.");
        }
        if (!this.family_abuse) {
          this.errors.push("Q7 - Family history of substance abuse in Risk Factors' tab is required.");
        }
        if (!this.stressful) {
          this.errors.push("Q8 - Stressful life events or loss in Risk Factors' tab is required.");
        }
        if (!this.rejection) {
          this.errors.push("Q9 - Isolation, rejection or feelings of shame in Risk Factors' tab is required.");
        }
        if (!this.chronic_ill) {
          this.errors.push("Q10 - Chronic physical illness or condition in Risk Factors' tab is required.");
        }
        if (!this.emotional) {
          this.errors.push("Q11 - History of physical, sexual, or emotional abuse in Risk Factors' tab is required.");
        }
        if (!this.lethal) {
          this.errors.push("Q12 - Access to lethal methods/weapons in Risk Factors' tab is required.");
        };

        if(this.procheckedList){
            if(this.procheckedList[13] == '2'){
              this.errors.push("Q1 in Protective Factors' tab is required.");
            }
            if(this.procheckedList[14] == '2'){
              this.errors.push("Q2 in Protective Factors' tab is required.");
            }
            if(this.procheckedList[15] == '2'){
              this.errors.push("Q3 in Protective Factors' tab is required.");
            }
            if(this.procheckedList[16] == '2'){
              this.errors.push("Q4 in Protective Factors' tab is required.");
            }
            if(this.procheckedList[17] == '2'){
              this.errors.push("Q5 in Protective Factors' tab is required.");
            }
            if(this.procheckedList[18] == '2'){
              this.errors.push("Q6 in Protective Factors' tab is required.");
            }
          };

        if (!this.Sdate) {
          this.errors.push("Date in Self Harm's tab is required .");
        }
        if (!this.Stime) {
          this.errors.push("Time in Self Harm's tab is required.");
        }
        if (!this.place_id) {
          this.errors.push("Place of Occurrence in Self Harm's tab is required.");
        }
        if (!this.secB) {
          this.errors.push("Please tick any box of Method of Self Harm in Self Harm's tab.");
        }
        if (!this.secC) {
          this.errors.push(
            "Please tick any box of How did Patient Get Idea about Method in Self Harm's tab."
          );
        }
        if (!this.secD) {
          this.errors.push("Please tick any box of Suicidal Intent in Self Harm's tab.");
        }

        if (!this.referral_or_contact) {
          this.errors.push("Referral or Contact point in Hospital Management's tab is required.");
        }
        if (!this.arrival_mode) {
          this.errors.push("Mode of Arrival in Hospital Management's tab is required.");
        }
        if (!this.date) {
          this.errors.push("Date in Hospital Management's tab is required.");
        }
        if (!this.time) {
          this.errors.push("Time in Hospital Management's tab is required.");
        }
        if (!this.physical_consequences) {
          this.errors.push("Physical consequence in Hospital Management's tab is required.");
        }
        if (!this.patient_admitted) {
          this.errors.push("patient admitted for current in Hospital Management's tab is required.");
        }
        if (!this.discharge_status) {
          this.errors.push("Status on Discharge in Hospital Management's tab is required.");
        }
        if (!this.discharge_date) {
          this.errors.push("Discharge Date in Hospital Management's tab is required.");
        }
        if (!this.discharge_number_days_in_ward) {
          this.errors.push("Number of days in ward in Hospital Management's tab is required.");
        }
        if (!this.main_psychiatric_diagnosis) {
          this.errors.push("Main psychiatric diagnosis in Hospital Management's tab is required.");
        }
        if (!this.external_cause_inquiry) {
          this.errors.push("External cause of injury in Hospital Management's tab is required.");
        }
        if (!this.discharge_psy_mx) {
          this.errors.push("Psychiatry Management on Discharge in Hospital Management's tab required.");
        }

        if (!this.result) {
          this.errors.push("Please select Risk Level in Suicide Risk's tab.");
        }

        if (!this.officername) {
          this.errors.push("Name of registering officer in Data Producer's tab is required.");
        }
        if (!this.hospitalname) {
          this.errors.push("Name of hospital in Data Producer's tab is required.");
        }
        if (!this.designation) {
          this.errors.push("Designation in Data Producer's tab is required.");
        }
        if (!this.psychiatristId) {
          this.errors.push("Name of Psychiatrist in Data Producer's tab is required.");
        }
        if (!this.reportingdate) {
          this.errors.push("Date of Reporting in Data Producer's tab is required.");
        }
        if (
          this.officername &&
          this.hospitalname &&
          this.designation &&
          this.psychiatristId &&
          this.reportingdate &&
          this.Sdate &&
          this.Stime &&
          this.place_id &&
          this.secB &&
          this.secC &&
          this.secD &&
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
          this.discharge_psy_mx
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
              patient_id: this.Id,
              name_registering_officer: this.officername,
              hospital_name: this.hospitalname,
              designation: this.designation,
              psychiatrist_name: this.psychiatristId.toString(),
              sharp_register_id: this.sharp_register_id,
              reporting_date: moment().format("YYYY-MM-DD HH:mm:ss"),
              status:"1"
            },
            { headers }
          );
          if (response.data.code == 201 || response.data.code == "201") {
            this.loader = false;

            this.$router.push({
              path: "/modules/Intervention/patient-history",
              query: { id: this.Id },
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
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    }
    },
  },
};

</script>
<style>
  input#AW{ /*AW - Admitting Ward */
    height:50px;
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
</style>
<!-- <style scoped>
/* #myTab .nav-item a {
  pointer-events: none;
} */
.hide {
  display: none;
}
</style> -->
