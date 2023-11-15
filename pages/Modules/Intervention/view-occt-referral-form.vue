<template>
    <div id="layoutSidenav">
        <CommonSidebar />
        <div id="layoutSidenav_content">
            <CommonHeader />
            <main id="result" ref="result">
                <div class="container-fluid px-4" >
                    <div class="page-title">
                        <h1>OCCT REFERRAL FORM</h1>
                        <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
                    </div>
                    <div class="card mb-4">
                        <div class="card-body">
                                <table class="notes">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Patient Details</th>
  
                                        </tr>
                                    </thead>
                                    <tbody v-if="patientdetails">
                                        <tr>
                                            <th>MRN:</th>
                                         <td>{{ patientdetails.patient_mrn }}</td>
                                        </tr>
                                        <tr>
                                            <th>Patient Name:</th>
                                         <td>{{ patientdetails.patient_name }}</td>
                                        </tr>
                                        <tr>
                                            <th>NRIC NO:</th>
                                            <td>{{ patientdetails.nric }}</td>
                                        </tr>
                                        <tr>
                                            <th>Age:</th>
                                          <td>{{ patientdetails.age }}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact No:</th>
                                            <td>{{ patientdetails.contact_no }}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender:</th>
                                         <td>{{ patientdetails.gender }}</td>
                                        </tr>
                                        <tr>
                                            <th>DOB:</th>
                                            <td>{{ patientdetails.birth_date }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="notes">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Psychotherapy Progress Note </th>
  
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Referral Location<small style="color:red">*</small> : </th>
                                            <td>
                                                <input disabled type="text" class="form-control mt-3" v-model="referral_location">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Referral Date<small style="color:red">*</small> : </th>
                                            <td>
                                                <input disabled type="date" class="form-control" v-model="date">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Diagnosis: </th>
                                            <td>
                                                <select disabled v-model="type_diagnosis_id" class="form-select" aria-label="Default select example">
                                                    <option value="0">Select Diagnosis</option>
                                <option
              v-for="catcode in diagonisislist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
            {{ catcode.icd_code }} {{catcode.icd_name}}
            </option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Referral Purpose<small style="color:red">*</small> :</th>
                                            <td>
                                                <table class="sub-table">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2">Clinical Assessment: </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                              <div class="col-sm-8 cla-box">
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="livingassessment"
                                                                         id="cla-1">
                                                                    <label class="form-check-label" for="cla-1">
                                                                        Activities Living Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="behaviorassessment"
                                                                         id="cla-2">
                                                                    <label class="form-check-label" for="cla-2">
                                                                        Behavior Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="cognitiveassessment"
                                                                         id="cla-3">
                                                                    <label class="form-check-label" for="cla-3">
                                                                        Cognitive And Perceptual Assessment
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="childevelopment"
                                                                      id="cla-4">
                                                                    <label class="form-check-label" for="cla-4">
                                                                        Child Development
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="psychology"
                                                                      id="cla-5">
                                                                    <label class="form-check-label" for="cla-5">
                                                                        Psychological Assessment
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="seatwheelchair"
                                                                      id="cla-6">
                                                                    <label class="form-check-label" for="cla-6">
                                                                        Seating and Wheelchair Assessment
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="domestic"
                                                                      id="cla-7">
                                                                    <label class="form-check-label" for="cla-7">
                                                                        Domestic Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="driving"
                                                                      id="cla-8">
                                                                    <label class="form-check-label" for="cla-8">
                                                                        Driving Assessment
                                                                    </label>
                                                                </div>
                                                              </div>
                                                            </td>
  
                                                            <td>
                                                              <div class="col-sm-8 cla-box">
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="handlimb"
                                                                    id="cla-9">
                                                                    <label class="form-check-label" for="cla-9">
                                                                        Hand Function And Upper Limb Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="workhomeschool"
                                                                      id="cla-10">
                                                                    <label class="form-check-label" for="cla-10">
                                                                        Work/home/school Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="sensorymotor"
                                                                      id="cla-11">
                                                                    <label class="form-check-label" for="1cla-1">
                                                                        Sensory Motor Assessment
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="preschool"
                                                                      id="cla-12">
                                                                    <label class="form-check-label" for="cla-12">
                                                                        Pre School/school Skill Assessment
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="leisure"
                                                                      id="cla-13">
                                                                    <label class="form-check-label" for="cla-13">
                                                                        Play Leisure Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="true" v-model="workassessmnt"
                                                                      id="cla-14">
                                                                    <label class="form-check-label" for="cla-14">
                                                                        Work Assessment
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox"  value="Others" v-model="others"
                                                                      id="cla-15"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#Others-1">
                                                                    <label class="form-check-label" for="cla-15">
                                                                        Others
                                                                    </label>
                                                                </div>
  
                                                                <div class="collapse" id="Others-1">
                                                                    <input disabled type="text" class="form-control" v-model="referral_clinical_assessment_other"
                                                                        placeholder="Please Specify">
                                                                </div>
                                                              </div>
                                                            </td>
  
                                                        </tr>
                                                         <!-- <tr v-if="pid">
                                                            <td>
                                                                <div class="form-check" v-for="(clinical,index) in clinicallist" :key="index">
                                                                    <input class="form-check-input" type="checkbox" checked
                                                                         id="1">
                                                                    <label class="form-check-label" for="1">
                                                                        {{clinical}}
                                                                    </label>
                                                                </div>
                                                            </td>
  
                                                        </tr> -->
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
  
                                        <tr>
                                            <th></th>
                                            <td>
                                                <table class="sub-table">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2">Intervention: </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                              <div class="col-sm-8 inv-box">
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="activitytraining"
                                                                      id="inv-1">
                                                                    <label class="form-check-label" for="inv-1">
                                                                        Activity Of Daily Living Training
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="aids"
                                                                      id="inv-2">
                                                                    <label class="form-check-label" for="inv-2">
                                                                        AIDS Adaptation/Assistive Devices
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="behavetherapy"
                                                                      id="inv-3">
                                                                    <label class="form-check-label" for="inv-3">
                                                                        Behavioural Therapy
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="cognitivetraining"
                                                                      id="inv-4">
                                                                    <label class="form-check-label" for="inv-4">
                                                                        Cognitive And Perceptual Training
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="compression"
                                                                      id="inv-5">
                                                                    <label class="form-check-label" for="inv-5">
                                                                        Compression Therapy
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="creative"
                                                                    id="inv-6">
                                                                    <label class="form-check-label" for="inv-6">
                                                                        Creative Therapy
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="socialtraining"
                                                                      id="inv-7">
                                                                    <label class="form-check-label" for="inv-7">
                                                                        Social Skill Training
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="relaxtherapy"
                                                                      id="inv-8">
                                                                    <label class="form-check-label" for="inv-8">
                                                                        Relaxation Therapy/Stress Management
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="lowvision"
                                                                      id="inv-9">
                                                                    <label class="form-check-label" for="inv-9">
                                                                        Low Vision Rehabilitation
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="domesticrehab"
                                                                      id="inv-10">
                                                                    <label class="form-check-label" for="inv-10">
                                                                        Domestic Rehabilitation
                                                                    </label>
                                                                </div>
                                                              </div>
                                                            </td>
  
                                                            <td>
                                                              <div class="col-sm-8 inv-box">
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="motorhand"
                                                                      id="inv-11">
                                                                    <label class="form-check-label" for="inv-11">
                                                                        Fine Motor/Hand Function Training
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="grossmotor"
                                                                      id="inv-12">
                                                                    <label class="form-check-label" for="inv-12">
                                                                        Gross Motor/Functional Mobility
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="ptcareereducate"
                                                                     id="inv-13">
                                                                    <label class="form-check-label" for="inv-13">
                                                                        Patient's And Carer's Education
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="playleisure"
                                                                      id="inv-14">
                                                                    <label class="form-check-label" for="inv-14">
                                                                        Play And Leisure(Explanation And Training)
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="sensoryintegrity"
                                                                      id="inv-15">
                                                                    <label class="form-check-label" for="inv-15">
                                                                        Sensory Integration Training
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="wheelchairtraining"
                                                                      id="inv-16">
                                                                    <label class="form-check-label" for="inv-16">
                                                                        Wheelchair Training
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="workrehab"
                                                                      id="inv-17">
                                                                    <label class="form-check-label" for="inv-18">
                                                                        Work Rehabilitation
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="splint"
                                                                       id="inv-19">
                                                                    <label class="form-check-label" for="inv-19">
                                                                        Splint
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="Others" v-model="others2"
                                                                      id="inv-20"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#Others-2">
                                                                    <label class="form-check-label" for="inv-20">
                                                                        Others
                                                                    </label>
                                                                </div>
  
                                                                <div class="collapse" id="Others-2">
                                                                    <input disabled type="text" class="form-control" name="" v-model="referral_clinical_intervention_other"
                                                                        placeholder="Please Specify">
                                                                </div>
                                                              </div>
                                                            </td>
  
                                                        </tr>
                                                         <!-- <tr v-if="pid">
                                                            <td>
                                                                <div class="form-check" v-for="(interven,index) in interventionlist" :key="index">
                                                                    <input class="form-check-input" type="checkbox" checked
                                                                        name="" id="1.11">
                                                                    <label class="form-check-label" for="1.11">
                                                                        {{interven}}
                                                                    </label>
                                                                </div>
  
                                                            </td>
  
                                                        </tr> -->
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
  
                                        <tr>
                                            <th></th>
                                            <td>
                                                <table class="sub-table">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2">Promotive Program: </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                              <div class="col-sm-8 prp-box">
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="specialneeds"
                                                                        name="" id="prp-1">
                                                                    <label class="form-check-label" for="prp-1">
                                                                        Special Needs Children Program
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="mentalhealth"
                                                                        name="" id="prp-2">
                                                                    <label class="form-check-label" for="prp-2">
                                                                        Mental Health Program
                                                                    </label>
                                                                </div>
  
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="seniorcitizen"
                                                                        name="" id="prp-3">
                                                                    <label class="form-check-label" for="prp-3">
                                                                        Senior Citizen Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="communityprog"
                                                                        name="" id="prp-4">
                                                                    <label class="form-check-label" for="prp-4">
                                                                        Community Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="outpatient"
                                                                        name="" id="prp-5">
                                                                    <label class="form-check-label" for="prp-5">
                                                                        Out Patient Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="teenschool"
                                                                        name="" id="prp-6">
                                                                    <label class="form-check-label" for="prp-6">
                                                                        Teenagers And School Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="diabetes"
                                                                        name="" id="prp-7">
                                                                    <label class="form-check-label" for="prp-7">
                                                                        Diabetes Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="hypertension"
                                                                        name="" id="prp-8">
                                                                    <label class="form-check-label" for="prp-8">
                                                                        Hypertension Program
                                                                    </label>
                                                                </div>
                                                                 <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="antenatalmotherchild"
                                                                        name="" id="prp-9">
                                                                    <label class="form-check-label" for="prp-9">
                                                                        Antenatal/Mother And Child Program
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input disabled class="form-check-input" type="checkbox" value="true" v-model="healthylife"
                                                                        name="" id="prp-10">
                                                                    <label class="form-check-label" for="prp-10">
                                                                        Healthy Lifestyle Program
                                                                    </label>
                                                                </div>
                                                              </div>
                                                            </td>
                                                        </tr>
                                                         <!-- <tr v-if="pid">
                                                            <td>
                                                                <div class="form-check" v-for="(promo,index) in promotivelist" :key="index">
                                                                    <input class="form-check-input" type="checkbox" checked
                                                                        name="" id="1.21">
                                                                    <label class="form-check-label" for="1.21">
                                                                        {{promo}}
                                                                    </label>
                                                                </div>
  
                                                            </td>
                                                        </tr> -->
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
  
                                        <tr>
                                            <th>Referral Name: </th>
                                            <td>
                                                <input disabled type="text" class="form-control" v-model="referral_name">
                                            </td>
                                        </tr>
  
                                        <tr>
                                            <th>Designation: </th>
                                            <td>
                                                <input disabled type="text" class="form-control" v-model="referral_designation">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
  
  
  
  
                                <div
                  class="accordion form-accordion mt-3"
                  id="accordionExample"
                >
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
                        OCCASION OF SERVICES
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Location Of Services<small style="color:red">*</small> </label
                          >
                          <div class="col-sm-8">
                            <select disabled
                              class="form-select"
                              v-model="location_services"
                            >
                              <option value="0">
                                Select location of services
                              </option>
                             <option
              v-for="loc in locationlist"
              v-bind:key="loc.id"
              v-bind:value="loc.id"
            >
              {{ loc.section_value }}
            </option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Type Of Diagnosis<small style="color:red">*</small> </label
                          >
                          <div class="col-sm-8">
                            <select disabled class="form-select" v-model="type_diagnosis_id">
                                <option value="0">Select Diagnosis</option>
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
                                                  <label class="col-sm-4 col-form-label"
                                                      >Additional Diagnosis</label
                                                  >
                                                  <div class="col-sm-8">
                                                      <select disabled
                                                          id="additionalboxdiagnosis" v-model="additional_diagnosis"
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
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Category Of Services<small style="color:red">*</small> 
                          </label>
                          <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                              <input disabled
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="assisstance"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio1"
                                >Assisstance / Supervision</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input disabled
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions2"
                                id="inlineRadio2"
                                value="clinical-work"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >Clinical Work / Procedure
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input disabled
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions3"
                                id="inlineRadio3"
                                value="external"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio3"
                                >External</label
                              >
                            </div>
                          </div>
                        </div>
                        <!-- close-row -->
                        <!-- hide-div -->
                        <div class="assisstance services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
                              <select disabled class="form-select" v-model="services_id">
                                 <option value="0">Select Service</option>
                      <option
                        v-for="slt in assistancelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.section_value }}
                      </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 01 -->
                        <div class="clinical-work services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 CODE<small style="color:red">*</small> </label>
                              <select disabled class="form-select" v-model="code_id"  @change="onCategorycodebind($event)">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
             {{ type.icd_category_code }} {{type.icd_category_name}}
            </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE<small style="color:red">*</small> </label>
                              <select disabled id="subcodeicd" 
                               class="form-select multiselectadditional" 
                               v-model="sub_code_id" 
                               multiple="multiple">
                                <option value="0">Select sub code</option>
                                <option
              v-for="catcode in icdcatcodelist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
               {{ catcode.icd_code }}
  {{catcode.icd_name}}
            </option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6 mb-">
                              <label class="form-label">Additional ICD 9 CODE</label>
                                  <select disabled class="form-select" v-model="additional_code_id"  @change="onCategorycodebindAdditional($event)">
                                      <option value="0">Select additional code</option>
                                          <option v-for="type in codelist" v-bind:key="type.id" v-bind:value="type.id">
                                              {{ type.icd_category_code }} {{type.icd_category_name}}
                                                   </option>
                                                  </select>              
                                  </div>
                                  <div class="col-md-6 mb-3">
                                      <label  class="form-label">Additional ICD 9 SUB CODE</label>
                                        <div class="mt-2 align-items-flex-start">
                                          <select disabled id="additionalsubcodeicd" v-model="additional_sub_code_id" style="width:100%" class="form-select multiselectadditionalsubcode"  multiple="multiple">
                                          <option value="0">Select additional sub code</option>                                                           
                                          <option v-for="catcode in icdcatcodelistadditional" v-bind:key="catcode.id" v-bind:value="catcode.id">
                                          {{ catcode.icd_code }}
                                          {{catcode.icd_name}}
                                          </option>
                                          </select>
                                          </div>
                                        </div>
                                    </div>   
                        </div>
                        <!-- 02 -->
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services<small style="color:red">*</small> </label>
                              <select disabled class="form-select" v-model="serviceid">
                                <option value="0">Select Service</option>
                      <option
                        v-for="slt in externallist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.section_value }}
                      </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- 03 -->
                        <!-- hide-div -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label class="form-label"
                              >Complexity Of Service<small style="color:red">*</small> </label
                            >
                            <select disabled
                              class="form-select"
                              v-model="complexity_services"
                            >
                              <option value="0">
                                Select Complexity Of Service
                              </option>
                      <option
                        v-for="cm in comlexcitylist"
                        v-bind:key="cm.id"
                        v-bind:value="cm.id"
                      >
                        {{ cm.section_value }}
                      </option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label class="form-label">Outcome<small style="color:red">*</small> </label>
                            <select disabled class="form-select" v-model="outcome">
                              <option value="0">Select outcome</option>
                      <option
                        v-for="out in outcomelist"
                        v-bind:key="out.id"
                        v-bind:value="out.id"
                      >
                        {{ out.section_value }}
                      </option>
                            </select>
                          </div>
                        </div>
                        <!-- close-row -->
                      </div>
                    </div>
                  </div>
                  <!--  -->
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
                        MEDICATION
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="col-md-12 mb-3">
                          <label class="form-label">Medication</label>
                          <textarea disabled
                            class="form-control textarea"
                            placeholder="Please Type Prescription Here"
                            v-model="medication_des"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
                                <p v-if="errorList.length">
                                <ul>
                                    <li style="color:red" v-for='err in errorList' :key='err'>
                                        {{ err }}
                                    </li>
                                </ul>
                                </p>
                                <br>
                       <br>
                <div class="d-flex">
                    <button
                      @click="GoBack"
                      class="btn btn-primary btn-text"
                      ><i class="fa fa-arrow-alt-to-left"></i> Back
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
  import CommonHeader from "../../../components/CommonHeader.vue";
  import CommonSidebar from "../../../components/CommonSidebar.vue";
  export default {
  components: { CommonSidebar, CommonHeader },
  name: "occt-referral-form",
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
      $('.cla-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
      $('.prp-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
      $('.inv-box input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
      });
    });
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    this.appId = urlParams.get("appId");
      this.GetList();
      this.GetPatientdetails();
    let urlParams1 = new URLSearchParams(window.location.search);
    this.pid = urlParams1.get("pid");
    this.type = urlParams1.get("type");
      this.getdetails();
    
    this.referral_name = this.userdetails.user.name;
    this.referral_designation = this.userdetails.designation.section_value;
  },
  data() {
    return {
      userdetails: null,
      patientdetails: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      Id: 0,
      referral_location: "",
      date: "",
      diagnosis_id: 0,
      referral_clinical_assessment: "",
      referral_clinical_assessment_other: "",
      referral_clinical_intervention: "",
      referral_clinical_intervention_other: "",
      referral_clinical_promotive_program: "",
      referral_name: "",
      referral_designation: "",
      location_services: 0,
      type_diagnosis_id: 0,
      category_services: "",
      code_id: 0,
      complexity_services: 0,
      outcome: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      assistancelist: [],
      externallist: [],
      pid: 0,
      type: "",
      livingassessment:"",
      behaviorassessment:"",
      cognitiveassessment:"",
      childevelopment:"",
      psychology:"",
      seatwheelchair:"",
      domestic:"",
      driving:"",
      handlimb:"",
      workhomeschool:"",
      sensorymotor:"",
      preschool:"",
      leisure:"",
      workassessmnt:"",
      others:"",
      activitytraining:"",
      aids:"",
      behavetherapy:"",
      cognitivetraining:"",
      compression:"",
      creative:"",
      socialtraining:"",
      relaxtherapy:"",
      lowvision:"",
      domesticrehab:"",
      motorhand:"",
      grossmotor:"",
      ptcareereducate:"",
      playleisure:"",
      sensoryintegrity:"",
      wheelchairtraining:"",
      workrehab:"",
      splint:"",
      others2:"",
      specialneeds:"",
      mentalhealth:"",
      seniorcitizen:"",
      communityprog:"",
      outpatient:"",
      teenschool:"",
      diabetes:"",
      hypertension:"",
      antenatalmotherchild:"",
      healthylife:"",
      SidebarAccess:null,
      appId:0,
      showStatus:0,
      icdcatcodelistadditional:[],
      additional_code_id: 0,
      additional_diagnosis: 0,
      sub_code_id:0,
      additional_sub_code_id:0,
    };
  },
  mounted() {
      
      $(document).ready(function () {
      $(".multiselect").select2({
          placeholder: "Select Additional Diagnosis",
      });
      });
  
      $(document).ready(function () {
      $(".multiselectadditional").select2({
          placeholder: "Select Sub Code",
      });
      });
      $(document).ready(function () {
      $(".multiselectadditionalsubcode").select2({
          placeholder: "Select Additional Sub Code",
      });
      });
      },
  
  methods: {
    async onCreateEvent() {
      if (confirm("Are you sure you want to save as draft?")) {
        var Boxvalue1=[];
                      var Boxvalue2=[];
                      var Boxvalue3=[];
                      var additionalboxdiagnosis = 0;
                          var subcodeicd = 0;
                          var additionalsubcodeicd = 0;
                          $("#additionalboxdiagnosis :selected").each(function () {
                              if (additionalboxdiagnosis) {
                                  additionalboxdiagnosis = additionalboxdiagnosis + "," + this.value;
                              } else {
                                  additionalboxdiagnosis = this.value;
                              }
                          });
                          Boxvalue1.push({ additionalboxdiagnosis });
  
                          $("#subcodeicd :selected").each(function () {
                              if (subcodeicd) {
                                  subcodeicd = subcodeicd + "," + this.value;
                              } else {
                                  subcodeicd = this.value;
                              }
                          });
                          Boxvalue2.push({ subcodeicd });
  
                          $("#additionalsubcodeicd :selected").each(function () {
                              if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                              } else {
                              additionalsubcodeicd = this.value;
                              }
                          });
                          Boxvalue3.push({ additionalsubcodeicd });
      try {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "occt-referral/add",
            {
              type:"add",
              added_by: this.userdetails.user.id.toString(),
              patient_mrn_id: this.Id,
              referral_location: this.referral_location,
              date: this.date,
              diagnosis_id: this.type_diagnosis_id, //diagnosis_id
              referral_clinical_assessment: JSON.stringify([
                {
                  "Activities Living Assessment": this.livingassessment,
                  "Behavior Assessment": this.behaviorassessment,
                  "Cognitive And Perceptual Assessment": this.cognitiveassessment,
                  "Child Development": this.childevelopment,
                  "Psychological Assessment": this.psychology,
                  "Seating and Wheelchair Assessment": this.seatwheelchair,
                  "Domestic Assessment": this.domestic,
                  "Driving Assessment": this.driving,
                  "Hand Function And Upper Limb Assessment": this.handlimb,
                  "Work/home/school Assessment": this.workhomeschool,
                  "Sensory Motor Assessment": this.sensorymotor,
                  "Pre School/school Skill Assessment": this.preschool,
                  "Play Leisure Assessment": this.leisure,
                  "Work Assessment": this.workassessmnt,
                  "Others": this.others,
                },
              ]),
              referral_clinical_assessment_other:
                this.referral_clinical_assessment_other,
              referral_clinical_intervention:JSON.stringify([
                {
                  "Activity Of Daily Living Training": this.activitytraining,
                  "AIDS Adaptation/Assistive Devices": this.aids,
                  "Behavioural Therapy": this.behavetherapy,
                  "Cognitive And Perceptual Training": this.cognitivetraining,
                  "Compression Therapy": this.compression,
                  "Creative Therapy": this.creative,
                  "Social Skill Training": this.socialtraining,
                  "Relaxation Therapy/Stress Management": this.relaxtherapy,
                  "Low Vision Rehabilitation": this.lowvision,
                  "Domestic Rehabilitation": this.domesticrehab,
                  "Fine Motor/Hand Function Training": this.motorhand,
                  "Gross Motor/Functional Mobility": this.grossmotor,
                  "Patient's And Carer's Education": this.ptcareereducate,
                  "Play And Leisure(Explanation And Training)": this.playleisure,
                  "Sensory Integration Training": this.sensoryintegrity,
                  "Wheelchair Training": this.wheelchairtraining,
                  "Work Rehabilitation": this.workrehab,
                  "Splint": this.splint,
                  "Others": this.others2,
                },
              ]),
              referral_clinical_intervention_other:
                this.referral_clinical_intervention_other,
              referral_clinical_promotive_program:JSON.stringify([
                {
                "Special Needs Children Program": this.specialneeds,
                "Mental Health Program": this.mentalhealth,
                "Senior Citizen Program": this.seniorcitizen,
                "Community Program": this.communityprog,
                "Out Patient Program": this.outpatient,
                "Teenagers And School Program": this.teenschool,
                "Diabetes Program": this.diabetes,
                "Hypertension Program": this.hypertension,
                "Antenatal/Mother And Child Program": this.antenatalmotherchild,
                "Healthy Lifestyle Program": this.healthylife,
                },
              ]),
              referral_name: this.referral_name,
              referral_designation: this.referral_designation,
              location_services: this.location_services,
              services_id: this.services_id,
              code_id: this.code_id,
              type_diagnosis_id: this.type_diagnosis_id,
              category_services: this.category_services,
              complexity_services: this.complexity_services,
              outcome: this.outcome,
              medication_des: this.medication_des,
              id:this.pid,
              appId: this.appId,
              status: "0",
              additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
              additional_code_id: this.additional_code_id, 
              sub_code_id: JSON.stringify(subcodeicd),
              additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
            },
            { headers }
          );
          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
  
            this.$swal.fire({
              title: 'Are you sure to save this draft?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, submit it!',
              cancelButtonText: 'No, cancel!',
              reverseButtons: true
            }
            ).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Submitted!',
                  'Your for has been submitted.',
                  'success'
                )
  
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Your data is not submitted :)',
                  'error'
                )
              }
            })
          } else {
            this.loader = false;
            this.$swal.fire({
            icon: 'error',
            title: 'Oops... Something Went Wrong!',
            text: 'the error is: ' + this.error,
          })
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
    }
    },
    async onPublishEvent() {
      const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        this.validate = true;
        this.errorList = [];
        var Boxvalue1=[];
                      var Boxvalue2=[];
                      var Boxvalue3=[];
                      var additionalboxdiagnosis = 0;
                          var subcodeicd = 0;
                          var additionalsubcodeicd = 0;
                          $("#additionalboxdiagnosis :selected").each(function () {
                              if (additionalboxdiagnosis) {
                                  additionalboxdiagnosis = additionalboxdiagnosis + "," + this.value;
                              } else {
                                  additionalboxdiagnosis = this.value;
                              }
                          });
                          Boxvalue1.push({ additionalboxdiagnosis });
  
                          $("#subcodeicd :selected").each(function () {
                              if (subcodeicd) {
                                  subcodeicd = subcodeicd + "," + this.value;
                              } else {
                                  subcodeicd = this.value;
                              }
                          });
                          Boxvalue2.push({ subcodeicd });
  
                          $("#additionalsubcodeicd :selected").each(function () {
                              if (additionalsubcodeicd) {
                              additionalsubcodeicd = additionalsubcodeicd + "," + this.value;
                              } else {
                              additionalsubcodeicd = this.value;
                              }
                          });
                          Boxvalue3.push({ additionalsubcodeicd });
        try {
          if (!this.referral_location) {
            this.errorList.push("Referral Location is required");
          }
          if (!this.date) {
            this.errorList.push("Referral Date is required");
          }
          // if (!this.referral_clinical_assessment) {
          //   this.errorList.push("CLINICAL ASSESSMENT is required");
          // }
          // if (!this.referral_clinical_intervention) {
          //   this.errorList.push("INTERVENTION is required");
          // }
          // if (!this.referral_clinical_promotive_program) {
          //   this.errorList.push("PROMOTIVE PROGRAM is required");
          // }
          if (!this.referral_name) {
            this.errorList.push("Referral Name is required");
          }
          if (!this.referral_designation) {
            this.errorList.push("Designation is required");
          }
          if (!this.location_services) {
            this.errorList.push("Location Of Services is required");
          }
          if (!this.type_diagnosis_id) {
            this.errorList.push("Type Of Diagnosis is required");
          }
          if (!this.category_services) {
            this.errorList.push("Category Of Services is required");
          }
          if (!this.complexity_services) {
            this.errorList.push("Complexity Of Service is required");
          }
          if (this.category_services) {
            if (this.category_services == "assisstance") {
              if (!this.services_id) {
                this.errorList.push("Service is required");
                this.validate = false;
              }
            } else if (this.category_services == "clinical-work") {
              if (!this.code_id) {
                this.errorList.push("ICD 9 CODE is required");
                this.validate = false;
              }
              if (!this.sub_code_id) {
                this.errorList.push("ICD 9 SUB CODE is required");
                this.validate = false;
              }
            } else {
              if (!this.serviceid) {
                this.errorList.push("Services is required");
                this.validate = false;
              } else {
                this.services_id = this.serviceid;
              }
            }
          }
          if (!this.outcome) {
            this.errorList.push("Outcome is required");
          }
          if (
            this.location_services &&
            this.type_diagnosis_id &&
            this.category_services &&
            this.complexity_services &&
            this.outcome &&
            this.validate
          ) {
            this.loader = true;
            const headers = {
              Authorization: "Bearer " + this.userdetails.access_token,
              Accept: "application/json",
              "Content-Type": "application/json",
            };
            const response = await this.$axios.post(
              "occt-referral/add",
              {
                added_by: this.userdetails.user.id.toString(),
                patient_mrn_id: this.Id,
                referral_location: this.referral_location,
                date: this.date,
                diagnosis_id: this.type_diagnosis_id, //diagnosis_id
                referral_clinical_assessment: JSON.stringify([
                  {
                    "Activities Living Assessment": this.livingassessment,
                    "Behavior Assessment": this.behaviorassessment,
                    "Cognitive And Perceptual Assessment": this.cognitiveassessment,
                    "Child Development": this.childevelopment,
                    "Psychological Assessment": this.psychology,
                    "Seating and Wheelchair Assessment": this.seatwheelchair,
                    "Domestic Assessment": this.domestic,
                    "Driving Assessment": this.driving,
                    "Hand Function And Upper Limb Assessment": this.handlimb,
                    "Work/home/school Assessment": this.workhomeschool,
                    "Sensory Motor Assessment": this.sensorymotor,
                    "Pre School/school Skill Assessment": this.preschool,
                    "Play Leisure Assessment": this.leisure,
                    "Work Assessment": this.workassessmnt,
                    "Others": this.others,
                  },
                ]),
                referral_clinical_assessment_other:
                  this.referral_clinical_assessment_other,
                referral_clinical_intervention:JSON.stringify([
                  {
                    "Activity Of Daily Living Training": this.activitytraining,
                    "AIDS Adaptation/Assistive Devices": this.aids,
                    "Behavioural Therapy": this.behavetherapy,
                    "Cognitive And Perceptual Training": this.cognitivetraining,
                    "Compression Therapy": this.compression,
                    "Creative Therapy": this.creative,
                    "Social Skill Training": this.socialtraining,
                    "Relaxation Therapy/Stress Management": this.relaxtherapy,
                    "Low Vision Rehabilitation": this.lowvision,
                    "Domestic Rehabilitation": this.domesticrehab,
                    "Fine Motor/Hand Function Training": this.motorhand,
                    "Gross Motor/Functional Mobility": this.grossmotor,
                    "Patient's And Carer's Education": this.ptcareereducate,
                    "Play And Leisure(Explanation And Training)": this.playleisure,
                    "Sensory Integration Training": this.sensoryintegrity,
                    "Wheelchair Training": this.wheelchairtraining,
                    "Work Rehabilitation": this.workrehab,
                    "Splint": this.splint,
                    "Others": this.others2,
                  },
                ]),
                referral_clinical_intervention_other:
                  this.referral_clinical_intervention_other,
                referral_clinical_promotive_program:JSON.stringify([
                  {
                  "Special Needs Children Program": this.specialneeds,
                  "Mental Health Program": this.mentalhealth,
                  "Senior Citizen Program": this.seniorcitizen,
                  "Community Program": this.communityprog,
                  "Out Patient Program": this.outpatient,
                  "Teenagers And School Program": this.teenschool,
                  "Diabetes Program": this.diabetes,
                  "Hypertension Program": this.hypertension,
                  "Antenatal/Mother And Child Program": this.antenatalmotherchild,
                  "Healthy Lifestyle Program": this.healthylife,
                  },
                ]),
                referral_name: this.referral_name,
                referral_designation: this.referral_designation,
                location_services: this.location_services,
                services_id: this.services_id,
                code_id: this.code_id,
                type_diagnosis_id: this.type_diagnosis_id,
                category_services: this.category_services,
                complexity_services: this.complexity_services,
                outcome: this.outcome,
                medication_des: this.medication_des,
                id:this.pid,
                appId: this.appId,
                status: "1",
                additional_diagnosis: JSON.stringify(additionalboxdiagnosis),
                additional_code_id: this.additional_code_id, 
                sub_code_id: JSON.stringify(subcodeicd),
                additional_sub_code_id: JSON.stringify(additionalsubcodeicd),
              },
              { headers }
            );
            console.log("response", response.data);
            if (response.data.code == 200) {
              this.loader = false;
              this.$swal.fire({
              title: 'Are you sure to submit this?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, submit it!',
              cancelButtonText: 'No, cancel!',
              reverseButtons: true
            }
            ).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Submitted!',
                  'Your for has been submitted.',
                  'success'
                )
                this.showStatus=1;
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Your data is not submitted :)',
                  'error'
                )
              }
            })
          } else {
              this.loader = false;
              this.$swal.fire({
              icon: 'error',
              title: 'Oops... Something Went Wrong!',
              text: 'the error is: ' + this.error,
            })
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
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "general-setting/list?section=" + "complexity-of-service",
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.comlexcitylist = response.data.list;
      } else {
        this.comlexcitylist = [];
      }
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
      const response2 = await this.$axios.get(
        "general-setting/list?section=" + "outcome",
        { headers }
      );
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.outcomelist = response2.data.list;
      } else {
        this.outcomelist = [];
      }
      const response3 = await this.$axios.get("diagnosis/getIcd9codeList", {
        headers,
      });
      if (response3.data.code == 200 || response3.data.code == "200") {
        this.codelist = response3.data.list;
      } else {
        this.codelist = [];
      }
      const response4 = await this.$axios.get("diagnosis/getIcd10codeList", {
        headers,
      });
      if (response4.data.code == 200 || response4.data.code == "200") {
        this.diagonisislist = response4.data.list;
      } else {
        this.diagonisislist = [];
      }
      const response5 = await this.$axios.get(
        "general-setting/list?section=" + "location-of-services",
        {
          headers,
        }
      );
      if (response5.data.code == 200 || response5.data.code == "200") {
        this.locationlist = response5.data.list;
      } else {
        this.locationlist = [];
      }
      const respons = await this.$axios.get(
        "general-setting/list?section=" + "assistance-or-supervision",
        { headers }
      );
      if (respons.data.code == 200 || respons.data.code == "200") {
        this.assistancelist = respons.data.list;
      } else {
        this.assistancelist = [];
      }
      const respon = await this.$axios.get(
        "general-setting/list?section=" + "external",
        { headers }
      );
      if (respon.data.code == 200 || respon.data.code == "200") {
        this.externallist = respon.data.list;
      } else {
        this.externallist = [];
      }
    },
    async onCategorycodebind(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      console.log("my id", event);
      const response = await this.$axios.post(
        "diagnosis/getIcd9subcodeList",
        { icd_category_code: event.target.value },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.icdcatcodelist = response.data.list;
      } else {
        this.icdcatcodelist = [];
      }
    },
    async onCategorycodebindAdditional(event) {
              const headers = {
                  Authorization: "Bearer " + this.userdetails.access_token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
              };
              console.log("my id", event);
              const response = await this.$axios.post(
                  "diagnosis/getIcd9subcodeList", {
                      icd_category_code: event.target.value,
                      
                  }, {
                      headers
                  }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                  this.icdcatcodelistadditional = response.data.list;
                  
              } else {
                  this.icdcatcodelistadditional  = [];
              }
          },
    resetmodel() {
      this.referral_location = "";
      this.date = "";
      this.diagnosis_id = 0;
      this.referral_clinical_assessment = "";
      this.referral_clinical_assessment_other = "";
      this.referral_clinical_intervention = "";
      this.referral_clinical_intervention_other = "";
      this.referral_clinical_promotive_program = "";
      this.referral_name = "";
      this.referral_designation = "";
      this.location_services = 0;
      this.type_diagnosis_id = 0;
      this.category_services = "";
      this.code_id = 0;
      this.sub_code_id = 0;
      this.complexity_services = 0;
      this.outcome = 0;
      this.medication_des = "";
      this.services_id = 0;
    },
    async GetPatientdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "patient/detail",
        {
         patient_id: this.Id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.patientdetails = response.data.details;
      } else {
        this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                  });
      }
    },
    async getdetails() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "/patient-appointment-details/fetchViewHistoryListDetails",
        {
          id: this.pid,
          type: "OcctRefferalForm",
        },
        { headers }
      );
      if (response.data.code == 200) {
  
  
        this.Id = response.data.Data[0].patient_mrn_id;
        this.referral_location = response.data.Data[0].referral_location;
        this.date = response.data.Data[0].date;
        this.diagnosis_id = response.data.Data[0].diagnosis_id;   
  
        var jdata1 = JSON.parse(response.data.Data[0].referral_clinical_assessment);
        jdata1.forEach((ele) => {
        this.referral_clinical_assessment="val";
        if (ele["Activities Living Assessment"]==true) {
            this.livingassessment = true;
          }
          if (ele["Behavior Assessment"]==true) {
            this.behaviorassessment = true;
          }
          if (ele["Cognitive And Perceptual Assessment"]==true) {
            this.cognitiveassessment = true;
          }
          
          if (ele["Child Development"]==true) {
            this.childevelopment = true;
          }
          if (ele["Psychological Assessment"]==true) {
            this.psychology = true;
          }
          if (ele["Seating and Wheelchair Assessment"]==true) {
            this.seatwheelchair = true;
          }
          if (ele["Domestic Assessment"]==true) {
            this.domestic = true;
          }
          if (ele["Driving Assessment"]==true) {
            this.driving = true;
          }
          if (ele["Hand Function And Upper Limb Assessment"]==true) {
            this.handlimb = true;
          }
          if (ele["Work/home/school Assessment"]==true) {
            this.workhomeschool = true;
          }
          if (ele["Sensory Motor Assessment"]==true) {
            this.sensorymotor = true;
          }
          if (ele["Pre School/school Skill Assessment"]==true) {
            this.preschool = true;
          }
          if (ele["Play Leisure Assessment"]==true) {
            this.leisure = true;
          }
          if (ele["Work Assessment"]==true) {
            this.cognitiveassessment = true;
          }
  
          if (ele["Others"]==true) {
            this.others = true;
            this.referral_clinical_assessment_other =
          response.data.Data[0].referral_clinical_assessment_other;
          }
        });
        var jdata2 = JSON.parse(response.data.Data[0].referral_clinical_intervention);
  
        jdata2.forEach((ele) => {
         this.referral_clinical_intervention="val";
         if (ele["Activity Of Daily Living Training"]==true) {
            this.activitytraining = true;
          }
          if (ele["AIDS Adaptation/Assistive Devices"]==true) {
            this.aids = true;
          }
          if (ele["Behavioural Therapy"]==true) {
            this.behavetherapy = true;
          }
          if (ele["Cognitive And Perceptual Training"]==true) {
            this.cognitivetraining = true;
          }
          if (ele["Compression Therapy"]==true) {
            this.compression = true;
          }
          if (ele["Creative Therapy"]==true) {
            this.creative = true;
          }
          if (ele["Social Skill Training"]==true) {
            this.socialtraining = true;
          }
          if (ele["Relaxation Therapy/Stress Management"]==true) {
            this.relaxtherapy = true;
          }
          if (ele["Low Vision Rehabilitation"]==true) {
            this.lowvision = true;
          }
          if (ele["Domestic Rehabilitation"]==true) {
            this.domesticrehab = true;
          }
          if (ele["Fine Motor/Hand Function Training"]==true) {
            this.motorhand = true;
          }
          if (ele["Gross Motor/Functional Mobility"]==true) {
            this.grossmotor = true;
          }
          if (ele["Patient's And Carer's Education"]==true) {
            this.ptcareereducate = true;
          }
          if (ele["Play And Leisure(Explanation And Training)"]==true) {
            this.playleisure = true;
          }
          if (ele["Sensory Integration Training"]==true) {
            this.sensoryintegrity = true;
          }
          if (ele["Wheelchair Training"]==true) {
            this.wheelchairtraining = true;
          }
          if (ele["Work Rehabilitation"]==true) {
            this.workrehab = true;
          }
          if (ele["Splint"]==true) {
            this.splint = true;
          }
          if (ele["Others"]==true) {
            this.others2 = true;
            this.referral_clinical_intervention_other =
          response.data.Data[0].referral_clinical_intervention_other;
          }
        });
  
  
        var jdata3 = JSON.parse(response.data.Data[0].referral_clinical_promotive_program);
        jdata3.forEach((ele) => {
        this.referral_clinical_promotive_program="val";
        if (ele["Special Needs Children Program"]==true) {
            this.specialneeds = true;
          }
          if (ele["Mental Health Program"]==true) {
            this.mentalhealth = true;
          }
          if (ele["Senior Citizen Program"]==true) {
            this.seniorcitizen = true;
          }
          if (ele["Community Program"]==true) {
            this.communityprog = true;
          }
          if (ele["Out Patient Program"]==true) {
            this.outpatient = true;
          }
          if (ele["Teenagers And School Program"]==true) {
            this.teenschool = true;
          }
          if (ele["Diabetes Program"]==true) {
            this.diabetes = true;
          }
          if (ele["Hypertension Program"]==true) {
            this.hypertension = true;
          }
          if (ele["Antenatal/Mother And Child Program"]==true) {
            this.antenatalmotherchild = true;
          }
          if (ele["Healthy Lifestyle Program"]==true) {
            this.healthylife = true;
          }
        });
        this.referral_name = response.data.Data[0].referral_name;
        this.referral_designation = response.data.Data[0].referral_designation;
        this.location_services = response.data.Data[0].location_services;
        this.services_id = response.data.Data[0].services_id;
        this.code_id = response.data.Data[0].code_id;
        this.type_diagnosis_id = response.data.Data[0].type_diagnosis_id;
        this.category_services = response.data.Data[0].category_services;
        this.complexity_services = response.data.Data[0].complexity_services;
        this.outcome = response.data.Data[0].outcome;
        this.medication_des = response.data.Data[0].medication_des;
        this.additional_code_id= response.data.Data[0].add_code_id;
  
        this.GetList();
        this.GetPatientdetails();
  
        this.additional_diagnosis = response.data.Data[0].add_type_diagnosis_id.split(",");
        $("#additionalboxdiagnosis")
        .val(this.additional_diagnosis)
        .trigger("change");
      
        this.sub_code_id = response.data.Data[0].sub_code_id.split(",");
        $("#subcodeicd")
        .val(this.sub_code_id)
        .trigger("change");
  
                      
        this.additional_sub_code_id = response.data.Data[0].add_sub_code_id.split(",");
        $("#additionalsubcodeicd")
        .val(this.additional_sub_code_id)
        .trigger("change");
        
        const response2 = await this.$axios.post(
          "diagnosis/getIcd9subcodeList",
          { icd_category_code: this.code_id },
          { headers }
        );
        if (response2.data.code == 200 || response2.data.code == "200") {
          this.icdcatcodelist = response2.data.list;
        } else {
          this.icdcatcodelist = [];
        }
        const response5 = await this.$axios.post(
                        "diagnosis/getIcd9subcodeList", {
                          icd_category_code: this.additional_code_id
                        }, {
                            headers
                        }
                    );
          if (response5.data.code == 200 || response5.data.code == "200") {
              this.icdcatcodelistadditional = response5.data.list;
            } else {
              this.icdcatcodelistadditional = [];
            }
        if(this.category_services=='clinical-work'){
                      $(document).ready(function () {
                          $('input[name="inlineRadioOptions2"]').trigger('click');
                      });
                  }else if(this.category_services=='external'){
                      $(document).ready(function () {
                          $('input[name="inlineRadioOptions3"]').trigger('click');
                      });
                  }else{
                      $(document).ready(function () {
                          $('input[name="inlineRadioOptions"]').trigger('click');
                      });
                  }
      } else {
        this.$swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong!',
                    text: 'the error is: ' + this.error,
                    footer: ''
                  });
      }
    },
    OnPrint() {
      $('.btn-boxs').hide();
      $('.btn-boxs').click(function(){
        $('.form-accordion .collapse').show();
      });
    setTimeout(() => {
      var pdf = new jsPDF("p", "px", [800, 1800]);
      var options = {
        format: "JPEG",
        pagesplit: true,
        background: "#FFF",
      };
      pdf.addHTML($("#result"), options, function () {
        pdf.save("Occt_Referral.pdf");
        $('.btn-boxs').show();
      });
    }, 1000);
    },
    GoBack(){
      this.$router.push({
              path: "/modules/Intervention/patient-summary",
              query: { id: this.Id, appId: this.appId },
            });
    }
  },
  };
  </script>
  <style scoped>
  .hide {
  display: none;
  }
  </style>
  