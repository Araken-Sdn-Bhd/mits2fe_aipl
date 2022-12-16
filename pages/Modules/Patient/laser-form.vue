<template>
  <div id="layoutSidenav">
    <CommonHeader />
    <div id="layoutSidenav_content">
      <CommonSidebar />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>L.A.S.E.R Assessment Form</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="patient-info" v-if="details">
                <table class="info-table" width="100%">
                  <thead>
                    <tr>
                      <th width="40%"></th>
                      <th width="60%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MRN</td>
                      <td>{{ details.patient_mrn }}</td>
                    </tr>
                    <tr>
                      <td>Patient Name</td>
                      <td>{{ details.patient_name }}</td>
                    </tr>

                    <tr>
                      <td>Gender</td>
                      <td>{{ details.gender }}</td>
                    </tr>

                    <tr>
                      <td>Date Of Birth</td>
                      <td>{{ details.birth_date }}</td>
                      <!-- <td>09/01/1981 (40 Years old)</td> -->
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5>L.A.S.E.R ASSESSMENT FORM</h5>

              <div class="form-title">
                <h5>Pre Contemplation</h5>
                <p>
                  [1: Strongly Disagree 2: Disagree 3: Undecided 4: Agree 5:
                  Strongly Agree]
                </p>
              </div>

              <table class="form-table">
                <thead>
                  <tr>
                    <th width="50%"></th>
                    <th width="50%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1. I'm not able to work. I do not see why I have to be
                      here.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="1"
                          value=""
                          name="question1"
                          @change="onprecontemplation(1, 1)"
                        />
                        <label class="form-check-label" for="1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2"
                          value=""
                          name="question1"
                          @change="onprecontemplation(1, 2)"
                        />
                        <label class="form-check-label" for="2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3"
                          value=""
                          name="question1"
                          @change="onprecontemplation(1, 3)"
                        />
                        <label class="form-check-label" for="3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4"
                          value=""
                          name="question1"
                          @change="onprecontemplation(1, 4)"
                        />
                        <label class="form-check-label" for="4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5"
                          value=""
                          name="question1"
                          @change="onprecontemplation(1, 5)"
                        />
                        <label class="form-check-label" for="5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      2. Getting myself ready to find a job is pretty much a
                      waste of time because I can't work anyway.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2.1"
                          value=""
                          name="question2"
                          @change="onprecontemplation(2, 1)"
                        />
                        <label class="form-check-label" for="2.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2.2"
                          value=""
                          name="question2"
                          @change="onprecontemplation(2, 2)"
                        />
                        <label class="form-check-label" for="2.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2.3"
                          value=""
                          name="question2"
                          @change="onprecontemplation(2, 3)"
                        />
                        <label class="form-check-label" for="2.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2.4"
                          value=""
                          name="question2"
                          @change="onprecontemplation(2, 4)"
                        />
                        <label class="form-check-label" for="2.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="2.5"
                          value=""
                          name="question2"
                          @change="onprecontemplation(2, 5)"
                        />
                        <label class="form-check-label" for="2.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      3. I guess being out of work is not good, but there is
                      nothing I can do about it right now.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3.1"
                          value=""
                          name="question3"
                          @change="onprecontemplation(3, 1)"
                        />
                        <label class="form-check-label" for="3.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3.2"
                          value=""
                          name="question3"
                          @change="onprecontemplation(3, 2)"
                        />
                        <label class="form-check-label" for="3.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3.3"
                          value=""
                          name="question3"
                          @change="onprecontemplation(3, 3)"
                        />
                        <label class="form-check-label" for="3.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3.4"
                          value=""
                          name="question3"
                          @change="onprecontemplation(3, 4)"
                        />
                        <label class="form-check-label" for="3.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="3.5"
                          value=""
                          name="question3"
                          @change="onprecontemplation(3, 5)"
                        />
                        <label class="form-check-label" for="3.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      4. People tell me that I should get a job, but I don't
                      think so.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4.1"
                          value=""
                          name="question4"
                          @change="onprecontemplation(4, 1)"
                        />
                        <label class="form-check-label" for="4.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4.2"
                          value=""
                          name="question4"
                          @change="onprecontemplation(4, 2)"
                        />
                        <label class="form-check-label" for="4.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4.3"
                          value=""
                          name="question4"
                          @change="onprecontemplation(4, 3)"
                        />
                        <label class="form-check-label" for="4.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4.4"
                          value=""
                          name="question4"
                          @change="onprecontemplation(4, 4)"
                        />
                        <label class="form-check-label" for="4.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="4.5"
                          value=""
                          name="question4"
                          @change="onprecontemplation(4, 5)"
                        />
                        <label class="form-check-label" for="4.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      5. All this talk about work is boring. Why can't people
                      just leave me alone?
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5.1"
                          value=""
                          name="question5"
                          @change="onprecontemplation(5, 1)"
                        />
                        <label class="form-check-label" for="5.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5.2"
                          value=""
                          name="question5"
                          @change="onprecontemplation(5, 2)"
                        />
                        <label class="form-check-label" for="5.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5.3"
                          value=""
                          name="question5"
                          @change="onprecontemplation(5, 3)"
                        />
                        <label class="form-check-label" for="5.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5.4"
                          value=""
                          name="question5"
                          @change="onprecontemplation(5, 4)"
                        />
                        <label class="form-check-label" for="5.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="5.5"
                          value=""
                          name="question5"
                          @change="onprecontemplation(5, 5)"
                        />
                        <label class="form-check-label" for="5.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      6. It is pretty much a waste of time getting ready to find
                      a job because I am ready wart to work.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="6.1"
                          value=""
                          @change="onprecontemplation(6, 1)"
                        />
                        <label class="form-check-label" for="6.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="6.2"
                          value=""
                          @change="onprecontemplation(6, 2)"
                        />
                        <label class="form-check-label" for="6.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="6.3"
                          value=""
                          @change="onprecontemplation(6, 3)"
                        />
                        <label class="form-check-label" for="6.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="6.4"
                          value=""
                          @change="onprecontemplation(6, 4)"
                        />
                        <label class="form-check-label" for="6.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="6.5"
                          value=""
                          @change="onprecontemplation(6, 5)"
                        />
                        <label class="form-check-label" for="6.5">5</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="form-title">
                <h5>Contemplation</h5>
                <p>
                  [1: Strongly Disagree 2: Disagree 3: Undecided 4: Agree 5:
                  Strongly Agree]
                </p>
              </div>

              <table class="form-table">
                <thead>
                  <tr>
                    <th width="50%"></th>
                    <th width="50%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1. I think I might be ready to look for some kind of job.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="11"
                          value=""
                          name="question7"
                          @change="oncontemplation(1, 1)"
                        />
                        <label class="form-check-label" for="11">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12"
                          value=""
                          name="question7"
                          @change="oncontemplation(1, 2)"
                        />
                        <label class="form-check-label" for="12">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13"
                          value=""
                          name="question7"
                          @change="oncontemplation(1, 3)"
                        />
                        <label class="form-check-label" for="13">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14"
                          value=""
                          name="question7"
                          @change="oncontemplation(1, 4)"
                        />
                        <label class="form-check-label" for="14">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="15"
                          value=""
                          name="question7"
                          @change="oncontemplation(1, 5)"
                        />
                        <label class="form-check-label" for="15">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>2. It might be worthwhile to work on finding a job</td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12.1"
                          value=""
                          name="question8"
                          @change="oncontemplation(2, 1)"
                        />
                        <label class="form-check-label" for="12.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12.2"
                          value=""
                          name="question8"
                          @change="oncontemplation(2, 2)"
                        />
                        <label class="form-check-label" for="12.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12.3"
                          value=""
                          name="question8"
                          @change="oncontemplation(2, 3)"
                        />
                        <label class="form-check-label" for="12.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12.4"
                          value=""
                          name="question8"
                          @change="oncontemplation(2, 4)"
                        />
                        <label class="form-check-label" for="12.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="12.5"
                          value=""
                          name="question8"
                          @change="oncontemplation(2, 5)"
                        />
                        <label class="form-check-label" for="12.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      3. I have been thinking that it right be time for me to
                      find a job
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13.1"
                          value=""
                          name="question9"
                          @change="oncontemplation(3, 1)"
                        />
                        <label class="form-check-label" for="13.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13.2"
                          value=""
                          name="question9"
                          @change="oncontemplation(3, 2)"
                        />
                        <label class="form-check-label" for="13.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13.3"
                          value=""
                          name="question9"
                          @change="oncontemplation(3, 3)"
                        />
                        <label class="form-check-label" for="13.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13.4"
                          value=""
                          name="question9"
                          @change="oncontemplation(3, 4)"
                        />
                        <label class="form-check-label" for="13.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="13.5"
                          value=""
                          name="question9"
                          @change="oncontemplation(3, 5)"
                        />
                        <label class="form-check-label" for="13.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      4. I know I need to get a job and really think I should
                      work on finding one.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14.1"
                          value=""
                          name="question10"
                          @change="oncontemplation(4, 1)"
                        />
                        <label class="form-check-label" for="14.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14.2"
                          value=""
                          name="question10"
                          @change="oncontemplation(4, 2)"
                        />
                        <label class="form-check-label" for="14.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14.3"
                          value=""
                          name="question10"
                          @change="oncontemplation(4, 3)"
                        />
                        <label class="form-check-label" for="14.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14.4"
                          value=""
                          name="question10"
                          @change="oncontemplation(4, 4)"
                        />
                        <label class="form-check-label" for="14.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="14.5"
                          value=""
                          name="question10"
                          @change="oncontemplation(4, 5)"
                        />
                        <label class="form-check-label" for="14.5">5</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="form-title">
                <h5>Action</h5>
                <p>
                  [1: Strongly Disagree 2: Disagree 3: Undecided 4: Agree 5:
                  Strongly Agree]
                </p>
              </div>

              <table class="form-table">
                <thead>
                  <tr>
                    <th width="50%"></th>
                    <th width="50%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1. I am doing something to get ready to look for a job.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="21"
                          value=""
                          name="question11"
                          @change="onaction(1, 1)"
                        />
                        <label class="form-check-label" for="21">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22"
                          value=""
                          name="question11"
                          @change="onaction(1, 2)"
                        />
                        <label class="form-check-label" for="22">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23"
                          value=""
                          name="question11"
                          @change="onaction(1, 3)"
                        />
                        <label class="form-check-label" for="23">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24"
                          value=""
                          name="question11"
                          @change="onaction(1, 4)"
                        />
                        <label class="form-check-label" for="24">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="25"
                          value=""
                          name="question11"
                          @change="onaction(1, 5)"
                        />
                        <label class="form-check-label" for="25">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      2. I am finally doing something about finding a job.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22.1"
                          value=""
                          name="question12"
                          @change="onaction(2, 1)"
                        />
                        <label class="form-check-label" for="22.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22.2"
                          value=""
                          name="question12"
                          @change="onaction(2, 2)"
                        />
                        <label class="form-check-label" for="22.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22.3"
                          value=""
                          name="question12"
                          @change="onaction(2, 3)"
                        />
                        <label class="form-check-label" for="22.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22.4"
                          value=""
                          name="question12"
                          @change="onaction(2, 4)"
                        />
                        <label class="form-check-label" for="22.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="22.5"
                          value=""
                          name="question12"
                          @change="onaction(2, 5)"
                        />
                        <label class="form-check-label" for="22.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      3. Anyone can talk about wanting to find a job, but I am
                      actually doing something about it.
                    </td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23.1"
                          value=""
                          name="question13"
                          @change="onaction(3, 1)"
                        />
                        <label class="form-check-label" for="23.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23.2"
                          value=""
                          name="question13"
                          @change="onaction(3, 2)"
                        />
                        <label class="form-check-label" for="23.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23.3"
                          value=""
                          name="question13"
                          @change="onaction(3, 3)"
                        />
                        <label class="form-check-label" for="23.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23.4"
                          value=""
                          name="question13"
                          @change="onaction(3, 4)"
                        />
                        <label class="form-check-label" for="23.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="23.5"
                          value=""
                          name="question13"
                          @change="onaction(3, 5)"
                        />
                        <label class="form-check-label" for="23.5">5</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>4. I am actively doing something to find a job.</td>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24.1"
                          value=""
                          name="question114"
                          @change="onaction(4, 1)"
                        />
                        <label class="form-check-label" for="24.1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24.2"
                          value=""
                          name="question114"
                          @change="onaction(4, 2)"
                        />
                        <label class="form-check-label" for="24.2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24.3"
                          value=""
                          name="question114"
                          @change="onaction(4, 3)"
                        />
                        <label class="form-check-label" for="24.3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24.4"
                          value=""
                          name="question114"
                          @change="onaction(4, 4)"
                        />
                        <label class="form-check-label" for="24.4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="24.5"
                          value=""
                          name="question114"
                          @change="onaction(4, 5)"
                        />
                        <label class="form-check-label" for="24.5">5</label>
                      </div>
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
                            >Location Of Services</label
                          >
                          <div class="col-sm-8">
                            <select
                              class="form-select"
                              v-model="location_services_id"
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
                            >Type Of Diagnosis</label
                          >
                          <div class="col-sm-8">
                            <select class="form-select" v-model="type_diagnosis_id">
                                <option value="0">Select Diagnosis</option>
                                <option
              v-for="catcode in diagonisislist"
              v-bind:key="catcode.id"
              v-bind:value="catcode.id"
            >
              {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
            </option>
                              </select>
                          </div>
                        </div>
                        <!-- close-row -->
                        <div class="row mb-3">
                          <label class="col-sm-4 col-form-label"
                            >Category Of Services
                          </label>
                          <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                              <input
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
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="clinical-work"
                                v-model="category_services"
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >Clinical Work / Procedure
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
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
                              <label class="form-label">Services</label>
                              <select class="form-select" v-model="services_id">
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
                              <label class="form-label">ICD 9 CODE</label>
                              <select class="form-select" v-model="code_id"  @change="onCategorycodebind($event)">
                                <option value="0">Select code</option>
                                <option v-for="type in codelist"  v-bind:key="type.id" v-bind:value="type.id">
             {{ type.icd_category_code }} {{type.icd_category_name}}
            </option>
                              </select>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label class="form-label">ICD 9 SUB CODE</label>
                              <select class="form-select" v-model="sub_code_id">
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
                        </div>
                        <!-- 02 -->
                        <div class="external services hide mb-3">
                          <div class="row">
                            <div class="col-md-6 mb-3">
                              <label class="form-label">Services</label>
                              <select class="form-select" v-model="serviceid">
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
                              >Complexity Of Service</label
                            >
                            <select
                              class="form-select"
                              v-model="complexity_services_id"
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
                            <label class="form-label">Outcome</label>
                            <select class="form-select" v-model="outcome_id">
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
                          <textarea
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
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
              <div class="d-flex">
                <button type="submit" class="btn btn-success ml-auto" @click="OnSubmit">
                  <i class="fad fa-paper-plane"></i> Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>© MENTARI MALAYSIA MOH</p>
      </footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "laser-form",
  data() {
    return {
      userdetails: null,
      details: null,
      errorList: [],
      servicelist: [],
      outcomelist: [],
      comlexcitylist: [],
      codelist: [],
      icdcatcodelist: [],
      diagonisislist: [],
      locationlist: [],
      Id: 0,
      location_services_id: 0,
      type_diagnosis_id: 0,
      category_services: 0,
      code_id: 0,
      sub_code_id: 0,
      complexity_services_id: 0,
      outcome_id: 0,
      medication_des: "",
      patient_mrn_id: "",
      services_id: 0,
      serviceid: 0,
      validate: true,
      precontemplation: {},
      contemplation: {},
      action: {},
      assistancelist: [],
      externallist: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.GetPatientdetails();
      this.GetList();
    }
    $(document).ready(function () {
      $('.form-accordion input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".services").not(targetBox).hide();
        $(targetBox).show();
      });
    });
  },
  methods: {
    async GetPatientdetails() {
      this.loader = true;
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
      console.log("my log", response.data);
      if (response.data.code == 200) {
        this.loader = false;
        this.details = response.data.details;
      } else {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
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
    onprecontemplation(ind, val) {
      this.precontemplation[ind] = val;
    },
    oncontemplation(ind, val) {
      this.contemplation[ind] = val;
    },
    onaction(ind, val) {
      this.action[ind] = val;
    },
    async OnSubmit() {
      this.errorList = [];
      this.validate = true;
      try {
        if (Object.values(this.precontemplation).length != 6) {
          this.errorList.push("Please fill all question of PRE CONTEMPLATION");
          this.validate = false;
        }
        if (Object.values(this.contemplation).length != 4) {
          this.errorList.push("Please fill all question of CONTEMPLATION");
          this.validate = false;
        }
        if (Object.values(this.action).length != 4) {
          this.errorList.push("Please fill all question of ACTION");
          this.validate = false;
        }
        if (!this.location_services_id) {
          this.errorList.push("Location Of Services is required");
        }
        if (!this.type_diagnosis_id) {
          this.errorList.push("Type Of Diagnosis is required");
        }
        if (!this.category_services) {
          this.errorList.push("Category Of Services is required");
        }
        if (!this.complexity_services_id) {
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
        if (!this.outcome_id) {
          this.errorList.push("Outcome is required");
        }
        if (!this.medication_des) {
          this.errorList.push("Medication is required");
        }
        if (
          this.location_services_id &&
          this.type_diagnosis_id &&
          this.category_services &&
          this.complexity_services_id &&
          this.outcome_id &&
          this.medication_des &&
          this.validate
        ) {
          this.loader = true;
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "intervention/laser-form",
            {
              added_by: this.userdetails.user.id,
              patient_id: this.Id,
              pre_contemplation: JSON.stringify([this.precontemplation]),
              contemplation: JSON.stringify([this.contemplation]),
              action: JSON.stringify([this.action]),
              result: JSON.stringify([
                { PRE_CONTEMPLATION: this.precontemplation },
                { CONTEMPLATION: this.contemplation },
                { ACTION: this.action },
              ]),
              location_of_service: this.location_services_id,
              type_of_diagnosis: this.type_diagnosis_id,
              category_of_services: this.category_services,
              services: this.services_id,
              complexity_of_services: this.complexity_services_id,
              outcome: this.outcome_id,
              icd_9_code: this.code_id,
              icd_9_subcode: this.sub_code_id,
              medication_prescription: this.medication_des,
              test_name:"laser",
              test_section_name:"laserform",
              user_ip_address: "122.176.47.222",
            },
            { headers }
          );

          console.log("response", response.data);
          if (response.data.code == 200) {
            this.loader = false;
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
          } else {
            this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {}
    },
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
