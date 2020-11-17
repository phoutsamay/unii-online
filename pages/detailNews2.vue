<template>
  <div class="container">
    <div class="row">
      <div class="leftcolumn mx-auto">
        <div class="card">
          <h2>การสร้างเครือข่ายธุรกิจสำคัญอย่างยิ่ง</h2>
          <h5>3 กันยายน 2563 | ข่าวสารองค์กร</h5>
          <div>
            <img src="../assets/imgs/b1.jpg" alt="" width="100%" />
          </div>
          <br />
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <!-- <div class="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div class="fakeimg" style="height: 200px">Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div> -->
      </div>
      <!-- <div class="rightcolumn">
        <div class="card">
          <h2>About Me</h2>
          <div class="fakeimg" style="height: 100px">Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div class="card">
          <h3>Popular Post</h3>
          <div class="fakeimg">Image</div>
          <br />
          <div class="fakeimg">Image</div>
          <br />
          <div class="fakeimg">Image</div>
        </div>
        <div class="card">
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
